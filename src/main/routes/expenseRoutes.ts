import { Router } from 'express';
import { ExpenseController } from '../../infrastructure/controllers/ExpenseController';
const expenseRoutes = Router();

const controller = new ExpenseController();

expenseRoutes.get('/:userId', controller.index);
expenseRoutes.post('/:userId', controller.store);
expenseRoutes.get('/:userId/:id', controller.show);

export default expenseRoutes;
