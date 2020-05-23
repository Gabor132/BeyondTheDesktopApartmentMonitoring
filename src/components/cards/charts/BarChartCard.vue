<template>
    <md-card class="md-card-chart-small md-card-secondary">
        <md-ripple>
            <md-content>
                <barchartcomponent :chartdata="chartdata" :options="options"></barchartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import barchartcomponent from "../../charts/BarChartComponent";
    export default {
        name: "barchartcard",
        components: {
            barchartcomponent: barchartcomponent},
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