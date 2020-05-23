<template>
  <div class="lights">
    <maincard :pageDetails="heatMainPage" :key="heatMainPage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="whatshot"
                      md-label="Heat consumption"
                      md-description="Your apartment is not supposed to be a sauna..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <md-card class="chart-container">
      <bubblechartcard :chartdata="bubblechart.bubbledata" :options="bubblechart.bubbleoptions"></bubblechartcard>
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
import barchartcard from "../components/cards/charts/BarChartCard";
import linechartcard from "../components/cards/charts/LineChartCard";
import bubblechartcard from "../components/cards/charts/BubbleChartCard";

export default {
  name: "heat",
  components: {
    bubblechartcard: bubblechartcard,
    linechartcard: linechartcard,
    barchartcard: barchartcard,
    maincard: maincard
  },
  data: function(){
    return {
      heatMainPage: {
        pageTitle: "Heat Overview",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No heat"
      },
      barchart:{
        bardata: {
          labels: ['John', 'Kyle', 'Helga', 'You', 'Guests'],
          datasets: [
            {
              label: 'Apartment Level',
              stacks: "1",
              backgroundColor: [
                "#f8d479",
                "#79ccf8",
                "#f64343",
                "#c7f879",
                "#b143f6",
              ],
              data: [10, 16, 28, 30, 10]
            },
            {
              label: "Shared spaces",
              backgroundColor: [
                'rgba(247,211,121, 0.5)',
                'rgba(102,171,208,0.5)',
                'rgba(245,67,67,0.5)',
                'rgba(199,248,121, 0.5)',
                'rgba(176,67,245,0.5)',
              ],
              stacks: "2",
              data: [5 ,5, 8, 10, 5]
            }
          ],
        },
        baroptions: {
          title: {
            display: true,
            text: "% of heat consumption per person on apartment and building level",
            fontSize: '16'
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
      bubblechart: {
        bubbledata: {
          datasets: [
            {
              label: "Kyle",
              backgroundColor: 'rgba(248,212,121,0.5)',
              data: [{
                x: 20,
                y: 80,
                r: 30
              }]
            },
            {
              label:"Helga",
              backgroundColor: 'rgba(121,204,248,0.5)',
              data: [{
                x: 70,
                y: 20,
                r: 10
              }]
            },
            {
              label:"John",
              backgroundColor: 'rgba(199,248,121,0.5)',
              data: [{
                x: 80,
                y: 60,
                r: 15
              }]
            },
            {
              label:"You",
              backgroundColor: 'rgba(246,67,67,0.5)',
              data: [{
                x: 40,
                y: 60,
                r: 25
              }]
            },
            {
              label:"Guests",
              backgroundColor: 'rgba(177,67,246,0.5)',
              data: [{
                x: 10,
                y: 10,
                r: 20
              }]
            }
          ],
        },
        bubbleoptions: {
          title: {
            display: true,
            text: '% Time spent in building vs % of heat consumed',
            fontSize: '20'
          },
          responsive: true,
          maintainAspectRatio:false,
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: '% Time spent in building'
              },
              ticks: {
                max: 100,
                min: 0
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: '% Heat consumed by room'
              },
              ticks: {
                max: 100,
                min: 0
              },
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
              backgroundColor: "rgba(250,83,43,0.5)",
              data: [312.7, 375.1, 290.6, 261.3, 220.3, 201.1]
            },
            {
              label: "Average consumption per person per month",
              borderColor: "#767575",
              data: [280, 280, 280, 280, 280, 280]
            }
          ]
        },
        lineoptions: {
          title: {
            display: true,
            text: 'Amount of heat consumed per month (kWh/dw)',
            fontSize: '24'
          },
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
