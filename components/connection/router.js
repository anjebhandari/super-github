import * as express from 'express';
import Controller from './controller';

export default express 
    .Router()
    .get("/connection", Controller.all)