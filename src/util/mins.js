let minxin = {
  methods: {
    getImg: function (img) {
      if (!img) {
        // 缺省图
        return require('../assets/logo/fkw-logo-nav.png')
      } else {
        return require('../assets/logo/' + img)
      }
    },
    getLists: function (id) {
      return this.lists.filter(list => {
        return list.partid === id
      })
    },
    getItemId (id) {
      return '#' + id
    }
  }
}
export default minxin
