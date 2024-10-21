import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller'; // Import the SupplierController
import { SupplierService } from './supplier.service'; // Import the SupplierService
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierSchema, SupplierModel } from './supplier.model'; // Import the SupplierSchema and SupplierModel

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Supplier', schema: SupplierSchema }]), // Provide SupplierModel
  ],
  controllers: [SupplierController], // Change to SupplierController
  providers: [SupplierService], // Change to SupplierService
})
export class SupplierModule {}
