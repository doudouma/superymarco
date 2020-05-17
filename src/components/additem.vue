<template>
    <div>
        <el-dialog
        title="添加网站"
        :visible.sync="dialogVisible"
       >
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="网站类型">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="网站形象">
                <el-upload
                class="logo-uploader"
                action="http://192.168.31.41:8888/upload.php"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                >
                <img v-if="imageUrl" :src="imageUrl" class="uploadlogo">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="el-upload__text">只能上传jpg/png/gif文件，100*100以内，且不超过1MB,建议60*60</div>
            </el-form-item>
            <el-form-item label="网站名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="推荐理由">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        </el-dialog>
        <el-button type="primary" icon="el-icon-edit" circle class="additem" title="添加网站" @click="dialogVisible = true"></el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogVisible: false,
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isGIF = file.type === 'image/gif'
      const isPNG = file.type === 'image/png'
      const isLtM = file.size / 1024 / 1024 < 1

      if (!isJPG && !isGIF && !isPNG) {
        this.$message.error('上传头像图片只能是JPG/GIF/PNG格式!')
      }
      if (!isLtM) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return (isJPG || isGIF || isPNG) && isLtM
    }
  }
}
</script>

<style lang="scss">
.additem {
    position:fixed;
    right: 20px;
    bottom: 120px;
    font-size: 16px;
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
            width: 100px;
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
