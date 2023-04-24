import { defineStore } from "pinia";
import User from "@/models/User";

const STORE_NAME = 'userStore'

export const useUserStore = defineStore(STORE_NAME, {
  state: () => ({
    user: [] as User[]
  }),
  actions: {
    addUser(userName: string, color: string, id: string) {
    this.user.push(new User(userName, color, id))
    console.log(this.user);
    
    }
  }
})