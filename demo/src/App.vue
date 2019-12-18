<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    height: 100%;
    overflow: hidden;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 750px;
    margin: 0 auto;
    padding: 0;
    font-weight: 400;
    line-height: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
