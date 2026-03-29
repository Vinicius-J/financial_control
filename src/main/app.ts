import express from 'express';

import homeRoutes from './routes/homeRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import expenseRoutes from './routes/expenseRoutes';

class App {
  app;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/expense', expenseRoutes);
  }
}

export default new App().app;
