import express from "express";
import { searchUsers } from "../controllers/user.controller.js";
import trimRequest from 'trim-request'
import authMiddlware from "../middlewares/authMiddlware.js";

const router = express.Router();


// trimRequest permet de supprimer les espaces
router.route("/").get(trimRequest.all,authMiddlware,searchUsers);
export default router;
