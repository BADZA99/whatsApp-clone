import app from "./app.js";
import mongoose from "mongoose"
// logger permet de personnaliser notre terminal histoire de savoir ce qui se passe c a d differiencer les erreurs des informations
import logger from './configs/logger.config.js';



// env variables
const PORT = process.env.PORT || 8000;
// console.log(process.env.NODE_ENV);
const {DATABASE_URL}=process.env;

// exit on mongodb error
mongoose.connection.on("error",(err)=>{
    logger.error(`mongodb connection error : ${err}`);
    process.exit(1);
})



// mongoo debug mode  (pour afficher TOUT ce qui se passse)
if(process.env.NODE_ENV !== "production"){
    mongoose.set("debug",true);
}



// connect to mongodb database
mongoose.connect(DATABASE_URL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    logger.info("Connected to MongoDB");
})






let server;

server = app.listen(PORT,()=>{
    logger.info(`Server is running on port ${PORT}`);
    // throw new Error("error is server");
});


// handle server error
const exitHandler=()=>{
    if(server){
        logger.info("server closed.");
        process.exit(1);
        
    }else{
        process.exit(1)
    }
}

    
const unexpectedErrorHandler=(error)=>{
    logger.error(error);
    exitHandler();
}

process.on("uncaughtException",unexpectedErrorHandler);
process.on("unhandledRejection",unexpectedErrorHandler);

// SIGTERM
process.on("SIGTERM",()=>{
    if(server){
        logger.info("Server closed.");
        process.exit(1);
    }
});