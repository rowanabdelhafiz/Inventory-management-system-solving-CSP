
import { Schema, Document, model } from 'mongoose';

export interface Supplier extends Document {
  Supplier_name: string;
  Phone_Number: number;
  Supplier_id: number;
  Category: string;
  Email:string;
  
}

export const SupplierSchema = new Schema<Supplier>({
  Supplier_name: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: Number,
    required: true,
  },
  Supplier_id: {
    type: Number,
    required: true,
    unique: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});

export const SupplierModel = model<Supplier>('Supplier', SupplierSchema);