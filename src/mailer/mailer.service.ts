import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppMailerService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendVerificationEmail(
    email: string,
    validationEndPoint: string | undefined,
  ) {
    return this.mailerService
      .sendMail({
        to: email,
        from: this.configService.get('mailFrom'),
        subject: 'Acount activation at Musikverein',
        template: __dirname + '/templates/emailVerification',
        context: {
          url: `http://localhost:4000/auth/${validationEndPoint}`,
          name: email,
        },
      })
      .then(() => {
        return 'Mail send';
      });
  }
}
