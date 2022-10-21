import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const {
  PORT,
} = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5005);
  const config = new DocumentBuilder()
    .setTitle('Gari-Sdk example')
    .setDescription('The Gari-Sdk API description')
    // .setVersion('2.0')
    // .setBasePath('/gari')
    // .addServer('/gari')
    .addServer('/')
    .addTag('solana')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    console.log('server listen on port', process.env.PORT);
}
bootstrap();
