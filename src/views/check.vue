<template>
  <main>
    <div class="div1">
      <p>hello</p>
      <h1>Hey this is divy</h1>
    </div>
    <div class="div2 ">
     <h1>I am in div2</h1>
    </div>
  
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../styles/my-styles.scss";

// p{
// color:$color;
// }
.div1{
  @include div1(200px,lightblue);
  
}
main{
  display: flex;
}
</style>