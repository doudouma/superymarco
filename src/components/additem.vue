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
                class="upload-img"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
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
      dialogVisible: false
    }
  },
  methods: {

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
@media (max-width: 991px){
    .el-dialog {
        width: 100%;
    }
}

</style>
