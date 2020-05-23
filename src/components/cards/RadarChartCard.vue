<template>
    <md-card class="md-card-radarchart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <radarchartcomponent :chartdata="chartdata" :options="options"></radarchartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import radarchartcomponent from "../charts/RadarChartComponent";
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
.md-card-radarchart {
    width: 49%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>