<template>
  <div id="app">
    <h3>Sample Project</h3>
    <progressbar :key="$store.state.index" class="progress"></progressbar>
    <router-view/>
  </div>
</template>
<script>
import Progressbar from '../src/components/Progressbar'
export default {
  components:{
    Progressbar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.progress{
  margin-bottom: 10%;
}
</style>
