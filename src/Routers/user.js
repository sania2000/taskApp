const express = require("express");
const User = require('../model/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})
router.get('/users', async(req,res) => {

    try{
       const users = await User.find({})
        res.send(users)
    } catch(e){
        res.status(500).send()
    }

   
})

router.get('/users/:id', async(req, res) => {
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(500).send()
    }

})
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'password', 'email']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if (!isValid) {
        return res.status(404).send('NOPE!')
    }


    const _id = req.params.id
    
    try{
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators:true})
        if (!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }


})

module.exports = router
