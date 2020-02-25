<template>
  <main class="main">
    <div class="text text--mod">
      <div class="text text--text1">
         <label>About You</label>
         <textarea @change="flagChange($event,0)" @input="flagChange($event,0)" v-model="t1" v-on:keyup.delete="flagChange($event,0)" cols="38" rows="4"></textarea>
      </div>
      <p v-show="error1[0].Flag">{{error1[0].message}}</p>
    <div class="text text--text2">
      <label>Teaching Experience</label>
      <textarea v-on:keyup.delete="flagChange($event,1)" @change="flagChange($event,1)" @input="flagChange($event,1)" v-model="t2" cols="38" rows="4"></textarea>
    </div>
    <p v-show="error1[1].Flag">{{error1[1].message}}</p>
    </div>
    <!-- <div class="work work--mod"> -->
      <WorkProfile v-bind:error2="error2"></WorkProfile>
      <a @click="pushAttributes(0)"  >+Add another job</a>
    <!-- </div> -->
    <!-- <div class="edu edu--mod"> -->
      <EduProfile v-bind:error3="error3"></EduProfile>
      <a @click="pushAttributes(1)"  >+Add another school</a>
    <!-- </div> -->
    <div class="navigate navigate--d1">
      <button @click="prev" class="navigate navigate__button1">&#8592; Prev </button>
      <button :disabled="disable" @click="nextPage" class="navigate navigate__button2">Next &#8594;</button>
    </div>
  </main>
</template>

<script>
import WorkProfile from '../components/workprofile.vue'
import EduProfile from '../components/eduprofile.vue'

export default {
  data:function(){
    return{
      error1:[{Flag:false,message:'Field is empty',value:''},{Flag:false,message:'Field is empty',value:''}],
      error2:[{Company:'',ActiveFrom:'',ActiveTo:'',Flag:false,message:'field cannot be empty'}],
      error3:[{School:'',Enrolled:'',Graduated:'',Flag:false,message:'field cannot be empty'}],
      Flag:true,
      bool1:false,
      bool2:false,
      bool3:false,
     

    }
  },
  components:{
   WorkProfile,EduProfile
  },
  methods:{
    flagChange(event,index){
      if(index==0)
      {  this.error1[index].value=event.target.value
        if(event.target.value=='')
         this.error1[index].Flag=true
        else{
         this.error1[index].Flag=false
         
        }

      }
      else
      { this.error1[index].value=event.target.value
        if(event.target.value=='')
         this.error1[index].Flag=true
        else
         this.error1[index].Flag=false

      }
      this.$watch
    },
    pushAttributes(index){
      if(index==0)
      this.error2.push({Company:'',ActiveFrom:'',ActiveTo:'',Flag:false,message:'field cannot be empty'})
      if(index==1)
      this.error3.push({School:'',Enrolled:'',Graduated:'',Flag:false,message:'field cannot be empty'})
    },
   prev(){
     localStorage.setItem('active',1)
     this.$store.state.index=this.$store.state.counter++
     this.$router.push('/')
},
   nextPage(){
   
    localStorage.setItem('active',3)
    localStorage.setItem('done',3)
    this.$router.push('/expertise')
    this.$store.state.index=this.$store.state.counter++
  
}
  },
  
created:function(){
  if(localStorage.getItem('done')<=1)
  this.$router.push('/error')
  localStorage.setItem('active',2)
  this.$store.state.index=this.$store.state.counter++
}
,mounted:function(){
  this.bool1=false
  this.bool2=false
  this.bool3=false
},
computed:{
  disable(){
  for(var i=0;i<this.error1.length;i++)
      { console.log('disable1')
        if(this.error1[i].value=='')
         return true

      }
      for(var j=0;j<this.error2.length;j++)
      { console.log('disable2')
        if(this.error2[j].ActiveFrom==''||this.error2[j].ActiveTo==''||this.error2[j].Company=='')
           return true
      }
     for(var k=0;k<this.error3.length;k++)
      {

        console.log('disable3')
        if(this.error3[k].School==''||this.error3[k].Enrolled==''||this.error3[k].Graduated=='')
         return true
      }
    return false
  }
}
}
</script>

<style scoped lang="scss">
a{
  margin-left:-70px;
  font-size:12px;
}
main{
  p{
    color:red;
    font-size: 12px;
  }
  // a{
  //  font-size: 12px;
  //  text-align: left; 
   
  // }
  .work--mod{

  }
 .edu--mod{

 }
  .text--mod{
   margin-left: 27%;
    textarea{
      resize: none;
    }
   .text--text1{
     display: flex;
     margin-bottom: 3%;
     margin-left: 9%;
     label{
     margin-right: 18px;
     }
   }
   .text--text2{ 
     display: flex; 
     margin-bottom: 3%;
     label{
     margin-right: 20px;
     }
   }
  // .anchor--mod_el{
  //  margin-left:-70px;
  // }
  }
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
  background-color:orange;
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