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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class Car {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "The name of the car", example: "Golf" }, year: { required: true, type: () => Number }, brand: { required: true, type: () => String } };
    }
}
__decorate([
    swagger_1.ApiProperty({ example: 1, description: 'The year of the car' }),
    __metadata("design:type", Number)
], Car.prototype, "year", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Volkswagen', description: 'The brand of the car' }),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map