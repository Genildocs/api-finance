import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PotDocument = HydratedDocument<Pot>;

@Schema()
export class Pot {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  target: number;

  @Prop({ required: true })
  total: number;

  @Prop()
  theme: string;
}

export const PotSchema = SchemaFactory.createForClass(Pot);
