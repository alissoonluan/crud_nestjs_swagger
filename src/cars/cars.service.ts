import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<CarDocument>,) {}

  async create(car: CreateCarDto): Promise<Car> {
    const created = new this.carModel(car);
    return created.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: string) {
    return this.carModel.findById(id);
  }

  async remove(id: string) {
    return this.carModel.deleteOne({ _id: id }).exec();
  }
  async updateOne(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateCarDto,
        },
        {
          new: true
        },
      )
      .exec();
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateCarDto,
        },
        {
          new: true
        },
      )
      .exec();
  }
  
}
