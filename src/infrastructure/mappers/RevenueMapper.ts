import { Revenue } from '../../domain/entities/Revenue';

export class RevenueMapper {
  static toDomain(revenue: any) {
    return new Revenue(revenue._id, revenue.userId, revenue.amount);
  }
}
