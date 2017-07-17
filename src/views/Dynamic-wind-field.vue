<template>
  <div class="weather">
      <!--动态风场-->
      <v-header></v-header>
      <iframe
              frameborder="0"
              width="100%"
              height="90%"
              :src="weatherURL"
              scrolling="no"
      >

      </iframe>
  </div>
</template>

<script>
export default {
  name: 'weather',
  data () {
    return {
        weatherURL:'https://airwise.zc12369.com/',
        woaini:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .weather{
        width: 100%;
        height: 100%;
    }
</style>
