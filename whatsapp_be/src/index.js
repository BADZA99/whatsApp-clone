import app from "./app.js";
// logger permet de personnaliser notre terminal histoire de savoir ce qui se passe c a d differiencer les erreurs des informations
import logger from './configs/logger.config.js';



// env variables
const PORT = process.env.PORT || 8000;
console.log(process.env.NODE_ENV);

app.listen(PORT,()=>{
    logger.info(`Server is running on port ${PORT}`);
});