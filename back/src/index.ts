import express from 'express';
import * as dotenv from 'dotenv';
import BaseRouter from './controllers/base-router.controller';

dotenv.config();

const app = express();
const { DEV_PORT} = process.env;
 
app.use(BaseRouter);


app.listen(
    DEV_PORT, () => {
    console.log(`SERVER IS WORKING ON http://localhost:${DEV_PORT}`)
});


export { app }