import type ChatMessage from '@/models/ChatMessage';
import { reactive } from 'vue'
import { io } from 'socket.io-client'
// import { socket } from '@/socket';

export const gameState = reactive({
  chatMessages: [] as ChatMessage[]
})

export const gameSocket = io('http://localhost:3000');

gameSocket.on('color-change', (message: ChatMessage) => {
  console.log('Mottaget message');
  
  // chatState.chatMessages.push(message)
})

