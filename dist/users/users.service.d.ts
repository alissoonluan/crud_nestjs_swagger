import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
    updateOne(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument>;
}
