import { Router } from 'express';
import { UserController } from '../../infrastructure/controllers/UserController';
const userRoutes = Router();

const controller = new UserController();

userRoutes.get('/', controller.index);
userRoutes.get('/:id', controller.show);
userRoutes.post('/', controller.store);
userRoutes.put('/:id', controller.update);
userRoutes.delete('/:id', controller.delete);

export default userRoutes;
