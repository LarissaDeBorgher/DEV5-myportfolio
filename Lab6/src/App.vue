<script setup>
//import VideoPlayer.vue
import VideoPlayer from './components/VideoPlayer.vue';

//import VideoDetails.vue
import VideoDetails from './components/VideoDetails.vue';

//import VideoDetails.vue
import Chat from './components/Chat.vue';


</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="userfield">
      <VideoDetails />
      <Chat />
    </div> 
  </div>
</template>

<style scoped>
.app{
  display:flex;
  flex-direction: row;
}

.userfield{
  display:flex;
  flex-direction: column;
}
</style>
