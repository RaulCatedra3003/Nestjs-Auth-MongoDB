import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDocument } from '../schema/auth.schema';
import { HashEndpointService } from './hash-endpoint.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('auth') private readonly authModel: Model<AuthDocument>,
    private readonly hasEndpointService: HashEndpointService,
  ) {}

  async create(userId: string | undefined): Promise<string | undefined> {
    try {
      const authVerify = {
        userId: userId,
        endPointHash: await this.hasEndpointService.getHashEndpoing(20),
      };
      const response = await this.authModel.create(authVerify);
      if (response) {
        const { endPointHash } = response;
        return endPointHash;
      }
    } catch (error) {
      return error.message;
    }
  }
}
