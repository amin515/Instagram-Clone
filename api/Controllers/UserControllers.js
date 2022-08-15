import User from '../Models/UserModels.js'
import bcrypt from 'bcryptjs';
import customError from './createCustomError.js';
import jwt from 'jsonwebtoken'
import { sendEmail } from '../utility/sendEmail.js';
import { sendSMS } from '../utility/sendSMS.js';



/**
 * @access public
 * @method get 
 * @status get all users
 * @route /api/User
 */
 export const getAllUser = async (req, res, next) => {
    
    try{
        const user = await User.find()
        res.status(200).json(user)
    }catch(error){

        next(customError(404, 'User data not found'));
       
    }
}



/**
 * @access public
 * @method get 
 * @status get single user
 * @route /api/user/id
 */
  export const getSingleUser = async (req, res, next) => {

    const { id } = req.params;
    try{
        
        const user = await User.findById(id)
        if(!user){
            next(customError(404, 'No single user found'))
        }
        if(user){
            res.status(200).json(
                user
            )
        }
    }catch(error){
        next(customError(404, 'User data not found'));
    }
}

/**
 * @access public
 * @method post 
 * @status create user
 * @route /api/user
 */
  export const createUser = async (req, res, next) => {

   // make hash password

   const salt = await bcrypt.genSalt(10);
   const hash_pass = await bcrypt.hash(req.body.password, salt);


    try{
    
        const user = await User.create({ ...req.body, password : hash_pass});
        res.status(200).json(
            user
        )
    }catch(error){
        console.log(error)
        next(customError(404, 'User data not found'));
    }
}

/**
 * @access public
 * @method put/patch 
 * @status update students
 * @route /api/students/id
 */
  export const updateUser = async (req, res, next) => {
     const { id } = req.params;
    try{
        
        const user = await User.findByIdAndUpdate(id, req.body,{
            new : true
        })
        res.status(200).json(
            user
        )
    }catch(error){
       
        next(customError(404, 'User data not found'));
    }
}


/**
 * @access public
 * @method delete 
 * @status delete User
 * @route /api/user/id
 */
  export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try{
        
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(
            user
        )
    }catch(error){
        
        next(customError(404, 'User data not found'));
    }
}

// authenticaton controllers

/**
 * @access public
 * @method post 
 * @status user login
 * @route /api/user/login
 */
 export const userLogin = async (req, res, next) => {

   // get body data


   //find user
   const login_user = await User.findOne({ email : req.body.email })

   try {
    
    // check user exist or not
    if(!login_user){
       return next(customError(404, 'user not found'))
    }

    // password check 
    const pass_check = await bcrypt.compare(req.body.password, login_user.password);

   // password valid or not
    if(!pass_check){
       return  next(customError(404, 'wrong password'))
    }

    // finaly data send if ok

    // json web token generator
    const token = jwt.sign({ id : login_user._id , isAdmin : login_user.isAdmin}, process.env.JWT_SECRET);
    
    // reverse element from data
    const {password, isAdmin, ...login_info} = login_user._doc;
    res.cookie("access_token", token).status(200).json({
        token : token,
        user : login_info,
    })


   } catch (error) {
     next(error)
   }
     
 }


 /**
 * @access public
 * @method post 
 * @status user register
 * @route /api/user/register
 */
  export const userRegister = async (req, res, next) => {

    // make hash password
 
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
 
 
     try{
     
         const user = await User.create({ ...req.body, password : hash_pass});
         sendEmail(user.email, 'Ingtagram verify', `Hi ${user.name} please verify your account`);
         sendSMS();
         res.status(200).json(user)
         
     }catch(error){
        console.log(error);
         next(customError(404, 'User data not found'));
     }
 }

 /**
 * @access public
 * @method GET 
 * @status user/loggedIn
 * @route /api/user/me
 */
// export const getLoggedInUser = async (req, res, next) =>{
    
//     try {
//         // get token
//         const bearer_token = req.headers.authorization;
        
//         let token = '';

//         if(bearer_token){
//             token = bearer_token.split(' ')[1]
            
//             // check user token
//             const logged_in_user = jwt.verify(token, process.env.JWT_SECRET);
            
//             // check user
//             if(!logged_in_user){
//                 next(customError(401, 'Invalid token'));
//             }

//             // check user
//             if(logged_in_user){
//              let user = User.findById(logged_in_user.id)
//                 res.send(user)
//             }


//         }

//         // check user token exist or not
//         if(!bearer_token){
//             next(customError(404, 'Token not found'));
//         }
//     } catch (error) {
//         next(error)
//     }
    
// }

export const loggedInUser = async (req, res, next) => {
  
    try {
    // Get token
    const bearer_token = req.headers.authorization;
     
    let token = '';
    if(bearer_token){
        token = bearer_token.split(' ')[1]
        



        // check user 
        const logged_in_user = jwt.verify(token, process.env.JWT_SECRET)
        console.log(logged_in_user)

        //check user
        if(!logged_in_user){
            next(customError(401, 'Invalid Token'))
            res.send(customError(401, 'Invalid Token'))
        }

        // if valid user
        if(logged_in_user){
         let user = await User.findById(logged_in_user.id)
         res.status(200).json(user)
        }



    }



    // token exist or not
    if(!bearer_token){
      next(customError(404, 'Token not found'))
    }

        
    } catch (error) {
        console.log(error)
    }
}