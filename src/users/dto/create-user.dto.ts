import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Alisson',
    description: 'The name of the car'
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'alisson@alisson.com',
    description: 'The email of the user'
  })
  @IsString()
  readonly email: number;

  @ApiProperty({
     example: 'teste@123',
    description: 'The password of the user' 
  })
  @IsString()
  readonly password: string;
}
