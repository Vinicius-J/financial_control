import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { ITokenService } from '../../application/services/ITokenService';

export class GenerateToken implements ITokenService {
  generate(payload: object): string {
    return jwt.sign(payload, String(process.env.JWT_SECRET), {
      expiresIn: '1h',
    });
  }

  verify(token: string) {
    return jwt.verify(token, String(process.env.JWT_SECRET));
  }
}
