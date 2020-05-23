<template>
    <md-card class="md-card-bubblechart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <bubblechartcomponent :chartdata="chartdata" :options="options"></bubblechartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import bubblechartcomponent from "../charts/BubbleChartComponent";
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
.md-card-bubblechart {
    width: 25%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>