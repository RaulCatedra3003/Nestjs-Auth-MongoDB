import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AuthDocument extends Document {
  @Prop({ required: [true, 'The userId is required'], unique: true })
  userId: string;

  @Prop({ required: [true, 'The endPointHash is required'], unique: true })
  endPointHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthDocument);
