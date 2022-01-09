import express from 'express'
const app = express();
import connectionRouter from './components/connection/router.js';

app.listen(3000);

app.use('/', connectionRouter)
