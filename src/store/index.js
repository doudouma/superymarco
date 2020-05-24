import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../util/storage'
import {dataEdit, dataAdd, dataDel, isExist} from '../util/mydatas'

Vue.use(Vuex)
const state = {
  lists: storage.get('lists') || [],
  searchLists: [],
  loginStatus: Boolean
}
const mutations = {
  filterLists (state, data) {
    state.searchLists = state.lists.filter(list => {
      return list.title.toLowerCase().indexOf(data) > -1 || list.des.toLowerCase().indexOf(data) > -1
    })
  },
  registerUser (state, data) {
    isExist('UserThird', data.openId).then(function (s) {
      if (!s) {
        dataAdd('UserThird', data, function () {
          console.log('dataAdd')
        })
      }
    }
    )
  },
  isLogin (state, data) {

  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
