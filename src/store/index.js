import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../util/storage'
import {dataEdit, dataAdd, dataDel, isExist} from '../util/mydatas'

Vue.use(Vuex)
const state = {
  lists: storage.get('lists') || [],
  searchLists: [],
  comloginStatus: false
}
const mutations = {
  filterLists (state, data) {
    state.searchLists = state.lists.filter(list => {
      return list.title.toLowerCase().indexOf(data) > -1 || list.des.toLowerCase().indexOf(data) > -1
    })
  },
  registerUser (state, data) {
    isExist('UserThird', data.openId).then(function (res) {
      storage.set('user_id', res[0].objectId)
      if (!res) {
        dataAdd('UserThird', data, function (res) {
          storage.set('user_id', res[0].objectId)
        })
      }
    }
    )
  },
  isLogin (state) {
    if (QC.Login.check()) {
      state.comloginStatus = true
    } else {
      state.comloginStatus = false
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
