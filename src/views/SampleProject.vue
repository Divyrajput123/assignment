
<template>
  <main>
    <!-- <progressbar></progressbar> -->
    <Form  v-bind:placeholder="placeholder" v-bind:label="label" v-bind:type="type" v-bind:errors="errors"></Form>
  </main>
</template>

<script>
import Form from '../components/Form.vue'
// import Progressbar from '../components/Progressbar.vue'
export default {
  data(){
    return{
    placeholder:['Name','email','','University','Major','2015','','7550170203'],
    type:['text','email','radio','text','text','date','radio','number'],
    label:['Name','email',{'lab':'What are you?','name1':'University Student','name2':'Professional'},'University','Major','Graduationdate',{'lab':'Do you have a taxID','name1':'I have taxID','name2':'I dont have'},'Mobile'],
    dataStore:[],
    flag:true,
    done:localStorage.getItem('done'),
   
    
    }
    
  },
components:{
Form
},
methods:{
  // validation(value){
  //   this.dataStore=value
  //   window.console.log('hello',this.dataStore.length)
  //   if(this.dataStore.length===8){
  //   for(var i=0;i<this.dataStore.length;i++){
  //     if(this.dataStore[i].type!=='email'){
  //      if(this.dataStore[i].type=='number'){
  //       if(this.dataStore[i].value.length==10){
  //        continue;
  //       }
  //       else{
  //        this.flag=false;
  //        window.alert('Not a valid number')
  //       }
  //     }
  //       if(this.dataStore[i].value!==' ')
  //        continue;
  //       else{
  //        window.alert('field cannot be empty')
  //        this.flag=false
  //          }
  //     }
  //     else{
  //       if(this.dataStore[i].value!==' '){
  //         const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         if(re.test(this.dataStore[i].value)){
  //           window.console.log(re.test(this.dataStore[i].value))
  //           continue;
  //         }
  //           else{
  //        window.alert('wrong email')
  //        this.flag=false
  //       }
  //       }
  //       else{
  //        window.alert('field cannot be empty')
  //        this.flag=false
  //       }
  //     }
   
  //   }
   
  // }  
  // else{
  //     this.flag=false;
  //     window.alert('some fields are still empty')
  //     this.dataStore.clear()
  //   }
  //    if(this.flag==true){
  //     this.$router.push('/profile')
  //     localStorage.setItem('active',2)
  //     localStorage.setItem('done',1)
  //    }
  //   }
},

}
</script>

<style scoped lang="scss">


</style>