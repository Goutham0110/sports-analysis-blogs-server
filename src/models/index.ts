import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String, unique: true, required: true },
    author: String,
    description: String,
    file: { type: String, unique: true, required: true },
    featured: Boolean,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const subscriberSchema = new Schema({
    email: { type: String, unique: true, required: true },
    deleted_at: Date,
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

const apiLogsSchema = new Schema({
    endpoint: { type: String, required: true }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

const Models = {
    Blog: mongoose.model('Blog', blogSchema),
    Subscriber: mongoose.model('Subscriber', subscriberSchema),
    ApiLog: mongoose.model('ApiLog', apiLogsSchema)
}

export default Models;