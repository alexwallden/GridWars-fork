import { defineStore } from "pinia";
import CreateUser from "@/models/CreateUser";
import { v4 as uuidv4 } from 'uuid';

const STORE_NAME = 'userStore'

export const useUserStore = defineStore(STORE_NAME, {
  state: () => ({
    users: [] as CreateUser[]
  }),
  actions: {
    addUser(userName: string, color: string) {
      const id = uuidv4()
      this.users.push(new CreateUser(userName, color, id))
    }
  }
})