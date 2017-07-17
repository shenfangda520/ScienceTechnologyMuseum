<template>
  <div class="weatherstation">
    <!--气象站-->
    <v-header></v-header>
    <iframe
            frameborder="0"
            width="100%"
            height="90%"
            :src="weatherstationURL"
            scrolling="no"
    >

    </iframe>
  </div>
</template>

<script>
    export default {
        name: 'weatherstation',
        data () {
            return {
                weatherstationURL:'http://60.10.151.97:8090/new/module/weatherpoint.php',
                woaini:''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .weatherstation{
    width: 100%;
    height: 100%;
  }
</style>
