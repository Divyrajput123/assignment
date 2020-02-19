<template>
  <main>
    <div class="container container--mod">
     <div class="container container--sub" v-for="item in Subjects" v-bind:key="item" >
       <input  type="checkbox" :value="item" @change="pushSkills($event)">
       <label class="contain" for="checkbox">{{item}}</label>
     </div>
    </div>


  </main>
</template>

<script>
export default {
 data:function(){
  return{ 
     
  }
 },
 props:['Subjects','Flag'],
 methods:{
     pushSkills(event){
     this.$emit('skillUpdate',event.target.value)
   }
 }
 }
</script>

<style scoped lang="scss">

.container--mod{
 max-width: 60%;
 display: flex;
 flex-wrap: wrap;
 margin-left: 30%;
 position: relative;
}
input{
  margin: 20px 16px;
}
input[type=checkbox]{
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid lightgray;
  border-radius: 50%;
  background: white;
  position: relative;
  outline: none;
  cursor:pointer;
  top: -1.6em;
}
input[type=checkbox]:checked{
  border: solid 2px orange;
  background-color: orange;
}
input[type=checkbox]:checked:before{
  content:"\2713";
  color: white;
  font-size: 16px;
  position: absolute;
  bottom: 0px;
  top: -3px;
  left: 0px;
  font-weight: bold;
 
}
.container--sub{
  display: flex;
  margin-right: 20px;
}


</style>