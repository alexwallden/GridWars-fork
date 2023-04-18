import { defineStore } from "pinia";
import CreateUser from "@/models/CreateUser";

const STORE_NAME = 'userStore'

export const useUserStore = defineStore(STORE_NAME, {
  state: () => ({
    users: [] as CreateUser[]
  }),
  actions: {
    addUser(userName: string, color: string, id: number) {
      this.users.push(new CreateUser(userName, color, id))
    }
  }
})