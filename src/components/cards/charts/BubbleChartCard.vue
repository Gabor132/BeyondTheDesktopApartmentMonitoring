<template>
    <md-card class="md-card-chart-small md-card-secondary">
        <md-ripple>
            <md-content>
                <bubblechartcomponent :chartdata="chartdata" :options="options"></bubblechartcomponent>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import bubblechartcomponent from "../../charts/BubbleChartComponent";
    export default {
        name: "bubblechartcard",
        components: {
            bubblechartcomponent: bubblechartcomponent},
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