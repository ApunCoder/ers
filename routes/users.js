const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/user_controller');

// It will render the singin page, and singUp page
router.get('/sign-in' , userController.signIn);
router.get('/sign-up' , userController.signUp);

// It will create new seeion for the particular user, and also it chaeck the authorization
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

// route for creating the new user
router.post('/create' , userController.create);

// route for logOut form the current user
router.get('/sign-out', userController.destroySession);

// route for render the forget password page, and change the forget password
router.get('/forgetPassword', userController.forgetPasswordPage);
router.post('/forgetPasswordLink' , userController.forgetPasswordLink);

// route for all the empoyees
router.post('/addEmployee', userController.addEmployeee);
// route for making an employee an admin
router.post('/makeAdmin', userController.makeAdmin);


module.exports = router;
