import type Timer from '@/models/Timer';
import { reactive } from 'vue'
import { io } from 'socket.io-client'
// import { socket } from '@/socket';

export const timerState = reactive({
    time: [] as Timer[]
})

export const timerSocket = io('http://localhost:3000');

timerSocket.on('time', (time: Timer) => {
    timerState.time = [];
    console.log('Mottaget timer');
    timerState.time.push(time)
    //lägg till backend
    //ändra i countdown vue
})