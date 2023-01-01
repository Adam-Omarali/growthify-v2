import mongoose, { Schema } from 'mongoose';

export interface User{
    _id: Schema.Types.ObjectId
    name: String
    email: String
    accountType: String
    createdAt: String
    updatedAt: String
    __v: number
}

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email : {type: String, required: true},
    accountType: {type: String, required: true},
}, {timestamps: true})

export const UserModel = mongoose.models.user || mongoose.model('user', UserSchema)