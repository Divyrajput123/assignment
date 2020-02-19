<template>
  <main>
    <div class="about">
     <label>About You</label><textarea @input="flagchange($event,0)" @change="flagchange($event,0)" @blur="flagchange($event,0)"  v-on:keyup.delete="flagchange($event,0)" v-model="t1"  placeholder="Write a short bio" cols="35" rows="3"></textarea>
    <p v-if="errors[0].Flag==false" style="color:red;margin-left:19%">{{errors[0].message}}</p>
    </div>
    <div class="teach">
     <label>Teaching Experience</label><textarea @input="flagchange($event,1)" @change="flagchange($event,1)" v-on:keyup.delete="flagchange($event,1)" @blur="send" v-model="t2"  placeholder="Tell us about your teaching Experience" cols="35" rows="3"></textarea>
     <p v-if="errors[1].Flag==false" style="color:red;margin-left:26%">{{errors[1].message}}</p>
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
        if(newVal.length>30){
        window.alert('maxm length exceeded')
        window.console.log(old)
        }
      },
      t2(newVal,old){
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
 .about{
   text-align: left;
   margin-left: 30.4%;
   margin-bottom: 1%;
 }
 .teach{
   text-align:left;
   margin-left: 24%;
   margin-bottom: 1%;
 }
 textarea{
   resize:none;
  
 }
 label{
   margin-right: 4%;
 }
</style>