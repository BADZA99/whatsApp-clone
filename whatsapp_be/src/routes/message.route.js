import  express  from "express";
import trimRequest from "trim-request";
import authMiddlware from "../middlewares/authMiddlware.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";


const router =express.Router();

router.route("/").post(trimRequest.all, authMiddlware,sendMessage);
router.route("/:convo_id").get(trimRequest.all, authMiddlware,getMessages);
export default router
