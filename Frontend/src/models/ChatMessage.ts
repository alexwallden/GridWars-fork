export default class ChatMessage {
    constructor(
        public username: string,
        public userId: number,
        public messageBody: string,
    ){}
}