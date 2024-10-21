import { Schema, Document, model } from 'mongoose';

export interface User extends Document {
  first_name: string;
  last_name: string;
  username: string;
  email?: string;
  password: string;
}

export const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  }
});


export const UserModel = model<User>('User', UserSchema);