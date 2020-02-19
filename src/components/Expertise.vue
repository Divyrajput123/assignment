<template>
  <main>
    <div class="courses courses--select">
       <div class="courses courses--sidenav">
         <a @click="computerScience" >Computer Science</a>
         <a @click="computerSoftware" >Computer Software</a>
         <a @click="engineering" >Engineering</a>
         <a @click="language" >Language</a>
       </div>
       <div class="subjects subject--select">
         <Skills @skillUpdate="updateSkill($event)" v-bind:Subjects="Subjects"  v-bind:FLag="Flag"></Skills>
       </div>
    </div>
    <div class="navigate navigate--button">
      <button @click="prev"> Prev</button>
      <button :disabled="skills.length<=0" @click="nextPage">Next</button>
    </div>
  </main>
</template>

<script>
import Skills from '../components/Skills.vue'
export default {
data:function(){
  return{
    ComputerScience:['Computer Science','LspProgramming','NodeJS','ExpressJS','SQL','C++','Assembly Language','Database','MySQL','AngualarJS','Web Development','CSS','Heroku'],
    ComputerSoftware:['Computer Science','LspProgramming','NodeJS','Java','Machine Learning','HTML5','IOS programming'],
    Engineering:['NodeJS','ExpressJS','SQL','C++','Assembly Language','Database','MySQL','AngualarJS','Web Development','CSS','Heroku'],
    Language:['Hindi','English','Tamil','Telugu','Kannad'],
    Subjects:[],
    Flag:0,
    skills:[],
    act:0
  }
},
methods:{
  computerScience(){
    this.act=1
    this.Flag=0
    this.Subjects=[]
    for(var i=0;i<this.ComputerScience.length;i++)
    this.Subjects.push(this.ComputerScience[i])
  },
  computerSoftware(){
    this.act=2
   this.Flag=1
   this.Subjects=[]
   for(var i=0;i<this.ComputerSoftware.length;i++)
    this.Subjects.push(this.ComputerSoftware[i])
  },
  engineering(){
    this.act=3
    this.Flag=2
    this.Subjects=[]
    for(var i=0;i<this.Engineering.length;i++)
    this.Subjects.push(this.Engineering[i])
  },
  language(){
    this.act=4
    this.Flag=3
    this.Subjects=[]
    for(var i=0;i<this.Language.length;i++)
    this.Subjects.push(this.Language[i])
  },
  nextPage(){
    localStorage.setItem('done',4)
    localStorage.setItem('active',4)
     this.$store.index=this.$store.state.counter++
    this.$router.push('/interview')
   
  },
  updateSkill(value){
    this.skills.push(value)
  },
  prev(){
    localStorage.setItem('active',2)
     this.$store.state.index=this.$store.state.counter++
    this.$router.push('/profile')
   
  }
},
components:{
Skills
}
}
</script>

<style scoped lang="scss">
@import "../styles/my-styles.scss";
.courses--sidenav {
  width: 25%;
  position: relative;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.courses--sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  border:1px solid#ddd;
}
.courses--sidenav a:hover {
  color: black;
  background-color:white;
  border-left:5px solid orange;
}
// .sidenav a:active {
//   color: black;
//   background-color:white;
//   border-left:5px solid orange;  
// }
.navigate--button{ 
   position: absolute;
   display:flex;
  @include CommonButton;
   justify-content: space-around;
   width: 90%;
   bottom: 40px;
}
.courses--select{
  display: flex;
  position: relative;
  bottom: 20px;
  
}
</style>