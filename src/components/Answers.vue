<template>
  <main>
      <div v-for="(question,index) in Answers" v-bind:key="question">
         <p>{{Answers[index].value}}</p>
         <textarea @input="flagchange($event,index)" @change="flagchange($event,index)" @blur="send;flagchange($event,index)" v-model="answers[Answers[index].index]" cols="85" rows="5"></textarea>
         <p v-if="errors[index].Flag==false" style="color:red;margin-left:19%">{{errors[index].message}}</p>
 
      </div>
  </main>
</template>

<script>
export default {
  data:function(){
    return{
      ans:'',
      answers:[],
      errors:[{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'}]
    }
  },
props:['Answers'],
methods:{
  send(){
    // if(this.ans!=='')
    // this.answers.push(this.ans)
    // this.ans=''
    // if(this.answers.length==4)
    // this.flagchange(event,index)
    this.$emit('answers',this.answers)
   
  },
  flagchange($event,index){
   if(event.target.value!=='')
    this.errors[index].Flag=true
   else if(event.target.value=='')
    this.errors[index].Flag=false
       
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
margin-top: 0px;
}

</style>