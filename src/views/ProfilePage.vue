<template>
  <main>
    <progressbar></progressbar><br>
    <auto-textarea v-model="inputValue" v-bind:placeholder="placeholder" v-bind:label="label"></auto-textarea>
    <WorkHistory @updatework="validation($event)" v-bind:work="work" class="w"></WorkHistory>
    <a @click="pushAttributes" v-if="active" >+Add another job</a>
    <Education @updateEdu="Education($event)" v-bind:school="school"></Education>
    <a @click="pushSchool" v-if="active1">+Add another School</a>
    <div class="d1">
      <button @click="$router.push('/sample')"> Prev</button>
      <button>Next</button>
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
        EduHistory:[]


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
  this.active1=false
  
},
validation(value){
this.workHistory=value
for(var i=0;i<this.workHistory.length;i++){
  if(this.workHistory[i].company!==' ' && this.workHistory[i].ActiveFrom!==' ' && this.workHistory[i].ActiveTo!==' ')
  {
    this.active=true;
    this.workHistory=[]
  }
  else
  this.active=false
  this.workHistory=[]
  
}

},
Education(value){
  this.EduHistory=value
for(var i=0;i<this.EduHistory.length;i++){
  if(this.EduHistory[i].school!==' ' && this.EduHistory[i].ActiveFrom!==' ' && this.EduHistory[i].ActiveTo!==' ')
  {
    this.active1=true;
    this.EduHistory=[]
  }
  else
  this.active1=false
  this.EduHistory=[]
  
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