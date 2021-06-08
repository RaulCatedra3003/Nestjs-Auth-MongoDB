import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppMailerModule } from 'src/mailer/mailer.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controller/auth.controller';
import { AuthSchema } from './schema/auth.schema';
import { AuthService } from './service/auth.service';
import { HashEndpointService } from './service/hash-endpoint.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'auth', schema: AuthSchema }]),
    UserModule,
    AppMailerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, HashEndpointService],
})
export class AuthModule {}
