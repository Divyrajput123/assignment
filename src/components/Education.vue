<template>
  <main>
    <div class="Edu Edu--container">
      <div class="Edu Edu--mod">
        <div class="Edu Edu--a1">
          <label>Education</label>
          <input @blur="setSchool($event)" type="text" placeholder="School"><br>
        </div>
        <div class="Edu Edu--a2">
           <select @change="saveYear($event)" >
           <option value="0">Enrolled</option>
           <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
           </select>
           <select @change="setActiveTo" @blur="send">
           <option value="0">Graduated</option>
           <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
           </select>
        </div>
      </div>
    <div class="Edu Edu--mod" v-for="(n,index) in school.length" v-bind:key="index">
      <div class="Edu Edu--a1">
        <label>Education</label>
        <input type="text" placeholder="School"><br>
      </div>
      <div class="Edu Edu--a2">
       <select @change="saveYear($event)" >
         <option value="0">Enrolled</option>
         <option v-for="year in years" :value="year" v-bind:key="year" >{{ year }}</option>
       </select>
      
       <select @change="setActiveTo" @blur="send">
         <option value="0">Graduated</option>
         <option v-for="Activetoyear in Activetoyears" :value="Activetoyear" v-bind:key="Activetoyear">{{Activetoyear }}</option>
       </select>
      </div>
    </div>
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

  .Edu--container{
    margin-left: 2%;
    width:100%;
  .Edu--mod{
    width: 37%;
    margin-left: 23%;
    label{
      width:20%;
    }
    input{
      width:80%;
    }
    .Edu--a1{
      display: flex;
      margin-bottom: 2%;
      label{
        margin-right: 6%;
        margin-left: 17%
      }
    }
    .Edu--a2{
      display:flex;
      width: 60%;
      margin-left: 40%;
      margin-bottom: 2%;
      justify-content: space-between;
      select{
      height: 20px;
      }
    }
  }
  .Edu--i1{
   height: 10%;
   width: 2%;
  }
  }
</style>