const express = require('express')
const app = express();
require('dotenv').config();

const main =  require('./config/db')
const cookieParser =  require('cookie-parser');
const authRouter = require("./routes/userAuth");
const redisClient = require("./config/redis");

app.use(express.json());
app.use(cookieParser());

app.use('/user', authRouter);

const InitializedConnection = async () => {
    try {
        await Promise.all([main(), redisClient.connect()]);
        
        console.log('Database and Redis connections established successfully');

        app.listen(process.env.PORT, ()=>{
            console.log("Server listening at port number: "+ process.env.PORT);
        })
    } 
    catch (error) {
        console.error('Failed to initialize connections:', error);
        process.exit(1);
    }
}

InitializedConnection();

// main()
// .then(async ()=>{
//     app.listen(process.env.PORT, ()=>{
//         console.log("Server Listening at port number: "+ process.env.PORT);
//     })
// })
// .catch(err=> console.log("Error Occurred: "+err));


