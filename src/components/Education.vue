<template>
  <main>
   <div>
      <label>Education</label><input @blur="setSchool($event)" type="text" placeholder="School"><br>
      <select @change="saveYear($event)" >
        <option value="0">Enrolled</option>
        <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
      </select>
     <select @change="setActiveTo" @blur="send">
      <option value="0">Graduated</option>
      <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
     </select>
  </div>
    <div v-for="(n,index) in school.length" v-bind:key="index">
      <label>Education</label><input type="text" placeholder="School"><br>
      <select @change="saveYear($event)" >
        <option value="0">Enrolled</option>
        <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
      </select>
     <select @change="setActiveTo" @blur="send">
       <option value="0">Graduated</option>
       <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
     </select>
    </div>
  </main>
</template>

<script>
export default {
props:['school'],
data:function(){
  return{
    year:0,
    School:'',
    EduHistory:[],
    ActiveFrom:0,
    ActiveTo:0,
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
  setSchool(event){
    this.School=event.target.value;
    window.console.log(event)
  },
  setActiveTo(event){
     this.ActiveTo=event.target.value
    if(this.ActiveTo!==0 && this.year!==0){
    this.EduHistory.push({'school':this.School,'ActiveFrom':this.year,'ActiveTo':this.ActiveTo})
  }
  },
  send(){
   this.$emit('updateEdu', this.EduHistory)
   this.EduHistory=[]
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