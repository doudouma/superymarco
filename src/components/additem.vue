<template>
    <div>
        <el-dialog
        title="添加网站"
        :visible.sync="dialogVisible"
       >
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="网站类型"  prop="partid"  >
              <el-select v-model="form.partid" placeholder="请选择">
                <el-option
                  v-for="item in tablePart"
                  :key="item.objectId"
                  :label="item.part"
                  :value="item.objectId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="网站名称"  prop="title" >
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="网站地址"  prop="href">
              <el-input v-model="form.href"></el-input>
            </el-form-item>
            <el-form-item label="网站形象">
                <el-upload
                class="logo-uploader"
                :action="uploadApi"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                >
                <img v-if="imageUrl" :src="imageUrl" class="uploadlogo">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="el-upload__text">只能上传jpg/png文件，且不超过1MB,建议60*60</div>
            </el-form-item>
            <el-form-item label="推荐理由"  prop="des">
                <el-input v-limitText="desMaxLength" type="textarea" v-model="form.des" rows="4"></el-input>
                <span>还可以输入{{desMaxLength - form.des.length >= 0 ?desMaxLength - form.des.length : 0 }}/{{desMaxLength}}</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="submitForm('form')">立即创建</el-button>
                <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
        </el-form>
        </el-dialog>

        <el-button type="primary" icon="el-icon-edit" circle class="additem" title="添加网站" @click="isLogin()"></el-button>
    </div>
</template>

<script>
import storage from '../util/storage'
import {dataAdd} from '../util/mydatas'
import { mapState } from 'vuex'
import Api from '../util/Api'

export default {
  name: 'addItem',
  computed: {
    ...mapState([
      'comloginStatus'
    ])
  },
  data () {
    return {
      form: {
        title: '',
        img: '',
        href: '',
        des: '',
        partid: '',
        isverify: false
      },
      rules: {
        title: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        partid: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        href: [
          { required: true, message: '请输入链接', trigger: 'blur' }
        ],
        des: [
          { required: true, message: '请输入链接', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      imageUrl: '',
      tablePart: [],
      desMaxLength: 140,
      uploadApi: Api.upload
    }
  },
  created () {
    this.initPart()
  },
  methods: {
    isLogin () {
      this.$store.commit('isLogin')
      if (!this.comloginStatus) {
        this.$store.emit('eventlogin')
      } else {
        this.dialogVisible = true
      }
    },
    initPart () {
      const query = Bmob.Query('parts')
      query.order('partOrder')
      query.find().then(res => {
        this.tablePart = res
      })
    },
    submitForm (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj = {
            'title': this.form.title,
            'partid': this.form.partid,
            'img': this.form.img,
            'href': this.form.href,
            'des': this.form.des,
            'isverify': this.form.isverify
          }
          dataAdd('lists', obj, function (res) {
            _this.$message('网站提交成功，还需要审核哦，请耐心等待')
            _this.dialogVisible = false
            let userCompose = {
              user_id: storage.get('user_id'),
              compose_type: 'lists',
              compose_id: res.objectId
            }
            // 提交到关系表userCompose
            console.log(userCompose)
            dataAdd('UserCompose', userCompose, function (res) {
              console.log(res)
            })
          })
        } else {
          this.$message('操作失败')
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.form.img = res.data.url
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLtM = file.size / 1024 / 1024 < 1
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是JPG/GIF/PNG格式!')
      }
      if (!isLtM) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return (isJPG || isPNG) && isLtM
    }
  },
  directives: {
    limitText: {
      update (el, binding, vnode) {
        let _this = vnode.context
        el.childNodes[0].value = _this.form.des
        // 初始化value值，不然会导致value出错
        if (el.childNodes[0].value.length >= binding.value) {
          el.childNodes[0].value = el.childNodes[0].value.slice(0, binding.value)
          // vnode访问上下文,会影响form数据，暂时没有解决
          _this.form.des = el.childNodes[0].value
        }
      }
    }
  }
}
</script>

<style lang="scss">
.additem {
    position:fixed;
    right: 20px;
    bottom: 120px;
    font-size: 20px;
}
.el-upload-dragger {
    width: 220px;
    height: 145px;
    .el-icon-upload {
        margin: 30px 0 0px;
    }
}
.el-dialog {
    width: 36%;
}

.logo-uploader {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height:60px;
    text-align: center;
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 60px;
        height: 60px;

        .uploadlogo {
            width: 60px;
            vertical-align: middle;
        }
    }
}
.el-upload__text {
    line-height: 24px;
    margin-top: 5px;
}
@media (max-width: 991px){
    .el-dialog {
        width: 100%;
    }
}

</style>
