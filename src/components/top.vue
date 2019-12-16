<template>
<div>
  <div class="header">
    <div class="container">
      <h1 class="logo">
        <strong> <a href="./index" title="优设导航 - 学设计从这里开始"> <img :src="logo" alt="Super精英导航"> </a> </strong>
        <span class="arrow"><i class="icon-play-circled"></i><em></em></span>
        <ul class="subnav">
          <li> <a href="https://hao.uisdc.com/book" target="_blank">优设图书导航</a> </li><li> <a href="https://hao.uisdc.com/shop" target="_blank">优设电商导航</a> </li>      </ul>
      </h1>
      <div class="primary-menus">
        <ul class="selects">
          <li class="current" data-target="superjy-search"> <span>Super精英</span> </li>
          <li data-target="baidu-search"> <span>百度</span> </li>
        </ul>
        <div class="cont">
          <div class="right-link">
            <a href="https://hao.uisdc.com" class="add_fav" target="_blank"><i class="icon-heart"></i>Ctrl+D收藏导航</a>
            <a href="https://www.uisdc.com/about" target="_blank"><i class="icon-pen-01"></i>联系我们</a>
          </div>
          <div class="left-cont">
            <form class="search" id="superjy-search"  >
              <input type="text"   v-model="searchtxt">
              <button  type="button" class="btn" @click="search()">找找看</button>
            </form>
            <form class="search hidden" id="baidu-search" action="https://www.baidu.com/" method="get" target="_blank">
            <input type="text" value="">
            <button type="submit" name="submit" class="btn">百度一下</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="header-bar">
    <div class="container">
      <div class="bar-left">
        <ul class="">
          <li><a href="https://www.uisdc.com" target="_blank">优设官网</a></li><li><a href="https://hao.uisdc.com/" target="_blank">优设导航</a></li><li><a href="https://hao.uisdc.com/book/" target="_blank">图书导航</a></li><li><a href="https://hao.uisdc.com/shop/" target="_blank">电商导航</a></li><li><a href="https://uiiiuiii.com/" target="_blank">优优教程网</a></li><li><a href="https://uiiiuiii.com/screen/ios.htm" target="_blank">iOS设计规范</a></li><li><a href="https://www.uisdc.com/tag/%E7%A5%9E%E5%99%A8%E6%8E%A8%E8%8D%90" target="_blank">神器推荐</a></li><li><a href="https://pro.uisdc.com/index" target="_blank">优设私房课</a></li><li><a href="https://www.uisdc.com/zt" target="_blank">相见恨晚</a></li>      </ul>
      </div>
      <div class="bar-right ">
        <span>特别推荐</span>
        <a href="https://xue.uisdc.com/draw2/" target="_blank"><i><img src="https://image.uisdc.com/wp-content/uploads/2015/05/dh-pic-3.png" alt="学手绘"></i>学手绘</a><a href="https://xue.uisdc.com/motion/" target="_blank"><i><img src="https://image.uisdc.com/wp-content/uploads/2015/05/dh-pic-4.png" alt="学动效"></i>学动效</a><a href="https://xue.uisdc.com/" target="_blank"><i><img src="https://image.uisdc.com/wp-content/uploads/2018/09/nav-dkt-new2018.jpg" alt="优设大课堂"></i>优设大课堂</a>    </div>
    </div>
  </div> -->
  <div class="header-recommend">
  <div class="container">
    <div class="focus ">
      <span>大家正在关注：</span>
      <a class="" href="https://www.uisdc.com/news" target="_blank" style="animation-delay: 0s;">今天设计圈有啥新鲜事</a> <a class="" href="https://www.uisdc.com/designer-self-study-2" target="_blank" style="animation-delay: 0.1s;">设计师完全自学指南</a> <a class="" href="https://pro.uisdc.com/index" target="_blank" style="animation-delay: 0.2s;">海量优质设计课程</a> <a class="" href="http://weibo.com/1773655610/DBAGHE7bU" target="_blank" style="animation-delay: 0.3s;">高质量免费图库</a> <a class="hide" href="https://www.uisdc.com/knockout-2-0" target="_blank" style="animation-delay: 0s;">PS抠图神器</a> <a class="hide" href="https://www.uisdc.com/tag/%E9%85%8D%E8%89%B2" target="_blank" style="animation-delay: 0.1s;">网页配色基础</a> <a class="hide" href="https://www.uisdc.com/category/hot-download/texture-and-background" target="_blank" style="animation-delay: 0.2s;">纹理打包下载</a> <a class="hide" href="http://weibo.com/1773655610/DAQndaZqy" target="_blank" style="animation-delay: 0.3s;">响应式设计原则</a>     </div>

  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      searchtxt: '',
      logo: require('../assets/superjy.png')
    }
  },
  created () {
    // 回车搜索
    document.onkeypress = (e) => {
      var keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        this.search()// 搜
        return false
      }
    }
  },
  methods: {
    search () {
      this.$bus.$emit('onsearch', this.searchtxt)
      this.$router.push('/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
