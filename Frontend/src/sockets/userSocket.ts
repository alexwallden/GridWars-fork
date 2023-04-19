import type CreateUser from '@/models/CreateUser';
import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const userState = reactive({
    user: {} as CreateUser[]
  })
  
  export const userSocket = io('http://localhost:3000');
  
  userSocket.on('user', (user: CreateUser) => {
    console.log('Mottagen user');
    
    userState.user.push(user)
  })