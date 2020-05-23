<template>
    <md-card class="md-card-chart-medium md-card-secondary">
        <md-ripple>
            <md-content>
                <linechartcomponent :chartdata="chartdata" :options="options"></linechartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import Linechartcomponent from "../../charts/LineChartComponent";
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
</style>