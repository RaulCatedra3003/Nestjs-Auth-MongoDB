import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDocument } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async create(newUser: CreateUserDto): Promise<string | undefined> {
    try {
      const response = await this.userModel.create(newUser); //TODO: crear un wraper para comprobar errores de creación;
      if (response) {
        const { _id } = response;
        return _id;
      }
    } catch (error) {
      return error.message;
    }
  }
}
