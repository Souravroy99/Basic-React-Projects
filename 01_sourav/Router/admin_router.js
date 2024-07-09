const express = require('express') ;
const router = express.Router() ;

const adminController = require('../controllers/admin-controller') ;
const authMiddleware = require('../middleware/auth_middleware') ;
const adminMiddleware = require('../middleware/admin_middleware') ;


// Fetch All the users
router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers) ;


// Fetch single user by its id
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserByID) ;


// Update single user by its id
router.route('users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserByID) ;


// Delete a specific user by its id
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById) ;



router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts) ;


module.exports = router ;  