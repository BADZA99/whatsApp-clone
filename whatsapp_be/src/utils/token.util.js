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

export const verify = async (token, secret) => {
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,payload)=>{
            if (err) {
                logger.error(err);
                resolve(null);
            }else{
                resolve(payload);
            }
        })
    })
};