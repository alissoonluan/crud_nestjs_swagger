import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,){}

  async create(user: CreateUserDto): Promise<User> {
    const created = new this.userModel(user);
    return created.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
  async updateOne(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateUserDto,
        },
        {
          new: true
        },
      )
      .exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateUserDto,
        },
        {
          new: true
        },
      )
      .exec();
  }
}
