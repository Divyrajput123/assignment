<template>
  <main>
    <!-- <div class="questions"> -->
      <div v-for="question in Answers" v-bind:key="question">
         <p>{{question}}</p>
         <textarea cols="34"></textarea>
      </div>
    <!-- </div> -->
  </main>
</template>

<script>
export default {
props:['Answers']
}
</script>

<style scoped>
textarea{
    resize: none;
    text-align: left;
    
  
}
p{
text-align: left;
}
</style>