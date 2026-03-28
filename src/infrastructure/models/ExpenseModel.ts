import { Schema, model } from 'mongoose';

const expenseSchema = new Schema({
  _id: String,
  userId: { type: String, ref: 'User', required: true, index: true },

  amount: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const ExpenseModel = model('Expense', expenseSchema);

export default ExpenseModel;
