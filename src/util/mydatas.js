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
    callback(res)
  }).catch(err => {
    console.log(err)
  })
}

function dataDel (table, objectId, callback) {
  const query = Bmob.Query(table)
  query.destroy(objectId).then(res => {
    console.log(res)
    callback && callback()
  }).catch(err => {
    console.log(err)
  })
}

async function isExist (table, openId) {
  const query = Bmob.Query(table)
  query.equalTo('openId', '==', openId)
  let promise = new Promise((resolve, reject) => {
    query.find().then(res => {
      resolve(res)
    })
  })
  let result = await promise
  return result
}

export {dataEdit, dataAdd, dataDel, isExist}
