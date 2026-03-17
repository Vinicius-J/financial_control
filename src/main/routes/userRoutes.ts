import { Router } from 'express';
import { UserController } from '../../infrastructure/controllers/UserController';
const userRoutes = Router();

const controller = new UserController();

userRoutes.get('/', controller.index);
userRoutes.post('/', controller.store);

export default userRoutes;
