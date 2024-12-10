export interface Message {
    username: string;
    message: string;
}

export interface MessageContextType {
    text: string;
    setText: (value: string) => void;
}