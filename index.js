import express from 'express'
import connectionRouter from './components/connection/router.js';
import searchRouter from './components/search/router';
import singleRepo from './components/singleRepo/router';
// import * as bodyParser from 'body-parser';


const app = express();
app.use(express.json())
app.listen(3000);

app.use('/', connectionRouter)
app.use('/search',searchRouter)
app.use('/repo', singleRepo)
