import { Response } from 'express';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/service/user.service';
import { AuthService } from '../service/auth.service';
import { AppMailerService } from 'src/mailer/mailer.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private mailerService: AppMailerService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() newUser: CreateUserDto, @Res() res: Response) {
    try {
      const response = await this.userService.create(newUser);
      /* const saveAuthResponse = await this.authService.create(response);
      const mailer = await this.mailerService.sendVerificationEmail(
        newUser.email,
        saveAuthResponse,
      ); */
      res.status(HttpStatus.CREATED).send({ data: response });
      //TODO: Validaciones de creación correctas antes del siguiente paso o envio de respuesta erronea
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: error.message });
    }
  }
}
