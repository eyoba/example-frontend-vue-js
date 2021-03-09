import Vue from "vue";
import Router from "vue-router";
import Movies from "./views/Movies.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "eyob/",
      name: "index",
      component: Movies
    },
    {
      path: "eyob/movies",
      name: "movies",
      component: Movies
    },
    {
      path: "eyob/people",
      name: "people",
      component: () =>
        import(/* webpackChunkName: "people" */ "./views/People.vue")
    },
    {
      path: "eyob/movie/:id",
      name: "movie",
      component: () =>
        import(/* webpackChunkName: "movie" */ "./views/Movie.vue"),
      props: route => ({ id: route.params.id })
    },
    {
      path: "eyob/people/:id",
      name: "person",
      component: () =>
        import(/* webpackChunkName: "person" */ "./views/Person.vue"),
      props: route => ({ id: route.params.id })
    }
  ]
});
