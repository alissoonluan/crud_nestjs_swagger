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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const car_schema_1 = require("./schemas/car.schema");
let CarsService = class CarsService {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async create(car) {
        const created = new this.carModel(car);
        return created.save();
    }
    async findAll() {
        return this.carModel.find().exec();
    }
    async findOne(id) {
        return this.carModel.findById(id);
    }
    async remove(id) {
        return this.carModel.deleteOne({ _id: id }).exec();
    }
    async updateOne(id, updateCarDto) {
        return this.carModel
            .findOneAndUpdate({
            _id: id,
        }, {
            $set: updateCarDto,
        }, {
            new: true
        })
            .exec();
    }
    async update(id, updateCarDto) {
        return this.carModel
            .findByIdAndUpdate({
            _id: id,
        }, {
            $set: updateCarDto,
        }, {
            new: true
        })
            .exec();
    }
};
CarsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(car_schema_1.Car.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map