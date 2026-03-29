import { TypeUserRoles } from '../domain/enums/TypeUserRoles';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: TypeUserRoles };
    }
  }
}

export {};
