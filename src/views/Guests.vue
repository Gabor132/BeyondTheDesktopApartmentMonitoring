<template>
  <div class="guests">
    <maincard :pageDetails="mainGuestsPage" :key="mainGuestsPage.pageKey">
      <div
              class="md-main-card-holder"
      >
        <md-card md-with-hover>
          <md-ripple>
            <md-card-content>
              <md-empty-state
                      md-icon="today"
                      md-label="You have a friend coming over?"
                      md-description="Let's be realisting, you don't have any friends..."
              >
              </md-empty-state>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </maincard>
    <maincard :pageDetails="myGuestsPage" :key="myGuestsPage.pageKey">
      <div
              class="md-main-card-holder"
              v-if="this.myGuestsArray.length === 0"
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
        <guestcard
                v-for="guest in this.myGuestsArray"
                v-bind:key="guest.id"
                :mainPage="this"
                :guest="guest"
        ></guestcard>
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

import maincard from "../components/cards/MainCard";
import guestcard from "../components/cards/GuestCard";

export default {
  name: "guests",
  components: {
    guestcard: guestcard,
    maincard: maincard
  },
  data: function() {
    return {
      myGuestsArray: [
        {
          name: "That one friend that never leaves",
          showDetails: false
        },
        {
          name: "Karen complaining about her job",
          showDetails: false
        }
      ],
      mainGuestsPage: {
        pageTitle: "Guests Overview",
        pageKey: 0,
        pageShowDetails: false,
        pageNoText: "No guests"
      },
      myGuestsPage: {
        pageTitle: "My Guests",
        pageKey: 1,
        pageShowDetails: false,
        pageNoText: "No guests"
      },
    }
  },
  methods: {
  }
};
</script>
--------------------------------------------------------------------------------
<style lang="scss"></style>
