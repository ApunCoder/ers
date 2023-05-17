const express = require('express'); // requiring expresss
const router = express.Router(); // router
const homeController = require('../controllers/home_controller'); // requeiring homeController

// route for redirecting you to the home page
router.get('/' , homeController.home);

router.use('/users' , require('./users'));
router.use('/admin' , require('./admin'));
router.use('/reviews', require('./reviews'));

module.exports = router;