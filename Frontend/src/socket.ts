import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
})

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://gridwars-backend-gs9kh.ondigitalocean.app/'
// const URL = 'http://localhost:8080';

// export const socket = io(URL, {transports: ['websocket', 'flashsocket', 'polling']});
export const socket = io(URL, {
  transports: ['websocket'],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 100
})

// socket.connect();

socket.on('connect', () => {
  state.connected = true
  console.log('Connected!')
})

socket.on('disconnect', () => {
  state.connected = false
  console.log('On disconnect')
})

socket.on('connect_error', (err) => {
  console.log(`connect_error due to ${err.message}`)
})

//   socket.on("foo", (...args) => {
//     state.fooEvents.push(args);
//   });

//   socket.on("bar", (...args) => {
//     state.barEvents.push(args);
//   });
