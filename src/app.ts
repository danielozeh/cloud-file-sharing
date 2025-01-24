import express from 'express';
import dotenv from 'dotenv';
import fileRoutes from './routes/file.routes';
import morgan from 'morgan';
import cors from 'cors';
import { Request, Response } from 'express';
dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use('/api/files', fileRoutes);

app.get('/', (req: Request, res: any) => res.send('Cloud File Sharing API is running'));

export default app;