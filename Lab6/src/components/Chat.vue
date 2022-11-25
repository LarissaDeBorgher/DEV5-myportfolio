<script setup>
    import { ref, onMounted, reactive} from 'vue'


    let comments = reactive({comments: []}); //updat array comments after submitting (nopage reload)
    let textMessage = ref("");

//Get all comments when loading component onMounted
onMounted(() => {
       const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/"; 
         fetch(apiUrl)
           .then((res) => res.json())
           .then((data) => {
            //console.log(data);
             comments.comments = data;
             
           });
    });
//add own comment in array (API)
    const addComment = () => {
        console.log('textmessage.value', textMessage.value);
        let data = {
            user: "Larissa",
            text: textMessage.value,
        };
        fetch("https://lab5-p379.onrender.com/api/v1/messages/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            //console.log('it works',data);
            comments.comments.push({
                _id: data.data.id,
                user: data.data.user,
                text: data.data.text
            });
            })
            .catch((err) => {
                //console.log(err);
            });
            };
       
      
</script>

<template>
      <!-- (key) elk item in de loop moet een unieke waarde hebben
         (v-for) loop over de comments array 
         (v, @) shortcut
         (@click) event listener-->
    <div class="comments">
        <ul>
            <li v-for="comment in comments.comments" :key="comments.id">
                <h3> {{ comment.user }}</h3>
                <p> {{ comment.text }}</p>
             
            </li>
        </ul>
    </div>
  
 <div class="addcomment">
    <input type="text" v-model="textMessage" placeholder="Add comment..."/>
    <button @click="addComment">Post</button>
 </div>
   
  </template>


<style scoped>
.comments{
    background-color: #dddddd;
    width: 100%;
    height:380px;
    overflow: scroll;
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

