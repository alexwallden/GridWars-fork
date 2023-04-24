import type User from '@/models/User'
import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const resultState = reactive({
  users: [] as User[],
})

export const resultSocket = io('http://localhost:3000')

resultSocket.on('result', (users: User[]) => {
  resultState.users = []
  console.log('Mottagen result', users)
  resultState.users = users
})