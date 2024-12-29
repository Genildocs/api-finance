import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Pot } from 'src/pots/schemas/pot.schema';
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Pot.name })
  pot: Pot;
}

export const UserSchema = SchemaFactory.createForClass(User);
