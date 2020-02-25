<template>
  <main>
    <div class="container container--mod">
     <div class="container container--sub" v-for="(item,index) in Subjects" v-bind:key="item" >
       <input  type="checkbox" :value="item.value" @change="pushSkills($event,index)" v-model="selections[item.index]" >
       <label class="contain" for="checkbox">{{item.value}}</label>
     </div>
    </div>


  </main>
</template>

<script>
export default {
 data:function(){
  return{ 
   selections:[],
   length:0  
  }
 },
 props:['Subjects'],
 methods:{
     pushSkills(event,index){
       localStorage.setItem('selections',JSON.stringify(this.selections))
       if(this.Subjects[index].Flag==false)
         this.Subjects[index].Flag=true
       else
         this.Subjects[index].Flag=false
         console.log( this.Subjects[index].Flag)


   }
 },
 mounted:function(){
   if(localStorage.getItem('done')>3){
  this.selections=JSON.parse(localStorage.getItem('selections')) 
  if(this.selections.length>0)
      for(var j=0;j<this.selections.length;j++){
      if(JSON.parse(this.selections[j]!==null && this.selections[j]!==false))
       this.length++
}
this.$emit('length',this.length)
   }
 }
 }
</script>

<style scoped lang="scss">

.container--mod{
 max-width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content:f;
 margin-left: 5%;
 margin-top: 10px;
//  position: relative;
}
input{
  margin: 20px 16px;
}
input[type=checkbox]{
  -webkit-appearance: none;
  width: 15px;
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
  width: 30%;
  
}


</style>