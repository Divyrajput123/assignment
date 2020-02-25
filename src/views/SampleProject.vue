
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
    label:['Name','email',{'lab':'What are you?','name1':'University Student','name2':'Professional'},'University','Major','Graduationdate',{'lab':'Do you have a taxID','name1':'I have taxID','name2':'I dont have taxID'},'Mobile'],
    dataStore:[],
    flag:true,
    done:localStorage.getItem('done'),
   
    
    }
    
  },
components:{
Form
},
methods:{

},
created(){
  localStorage.setItem('active',1)
  this.$store.state.index=this.$store.state.counter++
}

}
</script>

<style scoped lang="scss">


</style>