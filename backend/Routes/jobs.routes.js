import express from 'express';
import { jobsController } from '../Controller/jobs.controller.js';

const routes = express.Router();


routes.post('/',jobsController)

export default routes;