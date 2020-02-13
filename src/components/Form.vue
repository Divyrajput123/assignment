<template>
  <main>
  
    <div class="container">
      <div v-for="(n,index) in placeholder.length" :key="index">
        <span v-if="type[index] !=='radio'">
        <label>{{label[index]}}</label><input :type="type[index]" :placeholder="placeholder[index]">
        </span>
         <span v-else>
          <label>{{label[index].lab}}</label>
          <div class="radio">
          <input :type="type[index]" class="r1">{{label[index].name1}}
          <input :type="type[index]" class="r2">{{label[index].name2}}
          </div>
        </span> 
      </div>
    </div>
    
  </main>
</template>

<script>
export default {
props:['placeholder','type','label']
}
</script>

<style>
.container{
  max-width: 400px;
  position: relative;
  margin:auto;
}
input{
  width: 70%;
}
.radio{
  display: flex;
}


</style>