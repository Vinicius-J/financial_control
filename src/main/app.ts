import express from 'express';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';

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
    this.app.use('/user', userRoutes);
  }
}

export default new App().app;
