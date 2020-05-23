<template>
  <md-card md-with-hover class="md-card-secondary">
    <div @click="toggleEventDetails(light)">
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <span class="md-title">{{ light.name }}</span>
          </md-card-header-text>
          <md-card-media class="md-medium" v-if="light.showDetails">
            <md-icon class="md-size-4x">chat</md-icon>
          </md-card-media>
          <md-avatar v-else class="md-avatar-icon">
            <md-icon class="md-small">chat</md-icon>
          </md-avatar>
        </md-card-header>
        <md-divider v-if="light.showDetails" />
        <md-card-content v-if="light.showDetails">
        </md-card-content>
        <md-card-actions v-if="light.showDetails">
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
  name: "lightcard",
  props: ["light", "mainPage"],
  data: function() {
    return {};
  },
  methods: {
    toggleEventDetails: function(light) {
      light.showDetails = !light.showDetails;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped></style>
