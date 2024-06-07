import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload,
} from '@nestjs/microservices';
import { LogService } from './logs.service';

@Controller()
export class LogController {
  constructor(private readonly logService: LogService) {}

  @MessagePattern('update-task')
  public async updateTaksLog(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    await this.logService.saveLog(data.data);
    channel.ack(orginalMessage);
  }
}
