<template>
  <md-card md-with-hover class="md-card-secondary">
    <div @click="toggleEventDetails(water)">
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <span class="md-title">{{ water.name }}</span>
          </md-card-header-text>
          <md-card-media class="md-medium" v-if="water.showDetails">
            <md-icon class="md-size-4x">chat</md-icon>
          </md-card-media>
          <md-avatar v-else class="md-avatar-icon">
            <md-icon class="md-small">chat</md-icon>
          </md-avatar>
        </md-card-header>
        <md-divider v-if="water.showDetails" />
        <md-card-content v-if="water.showDetails">
        </md-card-content>
        <md-card-actions v-if="water.showDetails">
          <md-button class="md-primary"
          >
            Message
          </md-button>
          <md-button class="md-primary"
          >
            Kick Out
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
  name: "watercard",
  props: ["water", "mainPage"],
  data: function() {
    return {};
  },
  methods: {
    toggleEventDetails: function(water) {
      water.showDetails = !water.showDetails;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped></style>
