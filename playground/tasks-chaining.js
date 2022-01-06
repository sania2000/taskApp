require ('../src/db/mongoose')
const { findOneAndRemove, count } = require('../src/model/task')
const Task = require('../src/model/task')



const removeAndCount = async(id, compeleted) => {
    const remove = await Task.findOneAndRemove(id)
    const count = await Task.countDocuments({compeleted})
    return count
}

removeAndCount('61cc8485fc8092b2519ea882', true).then((count) => {
    console.log(count)
}).catch(() => {
    console.log('error')
})