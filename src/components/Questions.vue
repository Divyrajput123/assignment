/* eslint-disable no-debugger */
<template>
  <main>
    <div class="container containermod">
      <div class="container container--questions">
        <div class="container container--q1" style="display:flex;width:100%">
          <li @click="question(0)" >1.Question#1</li>
          <span ><i   class="fas fa-check i1" ref="i1"></i></span>
        </div>
        <div class="container container--q1" style="display:flex;width:100%">
         <li @click="question(1)" >2.Question#2</li>
         <span ><i   class="fas fa-check i2"  ref="i2"></i></span>
        </div>
        <div class="container container--q1" style="display:flex;width:100%">
          <li @click="question(2)" >3.Question#3 </li>
          <span  ><i  class="fas fa-check i3"  ref="i3"></i></span>
        </div>
        <div class="container container--q1" style="display:flex;width:100%">
          <li @click="question(3)" >4.Question#4 </li>
          <span ><i   class="fas fa-check i4"  ref="i4"></i></span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props:['counter'],
data:function(){
  return{
    QuestionList:[],
    questions:[],
    answers:[],
    number:0,

  }
},
components:{
},
mounted:function(){
  document.querySelector(".i1").style.color ='orange';

},
methods:{
 question(e){
   this.number=e
   this.$store.count=e
   if(e==0)
   document.querySelector(".i1").style.color ='orange';
   else
   document.querySelector(".i1").style.color ='#ddd';
   if(e==1)
   document.querySelector(".i2").style.color ='orange';
   else
   document.querySelector(".i2").style.color ='#ddd';
   if(e==2)
   document.querySelector(".i3").style.color ='orange';
   else
   document.querySelector(".i3").style.color ='#ddd';
   if(e==3)
   document.querySelector(".i4").style.color ='orange';
   else
   document.querySelector(".i4").style.color ='#ddd';
  

   this.$emit('updateQues',e)
 },


},
computed:function(){
  console.log('computed')
 
},
  watch: {
    count(newCount) {
      console.log(`We have ${newCount} fruits now, yaay!`)
    },
    counter:function(e){
      if(e==0)
      document.querySelector(".i1").style.color ='orange';
      else
      document.querySelector(".i1").style.color ='#ddd';
      if(e==1)
      document.querySelector(".i2").style.color ='orange';
      else
      document.querySelector(".i2").style.color ='#ddd';
      if(e==2)
      document.querySelector(".i3").style.color ='orange';
      else
      document.querySelector(".i3").style.color ='#ddd';
      if(e==3)
      document.querySelector(".i4").style.color ='orange';
     else
     document.querySelector(".i4").style.color ='#ddd';
    }

  }



}
</script>

<style scoped lang="scss">


.container--questions {

li{
  list-style-type: none;
  margin-bottom: 10px;
  margin-right: 8px;
  
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


</style>