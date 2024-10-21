import { Schema, Document } from 'mongoose';
export interface Order extends Document {
    readonly designName: string;
    readonly styleNumber: number;
    readonly Color: string;
    readonly Height: number;
    readonly Width: number;
    readonly user_name: string;
    readonly Phone_Number: string;
    readonly Address: string;
    status: String;
    message: String;
}
export declare const OrderSchema: Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & Required<{
    _id: unknown;
}>>;
export declare const OrderModel: import("mongoose").Model<Order, {}, {}, {}, Document<unknown, {}, Order> & Order & Required<{
    _id: unknown;
}>, any>;
