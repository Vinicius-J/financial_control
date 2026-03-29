import { Request, Response } from 'express';

export class AuthController {
  async store(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: 'Auth' });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
