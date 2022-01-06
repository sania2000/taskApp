require ('../src/db/mongoose')
const User = require ('../src/model/user')



const updateAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAndCount("61cd510319552d15049d656a", 18).then((count) => {
    console.log(count)
}).catch(() => {
    throw console.log('error')
})