const router = require('express').Router();
const { Meals, User } = require('../models');

// GET all galleries for homepage
router.get('/',(req, res) => {
    res.render('login')
});

router.get('/user/:id', (req, res) => {
    // get user data from request? Middleware? Context? 
    console.log('req.params.id: ', req.params.id);
    User.findByPk(req.params.id);
    res.render('user');
})


module.exports = router;
