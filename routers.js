const express = require('express');
const router = express.Router()
const User = require('./schema.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authentication = require('./middleware/authentication.js')


router.get('/home', (req, res) => {
    res.cookie("test", 'shivani')
    console.log('Home page.')
    res.send('This is home page router side')

})


router.post("/signUp", async (req, res) => {
    const { name, email, phoneNo, profession, userName, password, cPassword } = req.body;
    if (!name || !email || !phoneNo || !profession || !userName || !password || !cPassword) {
        return res.status(404).json({ error: "plz enter all field properly" })
    }

    try {
        const emailExist = await User.findOne({ email: email })
        const userExist = await User.findOne({ userName: userName })
        if (emailExist) {
            return res.status(405).json({
                error: "email already exist"
            })
        }
        else if (userExist) {
            return res.status(408).json({
                error: "userName already exist"
            })
        }
        else if (password !== cPassword) {
            res.status(406).json({
                error: "password is worng"
            })
        }

        else {
            const user = req.body;
            const getuser = new User(user)

            await getuser.save();
            res.status(200).json({
                // result: getuser
                result: "data added successfuly"
            })
        }


    }
    catch (err) {
        res.status(406).json({
            error: err.message
        })
    }


})


router.post('/logIn', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(402).json({
                error: "plz fill the data"
            })
        }

        const emailhave = await User.findOne({ email: email })
        // const pass = await User.findOne({ password: password })
        // console.log(emailhave)

        if (emailhave) {
            const ismatch = await bcrypt.compare(password, emailhave.password);

            if (!ismatch) {
                res.status(400).json({
                    error: "invalid credential from server"
                })
            } else {
                token = await emailhave.generateAuthToken();
                console.log(token)

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                res.status(200).json({
                    message: "login successfully"
                })
            }

        } else {
            res.status(400).json({
                error: "invalid data"
            })
        }


    }
    catch (err) {
        res.status(402).json({ error: err.message })
    }


})


router.get('/about', authentication, (req, res) => {
    console.log("about")

    res.send(req.rootUser)
})

router.get('/getcontect', authentication, (req, res) => {
    res.send(req.rootUser)
})

router.post('/contect', authentication, async (req, res) => {
    try {
        const { name, email, phoneNo, message } = req.body;
        if (!name || !email || !phoneNo || !message) {
            console.log("error in contact form");
            // window.alert()
            return res.json({ error: "plzz filled the contact form " });

        }
        const userContact = await User.findOne({ _id: req.userId });

        // const userContact = await User.findOne({ _id: req.userID })
        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phoneNo, message);
            await userContact.save();
            res.status(201).json({ message: "user's message with all details send successfully" });

        }


    } catch (error) {
        console.log(error.message)

    }
})

router.get('/logout', (req, res) => {
    res.clearCookie("jwtoken", {path:'/'})
    console.log('Home page.')
    res.send('This is home page router side')

})



module.exports = router;