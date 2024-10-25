import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = new User()
    user.fullName = createUserDto.fullName
    user.email = createUserDto.email
    user.password = createUserDto.password

    const result = await this.usersRepository.save(user);

    return {
      user_id: result.id,
      full_name: result.fullName,
      email: result.email
    };
  }

  async findOne(loginUserDto: LoginUserDto) {
    const user = await this.usersRepository.findOneBy({ email: loginUserDto.email })

    if (user.id == null){
      return {
        message: 'User not found',
      }
    }

    return {
      user_id: user.id,
      full_name: user.fullName,
      email: user.email
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(
      { id: id }, // criteria (cari user berdasarkan apa)
      { email: updateUserDto.email } // data yang mau diupdate
    )
    return {
      message: 'success'
    };
  }

  async remove(id: number) {
    await this.usersRepository.delete({id: id})
    return {
      message: 'success',
    }
  }
}
