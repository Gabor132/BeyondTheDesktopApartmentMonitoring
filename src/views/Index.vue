<template>
    <div id="index">
        <maincard :pageDetails="welcomePage" :key="welcomePage.pageKey">
            <div
                    class="md-main-card-holder"
            >
                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-content>
                            <md-empty-state
                                    md-icon="emoji_people"
                                    :md-label="welcome_message"
                                    md-description="Here is where you can check everything!"
                            >
                            </md-empty-state>
                        </md-card-content>
                    </md-ripple>
                </md-card>
            </div>
        </maincard>
        <maincard :pageDetails="myNotificationPage" :key="myNotificationPage.pageKey">
            <div
                    class="md-main-card-holder"
                    v-if="notifications.length === 0"
            >
                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-content>
                            <md-empty-state
                                    md-icon="chat"
                                    md-label="No Notifications"
                                    md-description="Nothing to see here..."
                            >
                                <md-button class="md-raised md-primary">Refresh</md-button>
                            </md-empty-state>
                        </md-card-content>
                    </md-ripple>
                </md-card>
            </div>
            <div v-else>
                <notificationcard
                        v-for="notification in notifications"
                        v-bind:key="notification.id"
                        :mainPage="this"
                        :notification="notification"
                ></notificationcard>
            </div>
        </maincard>
    </div>
</template>

<script>
    import notificationcard from "../components/cards/NotificationCard";
    import maincard from "../components/cards/MainCard";

    export default {
        name: "index",
        components: {
            notificationcard: notificationcard,
            maincard: maincard
        },
        data: function() {
            return {
                welcome_message: "Welcome to " + process.env.VUE_APP_TITLE,
                user: this.$store.getters.getUser,
                welcomePage: {
                    pageTitle: "Welcome",
                    pageKey: 1,
                    pageShowDetails: true,
                    pageNoText: "No Welcome"
                },
                myNotificationPage: {
                    pageTitle: "Notifications",
                    pageKey: 2,
                    pageShowDetails: false,
                    pageNoText: "No Notifications"
                },
                notifications: []
            };
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>