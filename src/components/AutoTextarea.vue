<template>
  <main>
    <div class="about about--container">
      <div class="about about--youcontainer">
       <div class="about about--you">
         <label>About You</label>
         <textarea @input="flagchange($event,0)" @change="flagchange($event,0)" @blur="flagchange($event,0)"  v-on:keyup.delete="flagchange($event,0)" v-model="t1"  placeholder="Write a short bio" cols="38" rows="4"></textarea>
       </div>
       <p v-show="errors[0].Flag==false" style="color:red;">{{errors[0].message}}</p>
      </div>
      <div class="about about--youcontainer">
       <div class="about about--teach">
         <label>Teaching Experience</label>
         <textarea @input="flagchange($event,1)" @change="flagchange($event,1)" v-on:keyup.delete="flagchange($event,1)" @blur="send" v-model="t2"  placeholder="Tell us about your teaching Experience" cols="38" rows="4"></textarea>
       </div>
       <p v-show="errors[1].Flag==false" style="color:red;">{{errors[1].message}}</p>
      </div>
    </div>
  <!-- </div> -->
  </main>
</template>

<script>
  export default {
      name: "ResizeByClass",
    props:['placeholder','label'],
  
    data () {
      return {
        t1:'',
        t2:'',
        text:[],
        errors:[{'Flag':true,'message':'Field cant be empty'},{'Flag':true,'message':'Field cant be empty'}]
      }
    },
    watch:{
      t1(newVal,old){
        localStorage.setItem('t1',this.t1)
        if(newVal.length>30){
        window.alert('maxm length exceeded')
        window.console.log(old)
        }
      },
      t2(newVal,old){
        localStorage.setItem('t2',this.t2)
        if(newVal.length>30){
        window.alert('maxm length exceeded')
        window.console.log(old)
        }
      }
    },
    methods:{
    send(){
      if(this.t1!=='')
      this.text.push(this.t1)
      if(this.t2!=='')
      this.text.push(this.t2)
      this.$emit('textUpdate',this.text)
    },
    flagchange(event,index){
    if(event.target.value!=='')
    this.errors[index].Flag=true
    else if(event.target.value=='')
    this.errors[index].Flag=false
      
    }
    }
  }
</script>

<style scoped lang="scss">
.about--container{
  margin-left: 32%;
  margin-bottom: 1%;
   .about--youcontainer{
    max-height: 82px;
    min-height: 82px;
  p{
    text-align:left;
    margin-left: 30%;
    font-size: 12px;
    margin-top: 0px;


  }
.about--you{
  display:flex;
  margin-bottom: 1%;
 
  label{
  margin-right: 2%;  
   }
 }
   }
.about--youcontainer{
max-height: 82px;
min-height: 82px;
.about--teach{
  display:flex;
  margin-bottom: 1%;
  margin-left: -9.7%;
  label{
  margin-right: 2%;
 } 
 }
}
 textarea{
  resize:none;
 }

}
</style>