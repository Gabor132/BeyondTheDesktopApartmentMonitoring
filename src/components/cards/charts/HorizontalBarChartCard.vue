<template>
    <md-card class="md-card-chart-small md-card-secondary">
        <md-ripple>
            <md-content>
                <horizontalbarchartcomponent :chartdata="chartdata" :options="options"></horizontalbarchartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import horizontalbarchartcomponent from "../../charts/HorizontalBarChartComponent";
    export default {
        name: "horizontalbarchartcard",
        components: {
            horizontalbarchartcomponent: horizontalbarchartcomponent},
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