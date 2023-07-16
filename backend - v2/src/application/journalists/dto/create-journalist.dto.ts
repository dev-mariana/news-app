import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateJournalistDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  password: string;
}
