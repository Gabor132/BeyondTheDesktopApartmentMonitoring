<template>
    <md-card class="md-card-doughnutchart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <doughnutchartcomponent :chartdata="chartdata" :options="options"></doughnutchartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import doughnutchartcomponent from "../charts/DoughnutChartComponent";
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
.md-card-doughnutchart {
    width: 20%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>