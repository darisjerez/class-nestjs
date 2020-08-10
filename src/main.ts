import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  "origin": "http://127.0.0.1:5500/",
  "methods": "GET,HEAD,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
});
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
