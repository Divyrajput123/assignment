<template>
  <main>
  <div class="textarea">
    <!-- <div v-for="(n,index) in placeholder.length" v-bind:key="index"> -->
    <!-- <label>{{label[index]}}</label><textarea  :style="inputStyle" :placeholder="placeholder[index]" cols="30" rows="5"></textarea> -->
     <label>About You</label><textarea v-model="t1" class="textarea" placeholder="Write a short bio" cols="30" rows="3"></textarea>
     <label>Teaching Experience</label><textarea v-on:keyup.enter="send" v-model="t2" class="textarea" placeholder="Tell us about your teaching Experience" cols="30" rows="3"></textarea>
    <!-- </div> -->
  </div>
  </main>
</template>

<script>
import { setResizeListeners } from "../helper/auto-resize.js";
  export default {
      name: "ResizeByClass",
  mounted() {
    setResizeListeners(this.$el, ".js-autoresize");
  },
    // name: 'AutoTextarea',
    props:['placeholder','label'],
  
    data () {
      return {
        // currentValue: '',
        // inputHeight: '0'
        t1:'',
        t2:'',
        text:[]
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
    send(){
      if(this.t1!=='')
      this.text.push(this.t1)
      if(this.t2!=='')
      this.text.push(this.t2)
      this.$emit('textUpdate',this.text)
    }
  }
</script>

<style scoped lang="scss">

  .textarea {
    
    
    margin: auto;
    max-width: 400px;
    
    textarea {
      padding: 2px;
      border: 0.5px solid #aeaeae;
      resize: none;
      overflow: hidden;
      font-size: 14px;
      height: 0.2;
      display: block;
    }
    label{
      position: relative;
      font-size: 14px;
      right: 190px;
      
    }
  }
</style>