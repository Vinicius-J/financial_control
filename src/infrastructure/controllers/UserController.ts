import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../main/factories/User/makeCreateUserUseCase';
import { makeFindAllUsersUseCase } from '../../main/factories/User/makeFindAllUsersUseCase';

export class UserController {
  async index(req: Request, res: Response) {
    try {
      const useCase = makeFindAllUsersUseCase();
      const users = await useCase.execute();

      if (users?.length) return res.status(200).json(users);

      return res.status(200).json({ message: 'User' });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async store(req: Request, res: Response) {
    try {
      const useCase = makeCreateUserUseCase();
      const user = await useCase.execute(req.body);
      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
