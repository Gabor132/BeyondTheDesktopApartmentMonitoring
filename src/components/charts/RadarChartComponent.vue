<script>
    import { Radar } from 'vue-chartjs'

    export default {
        name: "radarchartcomponent",
        extends: Radar,
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        data: function() {
            return {}
        },
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }

</script>

<style scoped>

</style>