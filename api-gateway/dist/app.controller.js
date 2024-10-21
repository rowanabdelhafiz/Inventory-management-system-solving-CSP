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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let AppController = class AppController {
    constructor(httpService) {
        this.httpService = httpService;
        this.serviceBaseUrl = {
            product: 'http://localhost:8000/product',
            supplier: 'http://localhost:8080/supplier',
            users: "http://localhost:8888/users"
        };
    }
    async create(service, createDto) {
        return this.forwardRequest(service, 'POST', '', createDto);
    }
    async findAll(service) {
        return this.forwardRequest(service, 'GET', '');
    }
    async findOne(service, id) {
        return this.forwardRequest(service, 'GET', id);
    }
    async update(service, id, updateDto) {
        return this.forwardRequest(service, 'PUT', id, updateDto);
    }
    async remove(service, id) {
        return this.forwardRequest(service, 'DELETE', id);
    }
    async forwardRequest(service, method, id, data) {
        try {
            const result = await this.httpService.request({
                method,
                url: `${this.serviceBaseUrl[service]}/${id || ''}`,
                data,
            }).toPromise();
            return result.data;
        }
        catch (error) {
            console.error('Error:', error.response?.data || error.message);
            return {
                error: 'Internal Server Error',
                message: error.response?.data || error.message,
            };
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('service')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('service')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('service')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('service')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('service')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "remove", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(':service'),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppController);
//# sourceMappingURL=app.controller.js.map