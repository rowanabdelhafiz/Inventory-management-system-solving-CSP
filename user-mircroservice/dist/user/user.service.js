"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(user) {
        if (!user.username) {
            throw new common_1.BadRequestException('Username is required');
        }
        const newUser = new this.userModel(user);
        return await newUser.save();
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async findOne(id) {
        return await this.userModel.findById(id).exec();
    }
    async update(id, user) {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }
    async delete(id) {
        return await this.userModel.deleteOne({ _id: id }).exec();
    }
    async login(email, password) {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (user.password !== password) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const role = email.endsWith('@future.com') ? 'admin' : 'customer';
        return { role, user };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map