import type ChatMessage from '@/models/ChatMessage';
import { reactive } from 'vue'
import { io } from 'socket.io-client'
import ColorChangeEmitBody from '@/models/ColorChangeEmitBody';
import ColorOption from '@/models/ColorOption';

export const gameState = reactive({
  latestColorChange: new ColorChangeEmitBody(0, 0, 'white'), // Placeholder
  reset: false
})

/**
 *  <option value="#ff0000" class="option-two" name="red"></option>
      <option value="#00ff00" class="option-three" name="green"></option>
      <option value="#ffff00" class="option-four" name="yellow"></option>
      <option value="#57076b" class="option-five" name="purple"></option>
 */

export const gameSocket = io('http://localhost:3000');

gameSocket.on('color-change', (colorInfo: ColorChangeEmitBody) => {
  gameState.latestColorChange = colorInfo;
})

gameSocket.on('game-reset', () => {
  gameState.reset = true;
})

// <option value="#0074cc" class="option-one" name="blue"></option>