import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },

  revenues: [{ type: String, ref: 'Revenue' }],
  expenses: [{ type: String, ref: 'Expense' }],

  createdAt: { type: Date, default: Date.now },
});

const UserModel = model('User', userSchema);

export default UserModel;
