import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitise from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors';

// dotEnv config
dotenv.config();

// create express app
const app = express();

// helmet permet de securiser une app express
app.use(helmet());

// permet de parser les requetes http en json
// parse json request url
app.use(express.json());

// parse json request body 
app.use(express.urlencoded({ extended: true }));

// sanitise requested data (prevenir les mongo db data injection)
app.use(mongoSanitise());

// enable cookie parser 
app.use(cookieParser());

// gzip compressor
app.use(compression());

// file upload pour acceder directement a un fichier envoyer par res.fichier envoye
app.use(fileUpload({
    useTempFiles: true
}))

// cors definit l'origine le seul lien a partir duquel on peut faire des requetes
app.use(cors());



//morgan (permet d'afficher (infos) les requetes http sur la console de vs code)
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));  
}



app.post("/test", (req, res) => {
  res.send("Hello World from server");
});

export default app;
