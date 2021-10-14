import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './schemas/car.schema';

@ApiBearerAuth()
@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @ApiOperation({ summary: 'create car' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a car by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Car,
  })
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all car' })
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one of the car information' })
  async updateOne(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.updateOne(id, updateCarDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update all car information' })
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a car' })
  async remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
