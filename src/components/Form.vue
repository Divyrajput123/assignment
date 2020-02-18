<template>
  <main>
  
    <div class="form container">
      <div v-for="(n, index) in placeholder.length" :key="index">
        <span v-if="type[index] !== 'radio'">
          <label>{{ label[index] }}</label>
          <input @blur="validation($event,type[index])"  :type="type[index]" :placeholder="placeholder[index]">
        </span>
        <span v-else>
          <label>{{ label[index].lab }}</label>
          <div class="radio">  
            <input @blur="validation($event,type[index])" :type="type[index]" :name="label[index].lab" value="1"><span class="s">{{label[index].name1}}</span>
            <input @blur="validation($event,type[index])" :type="type[index]" :name="label[index].lab" value="2"><span class="s">{{label[index].name2}}</span>
          </div>
        </span> 
      </div>
    </div>
    <div class="d1">
      <button @click="$emit('update', dataStore)">Next</button>
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
    nam:'n1'
  }
},
methods:{
  validation(event,typ){
    window.console.log(event.target.value)
    this.dataStore.push({'value':event.target.value,'type':typ})
    
  }
}
}
</script>

<style scoped lang="scss">
.container{
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
      @include CommonButton;
      justify-content:flex-end;
  

    }
button{
     outline: none;
 }
</style>