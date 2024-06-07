import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';

import { LogService } from './logs.service';
import { Log, LogSchema } from './log.schema';
import { LogController } from './log.controller';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
