import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        user_id: number;
        full_name: string;
        email: string;
    }>;
    findOne(loginUserDto: LoginUserDto): Promise<{
        message: string;
        user_id?: undefined;
        full_name?: undefined;
        email?: undefined;
    } | {
        user_id: number;
        full_name: string;
        email: string;
        message?: undefined;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
