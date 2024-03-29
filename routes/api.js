const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = [];

router.get('/landing', (req, res) => {
    res.render("landing.ejs")
})

router.get('/login', (req, res) => {
    res.render("login.ejs")
})

router.get('/register', (req, res) => {
    res.render("register.ejs")
})

router.post('/register', async (req, res) => {
    const { email, password, qualification, city, contact } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    try
    {
        users.push({
            id: Date.now().toString(),
            email: email,
            password: hashedPassword,
            qualification: qualification,
            city: city,
            contact:parseInt(contact)
        })
        console.log(users)
        res.redirect('/api/login')

    }
    catch (err)
    {
        console.log(err.message)
        res.redirect('/api/register')
    }
})

module.exports = router