import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, loggedInUser, updateUser, userLogin, userRegister, verifyUserAccount,  } from '../Controllers/UserControllers.js';
import { adminMiddleWare } from '../Middlewares/adminMiddleware.js';
import { authMiddleWare } from '../Middlewares/authMiddleWare.js';
import { userMiddleWare } from '../Middlewares/userMiddleware.js';



// create student router
const router = express.Router();


// user login router
router.route('/me').get(loggedInUser);
router.route('/verify_acc').post(verifyUserAccount);
router.post('/login', userLogin);
router.post('/register', userRegister);




// REST Api
router.get('/', authMiddleWare, getAllUser);
router.get('/:id', authMiddleWare, getSingleUser);


router.post('/', adminMiddleWare, createUser);
router.put('/:id', userMiddleWare, updateUser);
router.patch('/:id', userMiddleWare, updateUser);
router.delete('/:id', userMiddleWare, deleteUser);


export default router;
