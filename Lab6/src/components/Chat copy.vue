<script setup>
    import { ref, onMounted, reactive} from 'vue'


    let users = reactive({comments: []});
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

    const addComment = () => {
        const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/"; 
        const data = {
            user: "Larissa",
            text: texts.value,
        };
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('it works',data);
            texts.value.push({
                user: data.user,
                text: data.text,
            });
            })
            };
       
      
</script>

<template>
    <div class="comments">
        <ul>
            <li v-for="user in users" :key="text">
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


<style scoped>
.comments{
    background-color: #dddddd;
    width: 50%;
    height: 100%;
}
ul{

    padding: 0;
    margin: 0;
}
li{
   list-style: none;
   padding: 0;
   margin: 2%;
}
h3{
   margin: 0;
   padding: 0;
   font-size: 1.2rem;
}

p{
   margin: 0;
   padding: 0;
   font-size: 1rem;
}


</style>

