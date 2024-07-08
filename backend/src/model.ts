import mongoose, { Document, Schema, Types } from "mongoose";

interface usersinterface extends Document {
    name: string;
    email: string
    password: string;
    phone?: string;
    role: 'admin' | 'user';
    coins?: number;
    createdAt?: Date;
}

const users:Schema = new Schema<usersinterface>({
    name: { type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    coins: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

export const UserModel = mongoose.model<usersinterface>('User',users)

interface spaceinterface extends Document{
    name: string;
    location: string;
    description?: string;
    amenities?: string[];
    capacity: number;
    hourly_coinRate: number;
    daily_coinRate: number;
    createdAt?: Date;
}

const space = new Schema<spaceinterface>({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    amenities: { type: [String] },
    capacity: { type: Number, required: true },
    hourly_coinRate: { type: Number, required: true },
    daily_coinRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const SpaceModel = mongoose.model<spaceinterface>('Space', space);

