<template>
  <main>
    <div class="d3">
      <expertise ></expertise>
      
    </div>
  </main>
</template>

<script>
import Expertise from '../components/Expertise.vue'
// import Progressbar from '../components/Progressbar.vue'
export default {
 components:{
   Expertise
 },
created:function(){
  if(localStorage.getItem('done')<=2)
    this.$router.push('/error')
},
mounted(){
  localStorage.setItem('active',3)
  this.$store.state.index=this.$store.state.counter++
}
}
</script>

<style scoped lang="scss">

.d3{
 margin-top: 100px;
}


</style>