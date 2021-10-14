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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cars_service_1 = require("./cars.service");
const create_car_dto_1 = require("./dto/create-car.dto");
const update_car_dto_1 = require("./dto/update-car.dto");
const car_schema_1 = require("./schemas/car.schema");
let CarsController = class CarsController {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async create(createCarDto) {
        return this.carsService.create(createCarDto);
    }
    findOne(id) {
        return this.carsService.findOne(id);
    }
    async findAll() {
        return this.carsService.findAll();
    }
    async updateOne(id, updateCarDto) {
        return this.carsService.updateOne(id, updateCarDto);
    }
    async update(id, updateCarDto) {
        return this.carsService.update(id, updateCarDto);
    }
    async remove(id) {
        return this.carsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'create car' }),
    swagger_1.ApiResponse({ status: 403, description: 'Forbidden.' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: 'Get a car by id' }),
    swagger_1.ApiResponse({
        status: 200,
        description: 'The found record',
        type: car_schema_1.Car,
    }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findOne", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'Get all car' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findAll", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiOperation({ summary: 'Update one of the car information' }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateOne", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ summary: 'Update all car information' }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: 'Delete a car' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "remove", null);
CarsController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('cars'),
    common_1.Controller('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map