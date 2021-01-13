import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default model('Message', MessageSchema);