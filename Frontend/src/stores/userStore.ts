import { defineStore } from "pinia";
import User from "@/models/User";
import { v4 as uuidv4 } from 'uuid';

const STORE_NAME = 'userStore'

export const useUserStore = defineStore(STORE_NAME, {
  state: () => ({
    user: [] as User[]
  }),
  actions: {
    addUser(userName: string, color: string) {
      this.user = []
      const id = uuidv4()
      this.user.push(new User(userName, color, id))
      console.log(this.user);
    }
  }
})