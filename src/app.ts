import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';

//app.use(cors);


app.get('/', (req: Request, res: Response): Response => {
    return res.status(200).json({ message: 'Demo credit server is up and running!...' })
});

export default app;