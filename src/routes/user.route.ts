import { Router } from 'express';

import UserController from '../controllers/UserController';

const route = Router();

const userController = new UserController();

route.post('/create', userController.create);

export default route;