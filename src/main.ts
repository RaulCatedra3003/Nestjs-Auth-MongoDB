import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  await app.listen(config.get('port') || 5000, () => {
    Logger.log(`Running in ${config.get('enviroment')} mode`);
    Logger.log(`Listening on port: ${config.get('port')}`);
  });
}
bootstrap();
