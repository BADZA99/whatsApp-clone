import express from 'express';
import trimRequest from 'trim-request';
import authMiddlware from '../middlewares/authMiddlware.js';
import {create_open_conversation} from '../controllers/conversation.controller.js'

const router=express.Router();

router.route('/').post(trimRequest.all,authMiddlware,create_open_conversation)

export default router;