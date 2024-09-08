
interface Blog {
    title: string,
    author: string,
    description: string,
    file: string,
    created_at: Date,
    updated_at: Date,
}

interface Subscriber {
    email: string,
    created_at: Date,
    deleted_at: Date
}

interface ApiLogs {
    endpoint: string,
    created_at: string
}