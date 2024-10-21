"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    designName: {
        type: String,
        required: true,
    },
    styleNumber: {
        type: Number,
        required: true,
    },
    Color: {
        type: String,
        required: true,
    },
    Height: {
        type: Number,
        required: true,
    },
    Width: {
        type: Number,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    Phone_Number: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
});
exports.OrderModel = (0, mongoose_1.model)('Order', exports.OrderSchema);
//# sourceMappingURL=order.model.js.map