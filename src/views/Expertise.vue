<template>
  <main>
    <div class="d2">
      <progressbar></progressbar>
    </div>
    <div >
      <expertise ></expertise>
    </div>

  </main>
</template>

<script>
import Expertise from '../components/Expertise.vue'
import Progressbar from '../components/Progressbar.vue'
export default {
 components:{
   Expertise,Progressbar
 }
}
</script>

<style scoped lang="scss">

.d2{
margin: 80px;
}


</style>