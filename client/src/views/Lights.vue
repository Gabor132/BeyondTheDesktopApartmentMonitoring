<template>
  <div class="lights">
    <maincard :pageDetails="lightMainPage" :key="lightMainPage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="wb_incandescent"
                      md-label="Electricity consumption"
                      md-description="You can leave the light off..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <md-card>
      <piechartcard :chartdata="piechart.piedata" :options="piechart.pieoptions"></piechartcard>
      <barchartcard :chartdata="barchart.bardata" :options="barchart.baroptions"></barchartcard>
      <linechartcard :chartdata="linechart.linedata" :options="linechart.lineoptions"></linechartcard>
    </md-card>
  </div>
</template>
--------------------------------------------------------------------------------
<script>
//
// Imports
//
// Local Setup

import maincard from "../components/cards/MainCard";
import piechartcard from "../components/cards/PieChartCard";
import barchartcard from "../components/cards/BarChartCard";
import linechartcard from "../components/cards/LineChartCard";

export default {
  name: "lights",
  components: {
    linechartcard: linechartcard,
    barchartcard: barchartcard,
    maincard: maincard,
    piechartcard: piechartcard
  },
  data: function(){
    return {
      lightMainPage: {
        pageTitle: "Electricity Overview",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No electricity"
      },
      piechart:{
        piedata: {
          datasets: [{
            backgroundColor: [
              "#f8d479",
              "#79ccf8",
              "#c7f879",
              "#f64343",
              '#b143f6'
            ],
            data: [10, 16, 28, 30, 16]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Kyle',
            'Helga',
            'John',
            'You',
            'Guests'
          ]
        },
        pieoptions: {
          title: {
            display: true,
            text: '% of electricity consumption per person',
            fontSize: '24'
          },
          width:"5px",
          height:"20px",
          responsive: true,
          maintainAspectRatio:false
        }
      },
      barchart: {
        bardata: {
          labels: ['Living room', 'Bathroom', 'Kitchen', "Kyle's room", "Helga's room", "John's room", "Your room"],
          datasets: [
            {
              label: "Kyle",
              backgroundColor: '#f8d479',
              data: [30, 5, 40, 80, 5, 3, 6]
            },
            {
              label:"Helga",
              backgroundColor: '#79ccf8',
              data: [20, 14, 10, 10, 70, 4, 2]
            },
            {
              label:"John",
              backgroundColor: '#c7f879',
              data: [15, 40, 15, 1, 5, 90, 2]
            },
            {
              label:"You",
              backgroundColor: '#f64343',
              data: [25, 20, 20, 1, 4, 2, 81]
            },
            {
              label:"Guests",
              backgroundColor: '#b143f6',
              data: [10, 21, 15, 8, 16, 1, 9]
            }
          ],
        },
        baroptions: {
          title: {
            display: true,
            text: '% of electricity consumed per room',
            fontSize: '24'
          },
          width:"5px",
          height:"10px",
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            xAxes: [{
              ticks: {
                max: 100,
                min: 0
              }
            }],
            yAxes: [{
              stacked: true,
            }]
          }
        }
      },
      linechart: {
        linedata: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "You",
              backgroundColor: "rgba(253,242,50,0.5)",
              data: [87.2, 94.1, 68.6, 92.3, 78.3, 82.1]
            },
            {
              label: "Consumption limit",
              borderColor: "#767575",
              data: [90, 90, 90, 90, 90, 90]
            }
          ]
        },
        lineoptions: {
          title: {
            display: true,
            text: 'Amount of electricity consumed per month (kWh)',
            fontSize: '24'
          },
          width:"5px",
          height:"20px",
          responsive: true,
          maintainAspectRatio:false,
        }
      }
    }
  },
  methods: {
  }
};
</script>
--------------------------------------------------------------------------------
<style lang="scss"></style>
