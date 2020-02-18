<template>
  <main>
    <div class="container containermod">
      <div class="container container--questions">
       <li @click="question(0)" >1.  Question#1<span v-if="number>=0"><i :class="{active :number>=0}" class="fas fa-check"></i></span></li> 
       <li @click="question(1)" >2.  Question#2 <span v-if="number>=1"><i :class="{active: number>=1}"  class="fas fa-check"></i></span></li>
       <li @click="question(2)" >3.  Question#3 <span v-if="number>=2"><i :class="{active: number>=2}" class="fas fa-check"></i></span></li>
       <li @click="question(3)" >4.  Question#4 <span v-if="number>=3"><i :class="{active: number>=3}" class="fas fa-check"></i></span></li>
      </div>
      <div class="container container--line">
      </div>
      <Answer @answers="checkAns($event)"  v-bind:Answers="questions"></Answer> 
    </div>

    <div class="twobutton twobutton-preNe" style="display:flex;flex-wrap:wrap">
       <li v-if="count>=1" style="color:orange;font-size:14px;list-style-type:none;text-align:start;margin-left:336px;" @click="Prev">Prev Question</li>
       <li v-if="count<=3" style="color:orange;font-size:14px;list-style-type:none;margin-left:767px" @click="Next">Next Question</li>
    </div>

    <div class="navigate navigate--d1">
      <button @click="prevQ" class="navigate navigate__button1">Prev</button>
      <button :disabled="this.length<4" class="navigate navigate__button2" @click="$router.push('/thanks')">Submit</button>
    </div>
  </main>
</template>

<script>
localStorage.setItem('number',-1)
import Answer from '../components/Answers.vue'
export default {
data:function(){
  return{
    QuestionList:['What is Lorem Ipsum','What is Information Technology','Which data structure is used for detecting loop in linked list','Why Java is platform independent'],
    questions:['What is Lorem Ipsum'],
    number:localStorage.getItem('number'),
    count:0,
    answers:[],
    length:0,
    Flag:[]
  }
},
components:{
 Answer
},
methods:{
 question(e){
   this.number=e
   this.Flag[e]=true
   localStorage.setItem('number',e)
  window.console.log(e)
   this.questions=[]
   this.questions.push(this.QuestionList[e])
  
 },
 Next(){
   this.number=this.count
   this.questions=[]
   this.questions.push(this.QuestionList[this.count])
   this.count++;

 },
 checkAns(value){
  this.answers=value
  this.length=this.answers.length

 },
 Prev(){
   
  if(this.count==4)
   this.count=this.count-2
  else
   this.count=this.count-1

   this.questions=[]
   this.number=this.count
   this.questions.push(this.QuestionList[this.count])
  
},
prevQ(){
  localStorage.setItem('active',3)
  this.$router.push('/expertise')
}
},

}
</script>

<style scoped lang="scss">

.containermod{
  margin-top:90px;
  display:flex;
  flex-wrap: wrap;
  justify-content: start; 
 
}
.container--questions {
  li{
  list-style-type: none;
  margin-bottom: 10px;
  
  }
}
.fa-check{
  color:#ddd ;
  
  }
.active{
  color:orange;
    }
.container--questions{
  margin:0px 70px;
  
}
.container--line{
  border-left: 1px solid #ddd;
  margin-right: 80px;
}
// .ans{
//  top:0px;
// }
.navigate--d1{
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 40px;
  width:100%;
.navigate__button1 {
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