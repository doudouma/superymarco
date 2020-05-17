function dataEdit (table, objectId, object, callback) {
  const query = Bmob.Query(table)
  query.set('id', objectId) // 需要修改的objectId
  for (var key in object) {
    query.set(key, object[key])
  }
  query.save().then(res => {
    console.log(res)
    callback()
  }).catch(err => {
    console.log(err)
  })
}

function dataAdd (table, object, callback) {
  const query = Bmob.Query(table)
  for (var key in object) {
    query.set(key, object[key])
  }
  query.save().then(res => {
    console.log(res)
    callback()
  }).catch(err => {
    console.log(err)
  })
}

function dataDel (table, objectId, callback) {
  const query = Bmob.Query(table)
  query.destroy(objectId).then(res => {
    console.log(res)
    callback()
  }).catch(err => {
    console.log(err)
  })
}

function isExist (table, openId) {
  const query = Bmob.Query(table)
  query.equalTo('openId', '==', openId)
  query.find().then(res => {
    console.log(res)
  })
}

export {dataEdit, dataAdd, dataDel, isExist}
