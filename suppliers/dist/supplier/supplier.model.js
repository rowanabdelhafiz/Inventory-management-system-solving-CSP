"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = exports.SupplierSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SupplierSchema = new mongoose_1.Schema({
    Supplier_name: {
        type: String,
        required: true,
    },
    Phone_Number: {
        type: Number,
        required: true,
    },
    Supplier_id: {
        type: Number,
        required: true,
        unique: true,
    },
    Category: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
});
exports.SupplierModel = (0, mongoose_1.model)('Supplier', exports.SupplierSchema);
//# sourceMappingURL=supplier.model.js.map