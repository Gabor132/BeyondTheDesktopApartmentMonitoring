<template>
  <md-card md-with-hover class="md-card-secondary">
    <div @click="toggleEventDetails(guest)">
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <span class="md-title">{{ guest.name }}</span>
          </md-card-header-text>
          <md-card-media class="md-medium" v-if="guest.showDetails">
            <md-icon class="md-size-4x">chat</md-icon>
          </md-card-media>
          <md-avatar v-else class="md-avatar-icon">
            <md-icon class="md-small">chat</md-icon>
          </md-avatar>
        </md-card-header>
        <md-divider v-if="guest.showDetails" />
        <md-card-content v-if="guest.showDetails">
        </md-card-content>
        <md-card-actions v-if="guest.showDetails">
          <md-button class="md-primary"
          >
            Message
          </md-button>
        </md-card-actions>
      </md-ripple>
    </div>
  </md-card>
</template>

<script>
// eslint-disable-next-line no-console
/**
 * Imports
 */

/**
 * Exports
 */
export default {
  name: "guestcard",
  props: ["guest", "mainPage"],
  data: function() {
    return {};
  },
  methods: {
    toggleEventDetails: function(guest) {
      guest.showDetails = !guest.showDetails;
      this.$forceUpdate();
    },
    isAdmin: function(guest){
      return guest.name.toString().endsWith("Administrator");
    }
  }
};
</script>

<style scoped></style>
