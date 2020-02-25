<template>
  <main>
    <div class="courses courses--select">
       <div class="courses courses--sidenav">
         <a @click="sendSkills(0,'ComputerScience')" :class="{act: active==0}">Computer Science</a>
         <a @click="sendSkills(1,'ComputerSoftware')" :class="{act: active==1}" >Computer Software</a>
         <a @click="sendSkills(2,'Engineering')" :class="{act: active==2}">Engineering</a>
         <a @click="sendSkills(3,'Language')" :class="{act: active==3}">Language</a>
         <a @click="sendSkills(4,'History')" :class="{act: active==4}">History</a>
        
       </div>
       <div class="subjects subject--select">
         <Skills @length="setLength($event)" @skillUpdate="updateSkill($event)" v-bind:Subjects="Subjects"  v-bind:FLag="Flag"></Skills>
       </div>
    </div>
    <div class="navigate navigate--button">
      <button @click="prev" class="navigate navigate__button1">&#8592; Prev</button>
      <button v-bind:style= "[disable ? {color:'grey'} : {backgroundcolor:'orange'}]" :disabled="disable" @click="nextPage" class="navigate navigate__button2">Next &#8594;</button>
    </div>
  </main>
</template>

<script>
import Skills from '../components/Skills.vue'
export default {
data:function(){
  return{
 
    Expertise:[{
      ComputerScience:[{index:0,Flag:false,value:'Computer Science'},{index:1,Flag:false,value:'LspProgramming'},{index:2,Flag:false,value:'NodeJS'},{index:3,Flag:false,value:'ExpressJS'},{index:4,Flag:false,value:'SQL'},{index:5,Flag:false,value:'C++'},{index:6,Flag:false,value:'Assembly Language'},{index:7,Flag:false,value:'Database'},{index:8,Flag:false,value:'MySQL'},{index:9,Flag:false,value:'AngualarJS'},{index:10,Flag:false,value:'Web Development'},{index:11,Flag:false,value:'CSS'},{index:12,Flag:false,value:'Heroku'},{index:13,Flag:false,value:'Engineering Graphics'},{index:14,Flag:false,value:'Autocad'},{index:15,Flag:false,value:'Artificial'},{index:16,Flag:false,value:'Neural Network'},{index:17,Flag:false,value:'VideoStreaming'}]
    },
    {
    ComputerSoftware:[{index:18,Flag:false,value:'Computer Science1'},{index:19,Flag:false,value:'LspProgramming1'},{index:20,Flag:false,value:'NodeJS1'},{index:21,Flag:false,value:'ExpressJS1'},{index:22,Flag:false,value:'SQL1'},{index:23,Flag:false,value:'C++1'},{index:24,Flag:false,value:'Assembly Language1'},{index:25,Flag:false,value:'Database1'},{index:26,Flag:false,value:'MySQL1'},{index:27,Flag:false,value:'AngualarJS1'},{index:28,Flag:false,value:'Web Development1'},{index:29,Flag:false,value:'CSS1'},{index:30,Flag:false,value:'Heroku1'},{index:31,Flag:false,value:'Engineering Graphics1'},{index:32,Flag:false,value:'Autocad1'},{index:33,Flag:false,value:'Artificial1'},{index:34,Flag:false,value:'Neural Network1'},{index:35,Flag:false,value:'VideoStreaming1'}]
    },
    {
      Engineering:[{index:36,Flag:false,value:'Computer Science2'},{index:37,Flag:false,value:'LspProgramming2'},{index:38,Flag:false,value:'NodeJS2'},{index:39,Flag:false,value:'ExpressJS2'},{index:40,Flag:false,value:'SQL2'},{index:41,Flag:false,value:'C++2'},{index:42,Flag:false,value:'Assembly Language2'},{index:43,Flag:false,value:'Database2'},{index:44,Flag:false,value:'MySQL2'},{index:45,Flag:false,value:'AngualarJS2'},{index:46,Flag:false,value:'Web Development2'},{index:47,Flag:false,value:'CSS2'},{index:48,Flag:false,value:'Heroku2'},{index:49,Flag:false,value:'Engineering Graphics2'},{index:50,Flag:false,value:'Autocad2'},{index:51,Flag:false,value:'Artificial2'},{index:52,Flag:false,value:'Neural Network2'},{index:53,Flag:false,value:'VideoStreaming2'}]
    },
    {
     Language:[{index:54,Flag:false,value:'Hindi'},{index:55,Flag:false,value:'English'},{index:56,Flag:false,value:'Tamil'},{index:57,Flag:false,value:'Telugu'},{index:58,Flag:false,value:'Kannad'}]
    },
    {
      History:[{index:59,Flag:false,value:'Sociology'},{index:60,Flag:false,value:'philosphy'},{index:61,Flag:false,value:'government'},{index:62,Flag:false,value:'economics'},{index:63,Flag:false,value:'politics'}]
    }

    
    ],
   
    Subjects:[],
    skills:[],
    count:0,
    active:0,
    length:0
   
   
  }
},
methods:{
  sendSkills(index,e){
    this.active=index
    console.log(e)
 this.Subjects=[]
    if(index==0){
    for(var i=0;i<this.Expertise[index].ComputerScience.length;i++)
    this.Subjects.push(this.Expertise[index].ComputerScience[i])
    }
    if(index==1){
    for(var j=0;j<this.Expertise[index].ComputerSoftware.length;j++)
    this.Subjects.push(this.Expertise[index].ComputerSoftware[j])
    }  
    if(index==2){
    for(var k=0;k<this.Expertise[index].Engineering.length;k++)
    this.Subjects.push(this.Expertise[index].Engineering[k])
    } 
    if(index==3){
    for(var l=0;l<this.Expertise[index].Language.length;l++)
    this.Subjects.push(this.Expertise[index].Language[l])
    } 
    if(index==4){
    for(var m=0;m<this.Expertise[index].History.length;m++)
    this.Subjects.push(this.Expertise[index].History[m])
    } 
  },
  setLength(value){
    this.length=value
  },

 
  nextPage(){
    window.console.log('I am called')
    localStorage.setItem('active',4)
    localStorage.setItem('done',4)
    this.$store.state.index=this.$store.state.counter++
    
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
},
computed:{
    disable(){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count=0
     console.log(this.count)
    for(var i=0;i<this.Expertise[0].ComputerScience.length;i++){
     if(this.Expertise[0].ComputerScience[i].Flag==true){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count++;
     }
    }
  for(var j=0;j<this.Expertise[1].ComputerSoftware.length;j++){
     if(this.Expertise[1].ComputerSoftware[j].Flag==true){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count++;
     }
    }
  for(var k=0;k<this.Expertise[2].Engineering.length;k++){
     if(this.Expertise[2].Engineering[k].Flag==true){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count++;
     }
    }
  for(var l=0;l<this.Expertise[3].Language.length;l++){
     if(this.Expertise[3].Language[l].Flag==true){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count++;
     }
    }
  for(var m=0;m<this.Expertise[4].History.length;m++){
     if(this.Expertise[4].History[m].Flag==true){
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count++;
     }
    }
    console.log(this.count)
    if(this.count>=3||this.length>=3)
    return false
    
    return true
    },

},
mounted:function(){
for(var i=0;i<this.Expertise[0].ComputerScience.length;i++)
this.Subjects.push(this.Expertise[0].ComputerScience[i])   
}
}
</script>

<style scoped lang="scss">
@import "../styles/my-styles.scss";
.courses--sidenav {
  max-width: 16%;
  min-width: 16%;
  position: relative;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
   .act {
  color: black;
  background-color:white;
  border-left:5px solid orange;
   }
}
.courses--sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  border:1px solid#dddddd;
  text-align: left;

}
.courses--sidenav a:hover {
  color: black;
  background-color:white;
  border-left:5px solid orange;
}

.navigate--button{
  position: absolute;
  // display: flex;
  // justify-content: space-between;
  bottom: 40px;
  width:100%;
  
.navigate__button1 {
  background-color: orange;
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
  color:white;
  float: left;
  margin-left: 14%;
    }
.navigate__button2{
  background-color: orange;
  border-radius: 12px;
  width: 76px;
  height: 25px;
  outline: none;
  color:white;
  float:right;
  margin-right: 14%;
}


    

}
.courses--select{
  display: flex;
  position: relative;
  bottom: 20px;
  margin-left: 11%;
  
}
.subject--select{
  width: 85%;
}
</style>