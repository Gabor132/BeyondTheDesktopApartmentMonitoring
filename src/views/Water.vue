<template>
  <div class="water">
    <maincard :pageDetails="waterMainPage" :key="waterMainPage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="opacity"
                      md-label="Water consumption"
                      md-description="Water is also a limited resource so stop wasting it!"
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <md-card>
      <doughnutchartcard :chartdata="piechart.piedata" :options="piechart.pieoptions"></doughnutchartcard>
      <radarchartcard :chartdata="radarchart.radardata" :options="radarchart.radaroptions"></radarchartcard>
      <linechartcard :chartdata="linechart.linedata" :options="linechart.lineoptions"></linechartcard>
    </md-card>
  </div>
</template>
--------------------------------------------------------------------------------
<script>
//
// Imports
//
import maincard from "../components/cards/MainCard"
import doughnutchartcard from "../components/cards/DoughnutChartCard"
import linechartcard from "../components/cards/LineChartCard"
import Radarchartcard from "../components/cards/RadarChartCard";
// Local Setup

export default {
  name: "lights",
  components: {
    Radarchartcard,
    maincard: maincard,
    doughnutchartcard: doughnutchartcard,
    linechartcard: linechartcard
  },
  data: function(){
    return {
      waterMainPage: {
        pageTitle: "Water Overview",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No water"
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
            data: [20, 12, 40, 10, 18]
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
            text: '% of water consumption per person',
            fontSize: '24'
          },
          width:"5px",
          height:"20px",
          responsive: true,
          maintainAspectRatio:false
        }
      },
      radarchart: {
        radardata: {
          labels: ['Shower', 'Toilet', 'Bathroom sink', "Kitchen sink", "Washing machine", "Dishwasher"],
          datasets: [
            {
              label: "You",
              backgroundColor: 'rgba(95,190,253,0.5)',
              data: [20, 40, 10, 16, 4, 10]
            }
          ],
        },
        radaroptions: {
          title: {
            display: true,
            text: '% of water consumption per utility',
            fontSize: '24'
          },
          width:"5px",
          height:"10px",
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            yAxes: [{
              ticks: {
                max: 100,
                min: 0
              }
            }]
          }
        }
      },
      linechart: {
        linedata: {
          labels: ["Morning", "Noon", "Afternoon", "Evening", "Midnight", "Early morning"],
          datasets: [
            {
              label: "You",
              backgroundColor:'rgba(95,190,253,0.5)',
              data: [606, 153, 108, 1269, 309, 33]
            },
            {
              label: "Average Consumption",
              borderColor: "#767575",
              data: [600, 150, 60, 900, 300, 30]
            }
          ]
        },
        lineoptions: {
          title: {
            display: true,
            text: 'Average water consumed per month, per time of day (liters)',
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
