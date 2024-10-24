// src/order/order.module.ts

import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './order.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
   
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
