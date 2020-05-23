<template>
    <md-card class="md-card-chart-small">
        <md-ripple>
            <md-content>
                <radarchartcomponent :chartdata="chartdata" :options="options"></radarchartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import radarchartcomponent from "../../charts/RadarChartComponent";
    export default {
        name: "radarchartcard",
        components: {
            radarchartcomponent
        },
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
    }
</script>

<style scoped>
</style>