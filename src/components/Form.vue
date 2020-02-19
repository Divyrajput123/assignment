<template>
  <main>
    <div class="form form--container">
      <div v-for="(n, index) in placeholder.length" :key="index">
        <span v-if="type[index] !== 'radio'">
          <label>{{ label[index] }}</label>
          <input @input="flagchange($event,index)" @blur="validation($event,type[index],index)" @click="flagchange($event,index)" @change="flagchange($event,index)" v-on:keyup.delete="flagchange($event,index)" :type="type[index]" :placeholder="placeholder[index]">
          <p v-show="errors[index].Flag==false " style="color:red;font-size:12px">{{errors[index].message}}</p>
        </span>
        <span v-else>
          <label>{{ label[index].lab }}</label>
          <div class="form form--radio">  
            <input @click="flagchange($event,index)" @change="flagchange($event,index)" @blur="validation($event,type[index],index)" :type="type[index]" :name="label[index].lab" value="1"><span class="s">{{label[index].name1}}</span>
            <input @click="flagchange($event,index)" @change="flagchange($event,index)" @blur="validation($event,type[index],index)" :type="type[index]" :name="label[index].lab" value="2"><span class="s">{{label[index].name2}}</span>
          </div>
          <p v-show="errors[index].Flag==false" style="color:red;font-size:12px">{{errors[index].message}}</p>
        </span> 
      </div>
    </div>
    <div class="navigate--d1">
      <button :disabled="this.dataStore.length<8" @click="send" class="navigate--button1">Next</button>
    </div>
  </main>
</template>

<script>
export default {
props:['placeholder','type','label'],
data:function(){
  return{
    dataStore:[],
    value:'',
    typeOf:'',
    nam:'n1',
    errors:[{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':false,'message':'Field must be selected'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'}],
    emailValid:'The email format is incorrect'

  }
},
methods:{
  validation(event,typ,index){
  
    if(this.dataStore.indexOf(event.target.value)==-1 )
      this.dataStore[index]={'value':event.target.value,'type':typ}
    else
      this.dataStore.push({'value':event.target.value,'type':typ})
      window.console.log(event.target.value,index,this.dataStore.length)
  },
  send(){
    this.$emit('update', this.dataStore)
    this.$store.state.index=this.$store.state.index++
    localStorage.setItem('done',)
  },
  flagchange(event,index){
    window.console.log(event.target.value)
    if(event.target.value!=='')
      this.errors[index].Flag=true
    else if(event.target.value=='')
      this.errors[index].Flag=false

  }
}
}
</script>

<style scoped lang="scss">
   .form--container{
    position: relative;
    max-width: 500px;
    margin:auto;
}
    input{
      margin: 8px;
    }
    label{
      position: absolute;
      right:80%;
      margin: 8px;
      font-size: 14px;
}
   .s{
        font-size: 8px;
     }

    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
@import "../styles/my-styles.scss";
    .d1{
        position: absolute;
        display: flex;
        justify-content: space-between;
        bottom: 40px;
        width:100%;
  

    }
button{
     outline: none;
 }
 .navigate--d1{

  display: flex;
  justify-content:flex-end;
  bottom: 40px;
  width:100%;
  .navigate--button1{
  background-color: orange;
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
  margin-right: 90px;
  }
 }
</style>