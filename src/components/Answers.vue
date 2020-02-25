<template>
  <main>
      <div v-for="(question,index) in Answers" v-bind:key="question">
         <p>{{Answers[index].value}}</p>
         <textarea v-on:keyup.delete="flagchange($event,Answers[index].index)" @input="flagchange($event,Answers[index].index)" @change="flagchange($event,Answers[index].index)"  v-model="answers[Answers[index].index]" cols="85" rows="5"></textarea>
         <p v-if="errors[index].Flag" style="color:red;margin-left:79%;font-size:12px">{{errors[index].message}}</p>
      </div>
      <div class="navigate navigate--d1">
        <button @click="$router.push('/expertise')" class="navigate navigate__button1">Prev</button>
        <button :disabled="bool||disabled" class="navigate navigate__button2" @click="$router.push('/thanks')">Submit</button>
      </div>
  </main>
</template>

<script>
export default {
  data:function(){
    return{
      ans:'',
      answers:[],
      errors:[{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'}],
      bool:false,
      
    }
  },
props:['Answers'],
methods:{
  // send(){
  //   this.$emit('answers',this.answers) 
  // },
  flagchange($event,index){
     
   if(event.target.value!==''){
    this.errors[index].Flag=false
    this.bool=false
   }
   else{ 
     console.log(index.Flag,event.target.value)  
    this.errors[index].Flag=true
    this.bool=true
   }
     
  }
},
watch:{
  errors:{
    handler:function(newval,old){
       console.log('hey',newval,old)
      // this.bool=false
      this.errors.filter((value,index)=>{
        if(value[index].Flag==true)
          {
            this.bool=true
            return this.bool
          }

      })
      return true
      },
      deep: true
    
    }
  },
computed:{
  disabled(){
     if(this.answers.length==4)
       return false
     else
       return true
  }
}
}

</script>

<style scoped lang="scss">
textarea{
    resize: none;
    text-align: left;
    display: flex;  
}
p{
text-align: left;
margin-top: 0px;
}
.navigate--d1{
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 40px;
  width:100%;
.navigate__button1{
  background-color: orange;
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
    }
.navigate__button2{
  background-color:rgb(31, 207, 31);
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
}


    

}

</style>