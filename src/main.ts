import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:qwe123@localhost:5672'],
      queue: 'rabbit-log',
      noAck: false,
      prefetchCount: 1,
    },
  });

  app.listen();
}
bootstrap();
