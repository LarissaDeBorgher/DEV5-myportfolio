<script setup>
  import {ref, onMounted, reactive} from 'vue'; 
  import "animate.css";


  let videos = reactive({data: []});
  let videoSrc = ref("");
  let Counter = ref("0");
  let animation = ref("");
  // onMounted
  onMounted(() => {
    const apiUrl = "https://app.fakejson.com/q/JFUiRa6b?token=flqmHQeAIH84Aajh2HkSXQ";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        videos.data = data.videos;
        videoSrc.value= data.videos[0].video;
      
      });
  });


  const nextVideo = () =>{
    Counter.value++;
    animation.value = "animate__fadeOut";
    setTimeout(() => {
      videoSrc.value = videos.data[Counter.value].video;
      animation.value = "animate__fadeIn";
   
    }, 500);
    //console.log("next video");
  

  }
</script>

<template>
  <div class="blur">
    {{ Counter }}
    <div class="controls">
      <a @click.prevent="nextVideo" href ="#">🔽</a>
    </div>
  
  
 
    
    <video
    :src="videoSrc"
    :class="animation"
    class="animate__animated"
    autoplay
    muted
    ></video>
  </div>
 
</template>

<style scoped>
  video{
    max-width:100%;
    max-height:100vh;
  }

  .blur {
    background-image: url('/blur.jpg');
    background-size: cover;
    text-align: center;
    position: relative;
  }

  .controls {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .controls a{
    font-size: 40px;
  }
</style>