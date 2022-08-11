export type User = {
    id: String;
    name: String;
    imageUri: String;
}

export type Message = {
    id: String;
    content : String;
    createdAt : String;
}

export type ChatRoom = {
    id: String;
    users: [User];
    lastMessage: Message;
}