import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Particles from "particles.vue";

// this adds the particles plugin to Vue.js
Vue.use(Particles);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
