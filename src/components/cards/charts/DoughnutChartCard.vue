<template>
    <md-card class="md-card-chart-small md-card-secondary">
        <md-ripple>
            <md-content>
                <doughnutchartcomponent :chartdata="chartdata" :options="options"></doughnutchartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import doughnutchartcomponent from "../../charts/DoughnutChartComponent";
    export default {
        name: "doughnutchartcard",
        components: {
            doughnutchartcomponent: doughnutchartcomponent
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