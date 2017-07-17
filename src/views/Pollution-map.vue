<template>
    <div class="Pollutionmap">
        <!--污染地图-->
        <v-header></v-header>
        <iframe
                frameborder="0"
                width="100%"
                height="90%"
                :src="PollutionmapURL"
                scrolling="no"
        >

        </iframe>
       <!-- <v-paneldata></v-paneldata>-->
    </div>
</template>

<script>
    export default {
        name: 'Pollutionmap',
        data () {
            return {
                PollutionmapURL:'http://m.zq12369.com/palmmap.php',
                woaini:''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .Pollutionmap{
        width: 100%;
        height: 100%;
    }
</style>
