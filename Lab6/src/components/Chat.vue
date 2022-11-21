<script setup>
    import { ref, onMounted, reactive } from 'vue'


    let user = ref("");
    let text = reactive("");

//onMounted
onMounted(() => {
       const apiUrl = "https://lab5-p379.onrender.com/api/v1/messages/"; 
         fetch(apiUrl)
           .then((res) => res.json())
           .then((data) => {
             user.value = data.videos[0].user;
             text.value = data.videos[0].text;
           });
    });
 
</script>