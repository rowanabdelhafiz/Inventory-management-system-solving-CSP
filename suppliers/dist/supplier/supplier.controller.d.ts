import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.model';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: Supplier): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: string): Promise<Supplier>;
    update(id: string, updateSupplierDto: Supplier): Promise<Supplier>;
    remove(id: string): Promise<any>;
}
