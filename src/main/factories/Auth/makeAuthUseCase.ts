import { AuthUseCase } from '../../../application/useCases/Auth/AuthUseCase';
import { AuthService } from '../../../domain/services/AuthService';
import { GenerateToken } from '../../../infrastructure/auth/jwt';
import { MongoDBUserRepository } from '../../../infrastructure/repositories/MongoDBUserRepository';

export function makeAuthUsCase() {
  const respository = new MongoDBUserRepository();
  const authService = new AuthService();
  const generateToken = new GenerateToken();
  return new AuthUseCase(respository, authService, generateToken);
}
