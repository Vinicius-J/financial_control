import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  expense: { type: Object },
  revenue: { type: Object },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = model('User', userSchema);

export default UserModel;
