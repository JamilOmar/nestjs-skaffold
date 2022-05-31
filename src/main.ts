import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const logger = new Logger();
  const port = process.env.PORT;
  const prefix = process.env.PREFIX;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  await app.listen(port);
  logger.log(`Application listening on port ${port} and prefix ${prefix}`);
}
bootstrap();
