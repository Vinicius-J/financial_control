import bcryptjs from 'bcryptjs';

export class AuthService {
  comparePassword(password: string, hashedPassword: string): boolean {
    const passwordVO = bcryptjs.compareSync(password, hashedPassword);
    return passwordVO;
  }
}
