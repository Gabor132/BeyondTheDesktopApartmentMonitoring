<template>
    <md-card class="md-card-barchart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <barchartcomponent :chartdata="chartdata" :options="options"></barchartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import barchartcomponent from "../charts/BarChartComponent";
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
.md-card-barchart {
    width: 44%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>