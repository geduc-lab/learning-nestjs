import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserValidation } from './validation/user.validation';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private Model: Repository<User> ) { }


  
  async create(@Body() body : UserValidation) : Promise<User> {
    return await this.Model.save(body)
  }

  async findAll(): Promise<User[]> {
    const users =  await this.Model.find();
    return users
  }


  async findOne(id: number): Promise<User> {
    const user = await this.Model.findOne({ where: {id}});

    if(!user ){
      throw new NotFoundException(`Não encontrou esse usuario ${id}`)
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) : Promise<User>{
    
    const user = await this.Model.findOne({ where: {id}});

    if(!user ){
      throw new NotFoundException(`Não encontrou esse usuario ${id}`)
    }

    await this.Model.update({ id }, updateUserDto)

    return this.Model.findOne({ where: {id}})
    
  }

  async remove(id: number): Promise<string> {
    const user = await this.Model.findOne({ where: {id}});

    if(!user ){
      throw new NotFoundException(`Não encontrou esse usuario ${id}`)
    }
    this.Model.delete(id)
    return `Usuario deletado com sucesso ${id}`
  }
}
