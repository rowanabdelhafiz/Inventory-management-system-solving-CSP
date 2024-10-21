import { Schema, Document, model } from 'mongoose';

export interface Product extends Document {
  Product_name: string;
  Quantity: number;
  // Product_id: number;
  Price: number;
  Subcategory?: string;  
  Subsubcategory?: string;  
}

export const ProductSchema = new Schema<Product>({
  Product_name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Subcategory: {
    type: String,
    default: '',  
  },
  Subsubcategory: {
    type: String,
    default: '',  
  },
});

export const ProductModel = model<Product>('Product', ProductSchema);
