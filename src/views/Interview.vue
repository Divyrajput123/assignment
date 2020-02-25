<template>
  <main>
     <div class="interview interview--container">
       <Questions v-bind:counter="counter" @updateQues="update($event)"></Questions>
       <div class="container container--line">
      </div>
       <div v-for="(question,index) in Answers" v-bind:key="question">
         <p>{{Answers[index].value}}</p>
         <textarea v-on:keyup.delete="flagchange($event,Answers[index].index)" @input="flagchange($event,Answers[index].index)" @change="flagchange($event,Answers[index].index)"  v-model="answers[Answers[index].index]" cols="85" rows="5"></textarea>
         <p v-if="errors[index].Flag" style="color:red;margin-left:79%;font-size:12px">{{errors[index].message}}</p>
       </div>
     </div>
      <div class="twobutton twobutton-preNe" style="display:flex;flex-wrap:wrap">
       <li v-if="counter>=1" style="color:orange;font-size:14px;list-style-type:none" @click="Prev">Prev Question</li>
       <li v-if="counter<3" style="color:orange;font-size:14px;list-style-type:none" @click="Next">Next Question</li>
      </div>  
      <div class="navigate navigate--d1">
        <button @click="prev" class="navigate navigate__button1">&#8592; Prev</button>
        <button v-bind:style= "[bool||disabled ? {color:'grey'} : {backgroundcolor:'orange'}]" :disabled="bool||disabled" class="navigate navigate__button2" @click="submit">Submit</button>
      </div>   
  </main>
</template>

<script>
import Questions from '../components/Questions.vue'
export default {
  data:function(){
    return{
      ans:'',
      answers:[],
      errors:[{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'},{'Flag':false,'message':'Field cant be empty'}],
      bool:false,
      Answers:[{'index':0,'value':'What is Lorem Ipsum'}],
      counter:0,
      questions:[{'index':0,'value':'What is Lorem Ipsum'},{'index':1,'value':'What is Information Technology'},{'index':2,'value':'Which data structure is used for detecting loop in linked list'},{'index':3,'value':'Why Java is platform independent'}],
      
    }
  },
// props:['Answers'],
methods:{
  // send(){
  //   this.$emit('answers',this.answers) 
  // },
  update(value){
    this.counter=value
    this.Answers=[]
    console.log(value)
    this.Answers.push(this.questions[value])
  },
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
     
  },
  prev(){
  localStorage.setItem('active',3)
  window.console.log('f',this.$store.index)
  this.$store.state.index=this.$store.state.counter+1
  this.$router.push('/expertise')
  window.console.log(this.$store.index)

},
 Next(){
   this.counter++;
   this.Answers=[]
   this.Answers.push(this.questions[this.counter])

 },

Prev(){  
  if(this.counter==4)
   this.counter=this.counter-2
  else
   this.counter=this.counter-1
   this.Answers=[]
   this.Answers.push(this.questions[this.counter])
},
submit(){
localStorage.setItem('active',1)
localStorage.setItem('done',1)
localStorage.removeItem('Answers')
localStorage.removeItem('kanswer')
localStorage.removeItem('selections')
localStorage.removeItem('error2')
localStorage.removeItem('t1')
localStorage.removeItem('t2')
localStorage.removeItem('error3')
localStorage.removeItem('error1')

this.$router.push('/thanks')
}
},
watch:{
  errors:{
    handler:function(newval,old){
      console.log('hey',newval,old)
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
    
    },
  answers(){
    console.log('item here3')
    localStorage.setItem('kanswer',JSON.stringify(this.answers))
    return true
  }

  },
computed:{
  disabled(){
     if(this.answers.length==4)
       return false
     else
       return true
  },

  
  
},
components:{
  Questions
},
mounted:function(){
 if(JSON.parse(localStorage.getItem('kanswer')).length>0)
  this.answers=JSON.parse(localStorage.getItem('kanswer'))
  localStorage.setItem('active',1)
  this.$store.state.index=this.$store.state.counter++

},
created:function(){
  if(localStorage.getItem('done')<=3)
    this.$router.push('/error')

  localStorage.setItem('active',4)
  this.$store.state.index=this.$store.state.counter++
}
}

</script>

<style scoped lang="scss">
main{
  .twobutton-preNe{
    display: flex;
    flex-wrap: wrap;
    margin-left: 32.6%;
    max-width: 47%;
    justify-content: space-between;
}
}
.interview--container{
  display: flex;
  margin-left:75px;
  main{
  width: 20%;
   }
 .container--line{
  border-left: 2px solid #ddd;
  margin-right: 80px;
  height: 114px;
}
}
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
  // display: flex;
  // justify-content: space-around;
  bottom: 40px;
  width:100%;
.navigate__button1{
  background-color: orange;
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
  color:white;
  float: left;
  margin-left:14%;
  font-size: 12px;
    }
.navigate__button2{
  background-color:rgb(31, 207, 31);
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
  color: white;
  float:right;
  margin-right:14%;
  font-size: 12px;
}


    

}

</style>