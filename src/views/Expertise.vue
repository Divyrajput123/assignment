<template>
  <main>
    <div class="d2">
      <progressbar></progressbar>
    </div>
    <div class="d3">
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

.d3{
 margin-top: 100px;
}


</style>