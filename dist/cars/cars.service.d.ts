import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car, CarDocument } from './schemas/car.schema';
export declare class CarsService {
    private readonly carModel;
    constructor(carModel: Model<CarDocument>);
    create(car: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(id: string): Promise<Car & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    updateOne(id: string, updateCarDto: UpdateCarDto): Promise<CarDocument>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<CarDocument>;
}
