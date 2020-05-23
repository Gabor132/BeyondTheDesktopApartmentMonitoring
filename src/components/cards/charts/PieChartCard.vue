<template>
    <md-card class="md-card-chart-small md-card-secondary">
        <md-ripple>
            <md-content>
                <piechartcomponent :chartdata="chartdata" :options="options"></piechartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import piechartcomponent from "../../charts/PieChartComponent";
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
</style>