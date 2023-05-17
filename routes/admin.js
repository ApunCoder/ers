const express = require('express');
const router = express.Router();
const passport = require('passport');
const adminController = require('../controllers/admin_controller');

// route for assigning work to the employeess
router.get('/assignWork' , passport.checkAuthentication , adminController.assignWork);

// route for view the employee
router.get('/view-employee' , passport.checkAuthentication , adminController.showEmployeeList);
// route for set the reviews, 
router.post('/setReviewes' , passport.checkAuthentication , adminController.setReviewrAndReviewe);
// route for making new Admin
router.post('/newAdmin' , passport.checkAuthentication , adminController.newAdmin);
// route for deleting the employee
router.get('/deleteEmployee/:id', passport.checkAuthentication , adminController.deleteEmployee);
// route for adding the employee
router.get('/add-employee' , passport.checkAuthentication , adminController.addEmployee);

module.exports = router;