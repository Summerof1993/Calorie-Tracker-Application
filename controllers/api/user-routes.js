const router = require('express').Router();
const  { Users } = require('../../models');
const bcrypt = require('bcrypt');

// CREATE new user
router.post('/create', async (req, res) => {
    try {
        const dbUserData = await Users.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });

        // Set up sessions with the 'loggedIn' variable
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await Users.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            dbUserData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            // Once the user successfully logs in, set up sessions with the 'loggedIn' variable
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
        });
        // res.render("user", User)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;