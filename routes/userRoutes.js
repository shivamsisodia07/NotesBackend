const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').post(registerUser);
router.route("/login").post(authUser);
module.exports = router;

// API SYNTAX
// const express=require("express");
// const app=express();
// app.use("middleware")
// app.post("/fnektk",middleware,(req,res)=>{
//     req.body.email
//     res.json()
//     res.send("hello");
//     res.render("index");
// })

append.get("/ebkvk",beebrjb,(req,res)=>{

})