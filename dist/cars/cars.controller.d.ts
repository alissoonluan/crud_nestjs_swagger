/// <reference types="mongoose" />
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './schemas/car.schema';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findOne(id: string): Promise<Car & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<Car[]>;
    updateOne(id: string, updateCarDto: UpdateCarDto): Promise<import("./schemas/car.schema").CarDocument>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<import("./schemas/car.schema").CarDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
