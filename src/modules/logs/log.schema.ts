import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {
  @Prop({ required: true })
  userId: string;

  @Prop({
    type: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      status: { type: String, required: true },
      description: { type: String, required: true },
      created_at: { type: String, required: true },
      updated_at: { type: String, required: true },
      user_id: { type: String, required: true },
    },
    required: true,
  })
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

export const LogSchema = SchemaFactory.createForClass(Log);
