import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
  _id: String,
  userId: { type: String, ref: 'User', required: true, index: true },

  amount: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  acquisitionDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ExpenseModel = model('Expense', expenseSchema);

export default ExpenseModel;
