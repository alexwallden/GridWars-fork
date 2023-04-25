import type User from '@/models/User'
import { reactive } from 'vue'
import { io } from 'socket.io-client'
import { socket } from '@/socket'

export const resultState = reactive({
  users: [] as User[],
})

// export const resultSocket = io('http://localhost:3000')

socket.on('result', (users: User[]) => {
  resultState.users = []
  console.log('Mottagen result', users)
  resultState.users = users
})