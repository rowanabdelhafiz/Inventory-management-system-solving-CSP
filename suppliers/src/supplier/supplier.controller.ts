import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SupplierService } from './supplier.service'; // Import the SupplierService
import { Supplier } from './supplier.model'; // Import the Supplier model

@Controller('supplier') // Change the route to 'supplier'
export class SupplierController {
    constructor(private readonly supplierService: SupplierService) { } // Change the service type to SupplierService

    @Post()
    async create(@Body() createSupplierDto: Supplier): Promise<Supplier> { // Change parameter type and name
        return this.supplierService.create(createSupplierDto); // Change the service method call
    }

    @Get()
    async findAll(): Promise<Supplier[]> {
        return this.supplierService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Supplier> {
        return this.supplierService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateSupplierDto: Supplier): Promise<Supplier> { // Change parameter type and name
        return this.supplierService.update(id, updateSupplierDto); // Change the service method call
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.supplierService.delete(id);
    }
}
