import {Router, Request, Response } from "express";


const BaseRouter = Router();

BaseRouter.get('/', (req: Request, res: Response) => {
    res.send('Express requests works !');
});

BaseRouter.get('/reload', (req:Request, res:Response) => {
    res.send('And it reloads on save !')
})

export default BaseRouter;