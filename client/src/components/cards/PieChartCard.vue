<template>
    <md-card class="md-card-piechart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <piechartcomponent :chartdata="chartdata" :options="options"></piechartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import piechartcomponent from "../charts/PieChartComponent";
    export default {
        name: "piechartcard",
        components: {
            piechartcomponent: piechartcomponent
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
.md-card-piechart {
    width: 25%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>