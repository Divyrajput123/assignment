
<template>
  <main>
    <Form v-bind:placeholder="placeholder" v-bind:label="label" v-bind:type="type"></Form>
  </main>
</template>

<script>
import Form from '../components/Form.vue'
export default {
  data(){
    return{
    placeholder:['Name','Email','','University','Major','2015','','7550170203'],
    type:['text','Email','radio','text','text','date','radio','number'],
    label:['Name','Email',{'lab':'What are you?','name1':'University Student','name2':'Professional'},'University','Major','Graduationdate',{'lab':'Do you have a taxID','name1':'I have taxID','name2':'I dont have'},'Mobile']
    }
    
  },
components:{
Form
}
}
</script>

<style>

</style>