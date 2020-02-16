<template>
  <main>
    <!-- <div class="questions"> -->
      <div v-for="question in Answers" v-bind:key="question">
         <p>{{question}}</p>
         <textarea @blur="send" v-model="ans" cols="34" rows="5"></textarea>
      </div>
    <!-- </div> -->
  </main>
</template>

<script>
export default {
  data:function(){
    return{
      ans:'',
      answers:[]
    }
  },
props:['Answers'],
methods:{
  send(){
    if(this.ans!=='')
    this.answers.push(this.ans)
    this.ans=''
    if(this.answers.length==4)
    this.$emit('answers',this.answers)
  }
}
}
</script>

<style scoped>
textarea{
    resize: none;
    text-align: left;
    display: flex;
    
  
}
p{
text-align: left;
}
</style>