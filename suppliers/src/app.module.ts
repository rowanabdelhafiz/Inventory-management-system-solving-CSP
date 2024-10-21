import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierModule } from './supplier/supplier.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
