<script setup lang="ts">
  import  ChatWindow  from "../components/ChatWindow.vue"
  import PlayerInfo from "../components/PlayerInfo.vue"
  import { userState } from "@/sockets/userSocket";
  // import { useUserStore } from '@/stores/userStore'
  // const store = useUserStore()
  // console.log(store.user)

  console.log(userState.user)

</script>

  <template>
    <div>
      <h1>gameview</h1>
      <PlayerInfo />
      <ChatWindow />
    </div>
  </template>
  

<style lang="sass" scoped></style>
