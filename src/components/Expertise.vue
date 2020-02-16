<template>
  <main>
    
    <div class="d">
   <div class="sidenav">
     <a @click="computerScience">Computer Science</a>
     <a @click="computerSoftware">Computer Software</a>
     <a @click="engineering">Engineering</a>
     <a @click="language">Language</a>
   </div>
   <div class="subjects">
    <Skills v-bind:Subjects="Subjects"  v-bind:FLag="Flag"></Skills>
   </div>
    </div>
   <div class="d1">
      <button @click="$router.push('/profile')"> Prev</button>
      <button @click="nextPage">Next</button>
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
    Flag:0
  }
},
methods:{
  computerScience(){
    this.Flag=0
    this.Subjects=[]
    for(var i=0;i<this.ComputerScience.length;i++)
    this.Subjects.push(this.ComputerScience[i])
  },
  computerSoftware(){
   this.Flag=1
   this.Subjects=[]
   for(var i=0;i<this.ComputerSoftware.length;i++)
    this.Subjects.push(this.ComputerSoftware[i])
  },
  engineering(){
    this.Flag=2
    this.Subjects=[]
    for(var i=0;i<this.Engineering.length;i++)
    this.Subjects.push(this.Engineering[i])
  },
  language(){
    this.Flag=3
    this.Subjects=[]
    for(var i=0;i<this.Language.length;i++)
    this.Subjects.push(this.Language[i])
  },
  nextPage(){
    localStorage.setItem('done',3)
    this.$router.push('/interview')
  }
},
components:{
Skills
}
}
</script>

<style scoped lang="scss">
@import "../styles/my-styles.scss";
.sidenav {
  height: 100%;
  width: 25%;
  position: relative;
  z-index: 1;
 
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  border:1px solid#ddd;
}
.sidenav a:hover {
  color: black;
  background-color:white;
  border-left:5px solid orange;
}
/* @media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
} */
/* .subjects{
display: flex;
flex-wrap: wrap;
margin: auto




} */
// main{
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
// }
a:active{
  color: black;
  background-color:white;
  border-left:5px solid orange;  
}
.d1{ 
   position: absolute;
   display:flex;
  @include CommonButton;
   justify-content: space-around;
   width: 90%;
   bottom: 40px;
}
.d{
  display: flex;
  position: relative;
  bottom: 20px;
  
}
</style>