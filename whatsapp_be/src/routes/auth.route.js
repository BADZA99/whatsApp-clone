import express from "express";
import { login, logout, refreshToken, register } from "../controllers/auth.controller.js";
import trimRequest from 'trim-request'
import authMiddlware from "../middlewares/authMiddlware.js";
const router = express.Router();


// trimRequest permet de supprimer les espaces
router.route("/register").post(trimRequest.all,register);
router.route("/login").post(trimRequest.all,login);
router.route("/logout").post(trimRequest.all,logout);
router.route("/refreshtoken").post(trimRequest.all,refreshToken);
router.route("/testingauthMiddlware").get(trimRequest.all,authMiddlware,(req,res)=>{
    res.send(req.user);
    // res.send("hello");
});

export default router;
