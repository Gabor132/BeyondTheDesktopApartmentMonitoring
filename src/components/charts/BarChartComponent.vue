<script>
    import { Bar } from 'vue-chartjs'

    export default {
        name: "barchartcomponent",
        extends: Bar,
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