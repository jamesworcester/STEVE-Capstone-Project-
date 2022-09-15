export type User = {
    id: String;
    name: String;
    imageUri: String;
}

export type Message = {
    id: String;
    content : String;
    createdAt : String;
    user: User;
}

export type ChatRoom = {
    id: String;
    users: [User];
    lastMessage: Message;
}

export type Channel = {
    id: String;
    channel_text: String;
    description: String;
}

export type Team = {
    id: String;
    name: String;
    description: String;
    is_archived: Number;
    //teamMembers: [TeamMember];
}

export type TeamMember = {
    id: String;
    email: String;
    phone: String;
    first_name: String;
    last_name: String;
    gender: String;
}