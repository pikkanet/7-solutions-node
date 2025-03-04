var cors = require('cors')
import express, { Request, Response } from 'express';
import axios from 'axios';
import { transformData } from './transformData';

const app = express();
const port = 8083;

app.get('/users', cors(), async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        const transformedData = transformData(response.data.users);
        res.json(transformedData);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});