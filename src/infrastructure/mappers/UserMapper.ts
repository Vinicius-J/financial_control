import { User } from '../../domain/entities/User';

export class UserMapper {
  static toDomain(user: any): User {
    return new User(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        expense: user.expense,
        revenue: user.revenue,
        role: user.role,
      },
      user._id
    );
  }
}
