<template>
  <main>
    <div class="container">
     <div  v-for="item in Subjects" v-bind:key="item">
       <input  type="checkbox">
       <label class="contain" for="checkbox">{{item}}</label>
     </div>
    </div>


  </main>
</template>

<script>
export default {
 props:['Subjects','Flag'],

}
</script>

<style scoped lang="scss">

.container{
 max-width: 60%;
 display: flex;
 flex-wrap: wrap;
margin-left: 30%;
position: relative;

}
input{
  margin: 20px 40px;
 
}


</style>