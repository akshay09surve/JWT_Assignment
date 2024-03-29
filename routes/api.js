const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../model/user')
const jwt = require('jsonwebtoken')

router.get('/landing', (req, res) => {
    res.render("landing.ejs")
})

router.get('/login', async (req, res) => {
    res.render("login.ejs")
})

router.get('/register', (req, res) => {
    res.render("register.ejs")
})

router.post('/login', async (req, res) => {
    
})

router.post('/register', async (req, res) => {
    const { email, password, qualification, city, contact } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    try
    {
        const existingUser = await User.findOne({email:email})
        if (existingUser)
        {
            res.render("error.ejs")
        }
        else
        {
            const newUser = new User({
                email: email,
                password: hashedPassword,
                qualification: qualification,
                city: city,
                contact:parseInt(contact)
            })
            const userAdded = await newUser.save()
            console.log(userAdded)
            res.redirect('/api/login')
        }
    }
    catch (err)
    {
        console.log(err.message)
        res.redirect('/api/register')
    }
})

module.exports = router