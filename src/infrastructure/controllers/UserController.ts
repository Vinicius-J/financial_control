import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../main/factories/User/makeCreateUserUseCase';
import { makeFindAllUsersUseCase } from '../../main/factories/User/makeFindAllUsersUseCase';
import { makeShowUserUseCase } from '../../main/factories/User/makeShowUserUseCase';
import { makeUpdateUserUseCase } from '../../main/factories/User/makeUpdateUserUseCase';
import { makeDeleteUserUseCase } from '../../main/factories/User/makeDeleteUserUseCase';

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

  async show(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const useCase = makeShowUserUseCase();

      const user = await useCase.execute(id);

      if (user) return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(404).json({ error: err.message });
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

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const useCase = makeUpdateUserUseCase();

      const user = await useCase.execute(id, req.body);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const useCase = makeDeleteUserUseCase();

      const user = await useCase.execute(id);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
