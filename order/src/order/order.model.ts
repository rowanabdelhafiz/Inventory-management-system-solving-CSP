// src/order/order.model.ts

import { Schema, Document, model } from 'mongoose';

export interface Order extends Document {
  readonly designName: string;
  readonly styleNumber: number;
  readonly Color: string;
  readonly Height: number;
  readonly Width: number;
  readonly user_name: string;
  readonly Phone_Number: string;
  readonly Address: string;
  status: String, // Add status field
  message: String, // Add message field
}

export const OrderSchema = new Schema<Order>({
  designName: {
    type: String,
    required: true,
  },
  styleNumber: {
    type: Number,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  Height: {
    type: Number,
    required: true,
  },
  Width: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

export const OrderModel = model<Order>('Order', OrderSchema);
