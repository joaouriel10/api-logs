import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { Log } from './log.schema';
import { InjectModel } from '@nestjs/mongoose';

interface ILogTask {
  userId: string;
  data: {
    id: string;
    name: string;
    status: string;
    description: string;
    created_at: string;
    updated_at: string;
    user_id: string;
  };
}

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name)
    private authorizationModel: Model<Log>,
  ) {}

  async saveLog({ userId, data }: ILogTask): Promise<void> {
    await this.authorizationModel.create({ data, userId });
    console.log({ userId, data });
  }
}
