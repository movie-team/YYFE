import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PopularView from "@/views/PopularView.vue";
import NowPlayingView from "@/views/NowPlayingView.vue";
import RecommendView from "@/views/RecommendView.vue";
import LoginOverView from "@/views/LoginOverView.vue";
import SignupView from "@/views/SignupView.vue";
import DetailView from "@/views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/popular",
      name: "popular",
      component: PopularView,
    },
    {
      path: "/nowplaying",
      name: "nowplaying",
      component: NowPlayingView,
    },
    {
      path: "/recommend",
      name: "recommend",
      component: RecommendView,
    },
    {
      path: "/movie/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginOverView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
  ],
});

export default router;
