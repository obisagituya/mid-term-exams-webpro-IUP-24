import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @Type(() => String)
  @IsNotEmpty({message: 'Email should not be empty'})
  email: string;

  @Type(() => String)
  @IsNotEmpty({message: 'Password should not be empty'})
  password: string;
}
