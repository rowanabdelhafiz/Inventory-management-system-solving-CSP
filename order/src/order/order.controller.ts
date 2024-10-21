// src/order/order.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, Patch, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service'; 
import { Order } from './order.model'; 

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  
  @Post()
  async create(@Body() createOrderDto: Order): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: Order): Promise<Order> {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.orderService.delete(id);
  }

  @Patch(':id/accept')
  async acceptOrder(@Param('id') id: string, @Body() body: { status: string, message: string }) {
    const { status, message } = body;
    const order = await this.orderService.findOne(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    order.status = status;
    order.message = message;
    await this.orderService.update(id, order);
    return { message: 'Order accepted successfully' };
  }
}
