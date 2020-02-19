<template>
  <main>
    <auto-textarea @textUpdate="texts($event)" v-model="inputValue" v-bind:placeholder="placeholder" v-bind:label="label"></auto-textarea>
    <WorkHistory @updatework="validation($event)" v-bind:work="work" class="w"></WorkHistory>
    <a @click="pushAttributes" v-if="active" >+Add another job</a>
    <Education @updateEdu="Education($event)" v-bind:school="school"></Education>
    <a @click="pushSchool" v-if="active1">+Add another School</a>
    <div class="d1">
      <button @click="prev"> Prev</button>
      <button :disabled="Flag==false" @click="nextPage">Next</button>
    </div>
    
  </main>
</template>

<script>
import AutoTextarea from '../components/AutoTextarea.vue'
import WorkHistory from '../components/WorkHistory.vue'
// import Progressbar from '../components/Progressbar.vue'
import Education from '../components/Education.vue'

export default {
components:{
  AutoTextarea,WorkHistory,Education
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
if(this.workHistory.length==0)
  this.Flag=false
else
  this.active=true

},
Education(value){
  this.EduHistory=value
  window.console.log('Education called',this.EduHistory.length)
if(this.EduHistory.length==0)
  this.Flag=false
if(this.text.length==2 && this.EduHistory.length>0 && this.workHistory.length>0)
  this.Flag=true
  this.active1=true
},
nextPage(){
  window.console.log(this.text.length)
  if(this.Flag){
    localStorage.setItem('active',3)
    localStorage.setItem('done',3)
    this.$router.push('/expertise')
    this.$store.state.index=this.$store.state.counter++
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

},
prev(){
  localStorage.setItem('active',1)
  this.$store.state.index=this.$store.state.counter++
  this.$router.push('/sample')
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