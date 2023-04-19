<script setup lang="ts">
  import  ChatWindow  from "../components/ChatWindow.vue"
  import { useUserStore } from '@/stores/userStore'
  const store = useUserStore()
  console.log(store.user[0])
  import PlayerInfo from "@/components/PlayerInfo.vue"

</script>

  <template>
    <div>
      <h1>gameview</h1>
      <PlayerInfo />
      <ChatWindow />
    </div>
  </template>
  

<style lang="sass" scoped></style>
