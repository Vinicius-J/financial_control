import { Schema, model } from 'mongoose';

const revenueSchema = new Schema({
  _id: String,
  userId: { type: String, ref: 'User', required: true, index: true },

  amount: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const RevenueModel = model('Revenue', revenueSchema);

export default RevenueModel;
