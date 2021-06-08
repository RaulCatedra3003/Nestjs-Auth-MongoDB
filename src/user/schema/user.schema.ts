import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserDocument extends Document {
  @Prop({ trim: true, default: '' })
  userName: string;

  @Prop({ trim: true, default: '' })
  firstName: string;

  @Prop({ trim: true, default: '' })
  lastName: string;

  @Prop({
    default:
      'https://res.cloudinary.com/musikverein-project/image/upload/v1621345047/profile-photo_gqir6g.svg',
  })
  image: string;

  @Prop({ default: false })
  verificated: boolean;

  @Prop({ trim: true, unique: true, required: [true, 'The email is required'] })
  email: string;

  @Prop({ trim: true, required: [true, 'The password is required'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
