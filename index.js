import express from 'express'
import cors from 'cors';

import connectionRouter from './components/connection/router.js';
import searchRouter from './components/search/router';
import singleRepo from './components/singleRepo/router';
// import * as bodyParser from 'body-parser';


const app = express();
app.use(express.json())
app.listen(5000);

app.options("*", cors({origin: 'http://localhost:5000', optiomsSuccessStatus: 200}));
app.use(cors({origin: 'http://localhost:5000', optiomsSuccessStatus: 200}))

app.use('/', connectionRouter)
app.use('/search',searchRouter)
app.use('/repo', singleRepo)
