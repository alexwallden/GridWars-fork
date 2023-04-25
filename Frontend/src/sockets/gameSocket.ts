import type ChatMessage from '@/models/ChatMessage';
import { reactive } from 'vue'
import { io } from 'socket.io-client'
import type ColorChangeEmitBody from '@/models/ColorChangeEmitBody';
import ColorOption from '@/models/ColorOption';
import { useUserStore } from '@/stores/userStore';
import router from '@/router';
import { socket } from '@/socket';

// const user = useUserStore()?.$state.user[0]

interface IGameState {
  latestColorChange: ColorChangeEmitBody | null;
  reset: boolean;
  gameStarted: boolean;
}


export const gameState = reactive<IGameState>({
  latestColorChange: null,
  reset: false,
  gameStarted: false,
})

// export const gameSocket = io('http://localhost:3000');

socket.on('color-change', (colorInfo: ColorChangeEmitBody) => {
  gameState.latestColorChange = colorInfo;
})

socket.on('game-reset', () => {
  gameState.reset = true;
})

socket.on('start-game', (startMessage) => {
  console.log(startMessage);
  gameState.gameStarted = startMessage.gameStarted;
})

socket.on('ship-hit', (ship) => {
  if (ship.user.color === useUserStore().$state.user[0]?.color) {
    router.push('/result');
  }
})

// gameSocket.on('hitter', ((hitInfo) => {
//   console.log(hitInfo);
//   if (hitInfo.hit) {

//   }
  
// }))

// <option value="#0074cc" class="option-one" name="blue"></option>