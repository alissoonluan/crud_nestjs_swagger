import { UsersModule } from "./users/users.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CarsModule } from "./cars/cars.module";

@Module({
  imports: [
    UsersModule,
    CarsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/test"),
  ],
})
export class AppModule {}
