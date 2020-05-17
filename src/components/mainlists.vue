<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-1 sidebar">
          <div class="content-sidebar fixed" >
            <dl id="goto">
              <dt style="top: 7px;">
                <span class="show-list"></span>
              </dt>
              <dd v-for="item in parts" :key='item.objectId'>
                <a :href="getItemId(item.typeid)" class="auto-scroll" data-offset="-20" data-speed="500">{{item.part}}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="col-md-11">
          <div v-for="item in parts" :key='item.objectId'>
            <div class="part current" :id="item.typeid" :data-title="item.part">
            <h2>
              <strong>{{item.part}}</strong>
              <a v-if="item.more" :href="item.more" target="_blank">更多 &gt;</a>
            </h2>
            <div class="items">
              <div class="row">
                  <div class="col-xs-6 col-sm-4 col-md-3"  v-for="list in getLists(item.objectId)" :key="list.objectId">
                  <div class="item" v-if="list.isverify">
                     <a :href="list.href" target="_blank">
                      <img
                        v-lazy="getImg(list.img)"
                        :alt="list.title"
                      />
                      <h3>{{list.title}}</h3>
                      <p>{{list.des}}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import storage from '../util/storage'
import mixin from '../util/mins'

export default {
  name: 'mainlists',
  data () {
    return {
      parts: [],
      lists: []
    }
  },
  created () {
    const query = this.Bmob.Query('parts')
    query.order('partOrder')
    query.find().then(res => {
      this.parts = res
      storage.set('parts', this.lists)
    })
    const querylists = this.Bmob.Query('lists')
    querylists.find().then(res => {
      this.lists = res
      querylists.skip(100)
      querylists.find().then(res => {
        this.lists = this.lists.concat(res)
        this.$store.state.lists = this.lists
        storage.set('lists', this.lists)
      })
    })
  },
  mounted () {
    // this.$bus.$on('onsearch', (data) => {
    //   this.searchlists = this.lists.filter(list => {
    //     return list.title.toLowerCase().indexOf(data) > -1 || list.des.toLowerCase().indexOf(data) > -1
    //   })
    //   console.log(this.searchlists)
    // })
  },
  mixins: [mixin]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
