import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users') // localhost:3000/users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() response: Response
  ) {
    const result = await this.usersService.create(createUserDto);
    return response.json(result);
  }

  @Post('/login') // localhost:3000/users/login
  async login(
    @Body() loginUserDto: LoginUserDto,
    @Res() response: Response
  ) {
    const result = await this.usersService.findOne(loginUserDto)
    return response.json(result);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response
  ) {
    const result = await this.usersService.update(+id, updateUserDto)
    return response.json(result);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Res() response: Response
  ) {
    const result = await this.usersService.remove(+id)
    return response.json(result);
  }
}
