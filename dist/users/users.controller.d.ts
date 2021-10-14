/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<User[]>;
    updateOne(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").UserDocument>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
