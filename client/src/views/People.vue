<template>
  <div class="people">

    <maincard :pageDetails="mainPeoplePage" :key="mainPeoplePage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="people"
                      md-label="Tenants overview"
                      md-description="...I've seen better people..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <maincard :pageDetails="myPeoplePage" :key="myPeoplePage.pageKey">
      <div
              class="md-main-card-holder"
              v-if="this.myPeopleArray.length === 0"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="person"
                      md-label="No Tenants"
                      md-description="Nothing to see here..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div v-else>
        <peoplecard
                v-for="people in this.myPeopleArray"
                v-bind:key="people.id"
                :mainPage="this"
                :people="people"
        ></peoplecard>
      </div>
    </maincard>
    <maincard :pageDetails="allPeoplePage" :key="allPeoplePage.pageKey">
      <div
              class="md-main-card-holder"
              v-if="this.allPeopleArray.length === 0"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="person"
                      md-label="No Tenants"
                      md-description="Nothing to see here..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div v-else>
        <peoplecard
                v-for="people in this.allPeopleArray"
                v-bind:key="people.id"
                :mainPage="this"
                :people="people"
        ></peoplecard>
      </div>
    </maincard>
  </div>
</template>
--------------------------------------------------------------------------------
<script>
//
// Imports
//
// Local Setup

import peoplecard from "../components/cards/PeopleCard";
import maincard from "../components/cards/MainCard";
export default {
  name: "people",
  components: {
    peoplecard: peoplecard,
    maincard: maincard
  },

  data: function() {
    return {
      mainPeoplePage: {
        pageTitle: "Tenants Overview",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No tenants"
      },
      myPeopleArray: [
        {
          name: "John",
          description: "Cool Guy",
          showDetails: false
        },
        {
          name: "Kyle",
          description: "Boring Dude",
          showDetails: false
        },
        {
          name: "Helga",
          description: "Fun of the party",
          showDetails: false
        },
        {
          name: "You",
          description: "Normal you",
          showDetails: false
        }
      ],
      allPeopleArray: [
        {
          name: "Administrator",
          description: "Ok guy",
          showDetails: false
        },
        {
          name: "John",
          description: "Cool Guy",
          showDetails: false
        },
        {
          name: "Kyle",
          description: "Boring Dude",
          showDetails: false
        },
        {
          name: "Helga",
          description: "Fun of the party",
          showDetails: false
        },
        {
          name: "You",
          description: "Normal you",
          showDetails: false
        }
      ],
      myPeoplePage: {
        pageTitle: "Your Apartment",
        pageKey: 2,
        pageShowDetails: false,
        pageNoText: "No tenants"
      },
      allPeoplePage: {
        pageTitle: "All Apartments",
        pageKey: 3,
        pageShowDetails: false,
        pageNoText: "No tenants"
      }
    }
  },
  methods: {
  }
};
</script>
--------------------------------------------------------------------------------
<style lang="scss"></style>
