<template>
    <md-card class="md-card-horizontalbarchart md-card-secondary">
        <md-ripple>
            <md-content>
                <div class="chart-container">
                    <horizontalbarchartcomponent :chartdata="chartdata" :options="options"></horizontalbarchartcomponent>
                </div>
            </md-content>
        </md-ripple>
    </md-card>
</template>

<script>
    import horizontalbarchartcomponent from "../charts/HorizontalBarChartComponent";
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
.md-card-horizontalbarchart {
    width: 44%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>