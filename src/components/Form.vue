<template>
  <main>
    <div class="form form--container">
      <div  v-for="(n, index) in placeholder.length" :key="index">
        <div class="form form--rad" v-if="type[index] !== 'radio' && type[index] !== 'date'" >
          <label>{{ label[index] }}</label>
          <input @input="flagchange($event,index)" v-model="Answers[index]" @change="flagchange($event,index)" v-on:keyup.delete="flagchange($event,index)" :type="type[index]" :placeholder="placeholder[index]" >
          <p v-show="errors[index].Flag==false " style="color:red;font-size:12px">{{errors[index].message}}</p>
        </div>
        <div class="form form--rad" v-else-if="type[index]=='date'" >
         <label>{{ label[index] }}</label>
         <select @input="flagchange($event,index)" @change="flagchange($event,index)" v-model="Answers[index]" >
          <option value="0">2015</option>
          <option v-for="year in years" :value="year" v-bind:key="year"  >{{ year }}</option>
         </select>
          <p v-show="errors[index].Flag==false " style="color:red;font-size:12px">{{errors[index].message}}</p>
        </div> 
        <div class="form form--rad" v-else> 
          <div class="form form--contain">
           <label class="form form--l1" >{{ label[index].lab }}</label>
           <div class="form form--de">
            <input v-model="Answers[index]" class="form form--i1" @click="flagchange($event,index)" @change="flagchange($event,index)"  :type="type[index]" :name="label[index].lab" value="1">
            <label class="form form--l2">{{label[index].name1}}</label>
           </div>
           <div class="form form--dena">
            <input v-model="Answers[index]" class="form form--i2" @click="flagchange($event,index)" @change="flagchange($event,index)"  :type="type[index]" :name="label[index].lab" value="2">
            <label class="form form--l3">{{label[index].name2}}</label>
           </div>
          </div>
            <p v-show="errors[index].Flag==false" style="color:red;font-size:12px">{{errors[index].message}}</p>
        </div>
          
      </div>
    </div>
    <div class="navigate--d1">
      <button v-bind:style= "[!disabled ? {color:'grey'} : {backgroundcolor:'orange'}]" id="mybtn" :disabled="!disabled" @click="nextPage" class="navigate--button1">Next -></button>
    </div>
  </main>
</template>

<script>
export default {
props:['placeholder','type','label'],
data:function(){
  return{
    value:'',
    typeOf:'',
    nam:'n1',
    errors:[{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field must be selected'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'}],
    bool:true,
    flag:false,
    Answers:[],
    year:0

  }
},
methods:{
  flagchange(event,index){
    if(index==5)
    this.year=parseInt(event.target.value);
    if(index==1 && event.target.value.length!==0)
    {
       const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(event.target.value)==false)
       {
         this.errors[index].message='Email format is incorrect'
         this.errors[index].Flag=false

       }
       else{
         this.errors[index].message='Field cant be empty'
         this.errors[index].Flag=true
         this.bool = true
       }
    }
    else if(index==7)
      {
        if(event.target.value.length===10 )
          {  this.errors[index].message='Field cant be empty'
             this.errors[index].Flag=true
             this.bool = true
          }
        else{
          this.errors[index].message='incorrect mobile no'
          this.errors[index].Flag=false
       }
       
      }
else{
  if(event.target.value.length==0){
    this.errors[index].Flag=false
    this.errors[index].message='Field cant be empty'
  }
  else {
    this.bool = true
    this.errors[index].Flag=true

  }
  }
  // else
  //  this.errors[index].Flag=true
  this.$watch.handler
  
  },
  nextPage()
  { localStorage.setItem('active',2)
    localStorage.setItem('done',2)
    localStorage.setItem('Answers',JSON.stringify(this.Answers))
    // eslint-disable-next-line no-debugger
    debugger
    this.$store.state.index=this.$store.state.counter++;
    this.$router.push('/profile')
  }
},

watch:{
  errors:{
    handler:function(val,old){
      
     for(var i=0;i<8;i++)
     {  window.console.log('error',this.errors[i].Flag)
       if(this.errors[i].Flag==false){
        this.bool=false
       }

     }
     
     if(this.bool==false){
      this.flag=false
     }
     else{
      this.flag=true
     }
window.console.log('hello',old,this.flag)
  },
  deep: true
  }
},
computed:{
  disabled () {

    if(this.Answers.length==0){

      return false
    }
    if(localStorage.getItem('done')==2)
    return true
    for(var i=0;i<8;i++)
    {
      if(this.Answers[i]==' ')
      return false
    }
    window.console.log('')
    return this.flag    
    },
   years() {
     
      const year1 = new Date().getFullYear()
      return Array.from({length: year1 - 2015}, (value, index) => year1 + index)
    }

  

},
mounted:function(){
  if(JSON.parse(localStorage.getItem('Answers')).length>0)
  this.Answers=JSON.parse(localStorage.getItem('Answers'))


}
}
</script>

<style scoped lang="scss">
   .form--container{
    position: relative;
    max-width: 500px;
    margin-left:22%;

}
    input{
      // margin: 8px;
      width: 60%;
      height:18px;
      
      
    }
    label{
      // position: absolute;
      // right:80%;
      // margin: 8px;
      // font-size: 14px;
      width: 20%;
      word-wrap:normal;
  
}

    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        // top: -1px;
        // left: -1px;
        // position: relative;
        background-color: white;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 1px solid #d1d3d1;
       
   
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        // top: -1px;
        // left: -1px;
        // position: relative;
        background-image:radial-gradient(circle,orange 50%,white 20%);
        content: '';
        display: inline-block;
        visibility: visible;
        border: 1px solid grey;
    }
@import "../styles/my-styles.scss";

button{
     outline: none;
 }
 .navigate--d1{
  position: absolute;
  // display: flex;
  // justify-content:flex-end;
  bottom: 40px;
  width:100%;
  .navigate--button1{
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
 .form--rad{
   text-align: right;
   margin-bottom: 6px;
   min-height: 37px;
   max-height: 37px;
   p{
     margin-top: 0px;
   }
  select{
    width:61.5%;
    height:22px;
    border-radius: 0px;
    outline: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0px; 
   }
  label{
    margin-right: 23px;
    font-size: 14px;
   }
  .form--contain{
    display: flex;
    justify-content: space-around;
    margin-left: 18px;
  .form--l1{
    width: 34%;
  }
  .form--de{
    width: 33%;
    display: flex;
    text-align: left;
   .form--i1{
    width: 18%;
  }
   .form--l2{
    width: 82%;
    margin-right:0%;
  }

  }
 .form--dena{
    width: 33%;
    display: flex;
    text-align: left;
    .form--i2{
    width: 18%;
  }
   .form--l3{
    width: 82%;
    margin-right:0%;
  }
  }
   }


 }
</style>