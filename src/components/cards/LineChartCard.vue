<template>
    <md-card class="md-card-linechart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <linechartcomponent :chartdata="chartdata" :options="options"></linechartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import Linechartcomponent from "../charts/LineChartComponent";
    export default {
        name: "linechartcard",
        components: {
            Linechartcomponent
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
.md-card-linechart {
    width: 30%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>