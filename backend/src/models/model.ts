import mongoose, { Document, Schema, Types } from "mongoose";

// User Schema
interface UsersInterface extends Document {
    name: string;
    email: string;
    password: string;
    phone?: string;
    role: 'admin' | 'user';
    coins?: number;
    createdAt?: Date;
}

const usersSchema: Schema = new Schema<UsersInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    coins: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

export const UserModel = mongoose.model<UsersInterface>('User', usersSchema);

// Space Schema
interface SpaceInterface extends Document {
    name: string;
    location: string;
    description?: string;
    amenities?: string[];
    capacity: number;
    hourly_coinRate: number;
    daily_coinRate: number;
    createdAt?: Date;
}

const spaceSchema: Schema = new Schema<SpaceInterface>({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    amenities: { type: [String] },
    capacity: { type: Number, required: true },
    hourly_coinRate: { type: Number, required: true },
    daily_coinRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const SpaceModel = mongoose.model<SpaceInterface>('Space', spaceSchema);

// Booking Schema
interface BookingInterface extends Document {
    user: Types.ObjectId;
    space: Types.ObjectId;
    startTime: Date;
    endTime: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
    paymentMethod: 'coins' | 'credit_card' | 'paypal';
    createdAt?: Date;
}

const bookingSchema: Schema = new Schema<BookingInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    space: { type: Schema.Types.ObjectId, ref: 'Space', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    paymentMethod: { type: String, enum: ['coins', 'credit_card', 'paypal'], required: true },
    createdAt: { type: Date, default: Date.now }
});

export const BookingModel = mongoose.model<BookingInterface>('Booking', bookingSchema);

// Coin Purchase Schema
interface CoinPurchaseInterface extends Document {
    user: Types.ObjectId;
    amount: number;
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed';
    createdAt?: Date;
}

const coinPurchaseSchema: Schema = new Schema<CoinPurchaseInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export const CoinPurchaseModel = mongoose.model<CoinPurchaseInterface>('CoinPurchase', coinPurchaseSchema);

// Payment Schema
interface PaymentInterface extends Document {
    user: Types.ObjectId;
    booking: Types.ObjectId;
    amount: number;
    paymentMethod: 'credit_card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed';
    createdAt?: Date;
}

const paymentSchema: Schema = new Schema<PaymentInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'bank_transfer'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export const PaymentModel = mongoose.model<PaymentInterface>('Payment', paymentSchema);

// Review Schema
interface ReviewInterface extends Document {
    user: Types.ObjectId;
    space: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt?: Date;
}

const reviewSchema: Schema = new Schema<ReviewInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    space: { type: Schema.Types.ObjectId, ref: 'Space', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export const ReviewModel = mongoose.model<ReviewInterface>('Review', reviewSchema);

// Notification Schema
interface NotificationInterface extends Document {
    user: Types.ObjectId;
    message: string;
    read: boolean;
    createdAt?: Date;
}

const notificationSchema: Schema = new Schema<NotificationInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export const NotificationModel = mongoose.model<NotificationInterface>('Notification', notificationSchema);

// Coins Transaction Schema
interface CoinsTransactionInterface extends Document {
    user: Types.ObjectId;
    type: 'purchase' | 'booking' | 'refund';
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    createdAt?: Date;
}

const coinsTransactionSchema: Schema = new Schema<CoinsTransactionInterface>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['purchase', 'booking', 'refund'], required: true },
    amount: { type: Number, required: true },
    balanceBefore: { type: Number, required: true },
    balanceAfter: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const CoinsTransactionModel = mongoose.model<CoinsTransactionInterface>('CoinsTransaction', coinsTransactionSchema);
