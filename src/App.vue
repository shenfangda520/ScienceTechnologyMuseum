<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding:0;
  }
  html,body{
    height:100%;
    border:none;
    #app {
      font-family:'微软雅黑';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      height:100%;
      canvas{
        width: 100%!important;
      }
    }
  }

</style>
