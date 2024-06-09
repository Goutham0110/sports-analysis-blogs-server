
interface Blog {
    title: String,
    author: String,
    description: String,
    file: String,
    created_at: Date,
    updated_at: Date,
}

interface Subscriber {
    email: String,
    created_at: Date,
    deleted_at: Date
}

interface ApiLogs {
    endpoint: String,
    created_at: String
}