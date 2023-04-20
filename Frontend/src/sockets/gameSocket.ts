import type ChatMessage from '@/models/ChatMessage';
import { reactive } from 'vue'
import { io } from 'socket.io-client'
import ColorChangeEmitBody from '@/models/ColorChangeEmitBody';

export const gameState = reactive({
  latestColorChange: new ColorChangeEmitBody(0, 0, 'white'), // Placeholder
  reset: false
})

export const gameSocket = io('http://localhost:3000');

gameSocket.on('color-change', (colorInfo: ColorChangeEmitBody) => {
  gameState.latestColorChange = colorInfo;
})

gameSocket.on('game-reset', () => {
  gameState.reset = true;
})

