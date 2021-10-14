import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({
    description: 'The name of the car',
    example: 'corsa',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 1990,
    description: 'The year of the car'
  })
  @IsInt()
  readonly year: number;

  @ApiProperty({
     example: 'Volkswagen',
    description: 'The brand of the car' 
  })
  @IsString()
  readonly brand: string;
}
