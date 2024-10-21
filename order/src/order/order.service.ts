// src/order/order.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(orderData: Order): Promise<Order> {
    const createdOrder = new this.orderModel(orderData);
    return await createdOrder.save();
  }

  async create(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    await newOrder.save();
    return newOrder;
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id).exec();
  }

  async update(id: string, order: Partial<Order>): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(id, order, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.orderModel.deleteOne({ _id: id }).exec();
  }
}
