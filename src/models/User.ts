import { Schema, model, Document } from 'mongoose';

import IUser from '../interfaces/IUser';

type UserModel = IUser & Document;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
});

export default model<UserModel>('User', UserSchema);