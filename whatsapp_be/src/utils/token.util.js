import jwt from 'jsonwebtoken'
// import { Promise } from 'mongoose';
import logger from '../configs/logger.config.js';

export const sign = async (payload, expiresIn, secret) => {
    return new Promise((resolve,reject)=>{
        jwt.sign(payload,secret,{
            expiresIn:expiresIn,
        },(err,token)=>{
            if (err) {
                logger.error(err);
                reject(err);
            }
            resolve(token);
        })
    })
};