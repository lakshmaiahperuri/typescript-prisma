import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;
  @IsNumber()
  public price: string;
  @IsBoolean()
  public available: boolean;
  id: any;
}
