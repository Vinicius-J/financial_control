import { Schema, model } from 'mongoose';

const userSchema = new Schema<any>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
});

const UserModel = model<any>('User', userSchema);

export default UserModel;
