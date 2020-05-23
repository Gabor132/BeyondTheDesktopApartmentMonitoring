import Vue from "vue";
import Router from "vue-router";
import Store from "./store";

Vue.use(Router);

const ifNotAuthenticated = function(to, from, next) {
  if (!Store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/index");
};
const ifAuthenticated = function(to, from, next) {
  if (Store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  //mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
      meta: {
        title: process.env.VUE_APP_TITLE
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue"),
      beforeEnter: ifNotAuthenticated
    },
    {
      path:"/index",
      name: "index",
      component: () => import("./views/Index.vue"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/people",
      name: "people",
      component: () => import("./views/People"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/Lights",
      name: "lights",
      component: () => import("./views/Lights"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/Heat",
      name: "heat",
      component: () => import("./views/Heat"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/Water",
      name: "water",
      component: () => import("./views/Water"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/guests",
      name: "guests",
      component: () => import("./views/Guests"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/garbage",
      name: "garbage",
      component: () => import("./views/Garbage"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/devtools",
      name: "devtools",
      component: () => import("./views/dev/DevTools.vue"),
      beforeEnter: ifAuthenticated
    }
  ]
});
