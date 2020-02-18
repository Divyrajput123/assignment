<template>
  <main>
    <progressbar></progressbar><br>
    <auto-textarea @textUpdate="texts($event)" v-model="inputValue" v-bind:placeholder="placeholder" v-bind:label="label"></auto-textarea>
    <WorkHistory @updatework="validation($event)" v-bind:work="work" class="w"></WorkHistory>
    <a @click="pushAttributes" v-if="active" >+Add another job</a>
    <Education @updateEdu="Education($event)" v-bind:school="school"></Education>
    <a @click="pushSchool" v-if="active1">+Add another School</a>
    <div class="d1">
      <button @click="$router.push('/sample')"> Prev</button>
      <button :disabled="Flag==false" @click="nextPage">Next</button>
    </div>
    
  </main>
</template>

<script>
import AutoTextarea from '../components/AutoTextarea.vue'
import WorkHistory from '../components/WorkHistory.vue'
import Progressbar from '../components/Progressbar.vue'
import Education from '../components/Education.vue'

export default {
components:{
  AutoTextarea,WorkHistory,Progressbar,Education
},
data () {
      return {
        inputValue: '',
        placeholder:['Write a short bio','Tell us about your teaching experience'],
        label:['About You','Teaching Experience'],
        work:[],
        school:[],
        workHistory:[],
        active:false,
        active1:false,
        EduHistory:[],
        Flag:false,
        text:[]


      }
      
    },
    methods:{
pushAttributes(){
  this.work.push({
    company:""
    
  }
  )
  this.active=false
},
pushSchool(){
  this.work.push({
    School:""
    
  })
  this.active1=true
  
},
validation(value){
this.workHistory=value
window.console.log('validation',this.workHistory.length)
// for(var i=0;i<this.workHistory.length;i++){
 
//   if(this.workHistory[i].company!==' ' && this.workHistory[i].ActiveFrom!==' ' && this.workHistory[i].ActiveTo!==' ')
//   {
//     this.active=true;
//     this.workHistory=[]
//   }
//   else{
//   this.active=false
//   this.workHistory=[]
//   this.Flag=false
//   }
// }
if(this.workHistory.length==0)
this.Flag=false

},
Education(value){
  this.EduHistory=value
  window.console.log('Education called',this.EduHistory.length)
// for(var i=0;i<this.EduHistory.length;i++){
//   if(this.EduHistory[i].school!==' ' && this.EduHistory[i].ActiveFrom!==' ' && this.EduHistory[i].ActiveTo!==' ')
//   {
//     this.active1=true;
//     this.EduHistory=[]
//   }
//   else
//   {
//   this.active1=false
//   this.EduHistory=[]
//   this.Flag=false
//   }
// }
if(this.EduHistory.length==0)
this.Flag=false
if(this.text.length==2 && this.EduHistory.length>0 && this.workHistory.length>0)
  this.Flag=true
},
nextPage(){
  window.console.log(this.text.length)
  if(this.Flag){
    // window.console.log(this.text.length)
    localStorage.setItem('active',3)
  this.$router.push('/expertise')
  }
  else
  this.Flag=false
},
texts(value){
this.text=value
window.console.log('text called',this.text.length)
if(this.text.length!==2){
  window.console.log('text called',this.text.length)
this.Flag=false

}

}

    },


}
</script>

<style scoped lang="scss">
@import "../styles/my-styles.scss";
  * {
    box-sizing: border-box;
  }
 .d1{
  @include CommonButton;
  justify-content: space-between;
 }
 
 a{
   font-size: 12px; 
 }
</style>