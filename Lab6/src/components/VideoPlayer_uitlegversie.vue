<script setup>
    import { ref, reactive } from 'vue'
    let title= ref("Video Player");
    const comments = reactive(["comment 1", "comment 2", "comment 3"]);

    // aan de array (comments) een nieuwe comment toevoegen
    const addComment = () => {
        comments.push(title.value);
    }
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- (key) elk item in de loop moet een unieke waarde hebben
         (v-for) loop over de comments array 
         (v, @) shortcut
         (@click) event listener
    
    -->
    <ul>
      <li v-for="comment in comments" :key="comment">
        {{ comment }}
      </li>
    </ul>

    <input type="text" v-model="title" />
    <button @click="addComment">Add Comment</button>

  </div>
 
</template>

<style scoped>

</style>