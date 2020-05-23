<template>
  <div class="garbage">
    <maincard :pageDetails="garbageMainPage" :key="garbageMainPage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="delete"
                      md-label="Garbage produced"
                      md-description="No, egg shells don't go in the organic bin..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <md-card class="chart-container">
      <horizontalbarchartcard :chartdata="barchart.bardata" :options="barchart.baroptions"></horizontalbarchartcard>
      <piechartcard :chartdata="piechart.piedata" :options="piechart.pieoptions"></piechartcard>
      <linechartcard :chartdata="linechart.linedata" :options="linechart.lineoptions"></linechartcard>
    </md-card>

  </div>
</template>
--------------------------------------------------------------------------------
<script>
//
// Imports
//
import Maincard from "../components/cards/MainCard";
import Piechartcard from "../components/cards/charts/PieChartCard";
import Linechartcard from "../components/cards/charts/LineChartCard";
import horizontalbarchartcard from "../components/cards/charts/HorizontalBarChartCard";
// Local Setup

export default {
  name: "garbage",
  components: {
    horizontalbarchartcard: horizontalbarchartcard,
    Linechartcard,
    Piechartcard,
    maincard: Maincard,
  },
  data: function(){
    return {
      garbageMainPage: {
        pageTitle: "Garbage Overview",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No garbage"
      },
      barchart: {
        bardata: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: "% Apartment #1",
              backgroundColor: '#f8d479',
              stacks: "1",
              data: [30, 32, 40, 10, 25, 3]
            },
            {
              label:"% Apartment #2",
              backgroundColor: '#79ccf8',
              stacks: "2",
              data: [10, 4, 20, 9, 12, 14]
            },
            {
              label:"% Apartment #3",
              backgroundColor: '#c7f879',
              stacks: "3",
              data: [12, 12, 12, 12, 14, 12]
            },
            {
              label:"% Your apartment",
              backgroundColor: '#f64343',
              stacks: "4",
              data: [48, 52, 28, 69, 49, 71]
            }
          ],
        },
        baroptions: {
          title: {
            display: true,
            text: '% of garbage produced by apartment',
            fontSize: '24'
          },
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            xAxes: [{
              stacked: true,
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
      piechart: {
        piedata: {
          datasets: [{
            backgroundColor: [
              "#f8d479",
              "#79ccf8",
              "#c7f879",
              "#f64343"
            ],
            data: [60, 25, 13, 2]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            '% Apartment #1',
            '% Apartment #2',
            '% Apartment #3',
            '% Your apartment'
          ]
        },
        pieoptions: {
          title: {
            display: true,
            text: '% of garbage properly recycled',
            fontSize: '24'
          },
          responsive: true,
          maintainAspectRatio:false
        }
      },
      linechart: {
        linedata: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Rest Mull",
              backgroundColor: "#f55656",
              data: [20, 20, 10, 40, 40, 20]
            },
            {
              label: "Organic",
              backgroundColor: "#92510e",
              data: [15, 30, 60, 10, 30, 30]
            },
            {
              label: "Plastic/Dose",
              backgroundColor: "#f8e461",
              data: [30, 10, 10, 20, 10, 25]
            },
            {
              label: "Papier",
              backgroundColor: "#84f884",
              data: [20, 30, 10, 15, 10, 15]
            }
            ,
            {
              label: "Flasche",
              backgroundColor: "#60f6d8",
              data: [15, 10, 10, 15, 10, 10]
            }
          ]
        },
        lineoptions: {
          title: {
            display: true,
            text: '% of garbage produced by category',
            fontSize: '24'
          },
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            yAxes: [{
              stacked: true
            }]
          }
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
