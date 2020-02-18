<template>
  <main>
    <div>
      <label>WorkHistory</label><input @blur="setCompany($event)" type="text" placeholder="Company"><br>
    <select @change="saveYear($event)" >
      <option value="0">Active From</option>
      <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
    </select>
    <select @change="setActiveTo" @blur="send">
      <option value="0">Active to</option>
      <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
    </select>
    </div>
    <div v-for="(n,index) in work.length" v-bind:key="index">
    <label>WorkHistory</label><input type="text" placeholder="Company"><br>
    <select @change="saveYear($event)" >
      <option value="0">Active From</option>
      <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
    </select>
    <select @change="setActiveTo" @blur="send">
      <option value="0">Active to</option>
      <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
    </select>
    </div>
  </main>
</template>

<script>

export default {
props:['work'],
data:function(){
  return{
    year:0,
    company:'',
    ActiveFrom:0,
    ActiveTo:0,
    workHistory:[]
  }
},
computed:{
   years() {
      const year1 = new Date().getFullYear()
      return Array.from({length: year1 - 1900}, (value, index) => 1901 + index)
    },
     Activetoyears() {
      const year1 = new Date().getFullYear()
      return Array.from({length: year1 - 1900}, (value, index) =>  this.year+1 + index)
    }
},
methods:{
  saveYear(event){
   
    this.year=parseInt(event.target.value) ;
   
  },
  setCompany(event){
    this.company=event.target.value;
    window.console.log(event)
  },
  setActiveTo(event){
    window.console.log(this.ActiveFrom)
    this.ActiveTo=event.target.value
    if(this.ActiveTo!==0  && this.year!==0){
   
    this.workHistory.push({'company':this.company,'ActiveFrom':this.year,'ActiveTo':this.ActiveTo})
  }
  },
  send(){
   this.$emit('updatework', this.workHistory)
   this.workHistory=[]
  }
}
}
</script>

<style scoped lang="scss">
@import "../styles/my-styles.scss";
main{
   @include EduPro;
}
</style>