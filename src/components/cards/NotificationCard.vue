<template>
  <md-card md-with-hover class="md-card-secondary">
    <div @click="toggleEventDetails(notification)">
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <span class="md-title">Notification {{ notification.id }}</span>
          </md-card-header-text>
          <md-card-media class="md-medium" v-if="notification.showDetails">
            <md-icon class="md-size-4x">chat</md-icon>
          </md-card-media>
          <md-avatar v-else class="md-avatar-icon">
            <md-icon class="md-small">chat</md-icon>
          </md-avatar>
        </md-card-header>
        <md-divider v-if="notification.showDetails" />
        <md-card-content v-if="notification.showDetails">
        </md-card-content>
        <md-card-actions v-if="notification.showDetails">
          <md-button v-if="notification.accepted === null"
            class="md-primary"
            @click="acceptNotification(notification.id)"
          >
            Accept
          </md-button>
          <md-button v-if="notification.accepted === null"
                  class="md-primary"
                  @click="deleteNotification(notification.id)"
          >
            Decline
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
//
import {RequestHandler} from "../../javascript/requests";

/**
 * Exports
 */
export default {
  name: "notificationcard",
  props: ["notification", "mainPage"],
  data: function() {
    return {};
  },
  methods: {
    toggleEventDetails: function(notification) {
      notification.showDetails = !notification.showDetails;
      this.$forceUpdate();
    },
    acceptNotification: async function(id){
      this.notification.accepted = true;
      await RequestHandler.doPutRequest("/notifications/accept/" + id, {}).then(
          data => {
            // eslint-disable-next-line no-console
            return data;
          }
      );
    },
    deleteNotification: async function(id){
      this.notification.accepted = false;
      await RequestHandler.doDeleteRequest("/notifications/delete/" + id, {}).then(
          data => {
            // eslint-disable-next-line no-console
            return data;
          }
      );
    }
  }
};
</script>

<style scoped></style>
