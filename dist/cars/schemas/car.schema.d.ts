import { Document } from 'mongoose';
export declare type CarDocument = Car & Document;
export declare class Car {
    name: string;
    year: number;
    brand: string;
}
export declare const CarSchema: import("mongoose").Schema<Document<Car, any, any>, import("mongoose").Model<Document<Car, any, any>, any, any>, {}>;
