<template>
    <div class="Paneldata">
        <div class="panel">
            <!---->
            <div class="panel_top">
                <!--数据展示板块-->
                <div>大气监测点排名</div>
                <div>
                    <button>实时</button>
                    <button>累计</button>
                    <i>下拉选项</i>
                    <button>查询</button>
                </div>
                <div>
                    图表一
                    图表二
                    图表三
                    图表四
                </div>
            </div>
            <!---->
            <div class="panel_buttom">
                <!--又切换功能显示-->
                <div class="table-item">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'paneldata',
        data () {
            return {
                msg: 'App'
            }
        },
        mounted(){

        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .Paneldata{
        width: 410px;
        height:auto;
        background-color: #666;
        opacity: 0.8;
        position: absolute;
        top:60px;
        right: 0;
        .panel{
            width: 100%;
            height: 600px;
            box-shadow: 0 0 5px #666;

        }
    }


</style>
