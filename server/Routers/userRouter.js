const express=require('express');
const { apply, sendData, createUser, updateProfile, pastApp, changeSlot, test, selectSlot, verify } = require('../Controllers/UserFuncs');
const { isUser } = require('../middlewares/userProtect');
const app=express();
const userRouter=express.Router();

// not loggedIn then /newuser 
userRouter
.route('/verify')
.post(isUser,verify)



// not loggedIn then /newuser 
userRouter
.route('/test')
.get(test)


module.exports=userRouter;