import 'dotenv/config';
import mongoose from 'mongoose';

import app from './app';
const port = process.env.PORT;

mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Escutando na porta ${port}`);
      console.log(`CTRL + Clique em http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    throw new Error(error.message);
  });
