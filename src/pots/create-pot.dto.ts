import { IsString, IsInt } from 'class-validator';

export class createPotDto {
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsInt()
  target: number;

  @IsInt()
  total: number;

  @IsString()
  theme: string;
}
