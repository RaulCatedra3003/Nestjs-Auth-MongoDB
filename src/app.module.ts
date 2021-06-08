import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { configValidationSchema } from './config/validation';
import { AuthModule } from './auth/auth.module';
import { AppMailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: configValidationSchema,
    }),
    DatabaseModule.forRoot(),
    UserModule,
    AuthModule,
    AppMailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
