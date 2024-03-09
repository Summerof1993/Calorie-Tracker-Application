const router = require('express').Router();
const { Meals, Users } = require('../models');

// GET all galleries for homepage
router.get('/',(req, res) => {
    res.render('login')
});

router.get('/user/:id', (req, res) => {
    // get user data from request? Middleware? Context? 
    console.log('req.params.id: ', req.params.id);
    Users.findByPk(req.params.id);
    res.render('user');
})

// router.put("/meals", async (req, res) => {
//     try {
//         const newMeal = await Meals.create({
//             calories: req.body.calories,
//             user_id: req.session.userId,
//         },
    
//         )
//     }
// })



module.exports = router;
