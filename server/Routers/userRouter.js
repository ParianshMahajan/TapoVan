const express=require('express');
const { apply, sendData, createUser, updateProfile, pastApp, changeSlot, test, selectSlot, verify, UserLogin, UserLoginPart2 } = require('../Controllers/UserFuncs');
const { isUser } = require('../middlewares/userProtect');
const app=express();
const userRouter=express.Router();

// not loggedIn then /newuser 
userRouter
.route('/verify')
.post(isUser,verify)


userRouter
.route('/login1')
.post(UserLogin)

userRouter
.route('/login2')
.post(UserLoginPart2)



// not loggedIn then /newuser 
userRouter
.route('/test')
.get(test)


module.exports=userRouter;