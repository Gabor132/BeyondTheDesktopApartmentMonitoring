<template>
  <md-card md-with-hover class="md-card-secondary">
    <div @click="toggleEventDetails(garbage)">
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <span class="md-title">{{ garbage.name }}</span>
          </md-card-header-text>
          <md-card-media class="md-medium" v-if="garbage.showDetails">
            <md-icon class="md-size-4x">chat</md-icon>
          </md-card-media>
          <md-avatar v-else class="md-avatar-icon">
            <md-icon class="md-small">chat</md-icon>
          </md-avatar>
        </md-card-header>
        <md-divider v-if="garbage.showDetails" />
        <md-card-content v-if="garbage.showDetails">
        </md-card-content>
        <md-card-actions v-if="garbage.showDetails">
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
  name: "garbagecard",
  props: ["garbage", "mainPage"],
  data: function() {
    return {};
  },
  methods: {
    toggleEventDetails: function(garbage) {
      garbage.showDetails = !garbage.showDetails;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped></style>
