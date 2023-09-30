import createHttpError from "http-errors";
import jwt from "jsonwebtoken";


export default async function (req,res,next){
   if(!req.headers['authorization']) 
        return next(createHttpError.Unauthorized());
const bearerToken = req.headers["authorization"];
const token=bearerToken.split(" ")[1];
// res.send(token);
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
  if (err) {
    //   console.log(err.name);
    //   console.log(err.message);
      return next(createHttpError.Unauthorized());
  }
  req.user = payload;
  next();
});

}