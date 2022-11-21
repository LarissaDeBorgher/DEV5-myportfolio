<script setup>
    import { ref, onMounted} from 'vue'


    let users = ref("");
    let texts = ref("");

//onMountedgit
onMounted(() => {
       const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/"; 
         fetch(apiUrl)
           .then((res) => res.json())
           .then((data) => {
            //console.log(data);
             users.value = data;
             texts.value = data;
           });
    });
 
</script>

<template>
    <div class="comments">
        <ul>
            <li v-for="user in users" :key="comment">
                <h3> {{ user.user }}</h3>
                <p> {{ user.text }}</p>
             
            </li>
        </ul>
    </div>
  
 <div class="addcomment">
    <input type="text" v-model="comment" placeholder="Add comment..."/>
    <button @click="addComment">Post</button>
 </div>
   
  </template>



