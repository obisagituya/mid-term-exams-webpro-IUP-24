import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    login(loginUserDto: LoginUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateUserDto: UpdateUserDto, response: Response): Promise<Response<any, Record<string, any>>>;
    remove(id: string, response: Response): Promise<Response<any, Record<string, any>>>;
}
