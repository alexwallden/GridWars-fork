import type User from '@/models/User'; //Ändrade import här pga ändrat filnamn?
import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const usersState = reactive({
    users: [] as User[]
  })
  
  export const usersSocket = io('http://localhost:3000');
  
  usersSocket.on('create-user', (users: User[]) => {
    usersState.users = [];
    console.log('Mottagen user');
    
    usersState.users = users
  })