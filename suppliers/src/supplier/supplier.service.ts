import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Supplier } from './supplier.model'; // Import the Supplier model

@Injectable()
export class SupplierService {
    constructor(@Inject('SupplierModel') private readonly supplierModel: Model<Supplier>) {}

    async create(supplier: Supplier): Promise<Supplier> {
        const newSupplier = new this.supplierModel(supplier);
        return await newSupplier.save();
    }

    async findAll(): Promise<Supplier[]> {
        return await this.supplierModel.find().exec();
    }

    async findOne(id: string): Promise<Supplier> {
        const supplier = await this.supplierModel.findById(id).exec();
        if (!supplier) {
            throw new NotFoundException(`Supplier with ID ${id} not found`);
        }
        return supplier;
    }

    async update(id: string, updateSupplierDto: Supplier): Promise<Supplier> {
        const existingSupplier = await this.supplierModel.findByIdAndUpdate(id, updateSupplierDto, { new: true }).exec();
        if (!existingSupplier) {
            throw new NotFoundException(`Supplier with ID ${id} not found`);
        }
        return existingSupplier;
    }

    async delete(id: string): Promise<any> {
        return await this.supplierModel.deleteOne({ _id: id }).exec();
    }
}
