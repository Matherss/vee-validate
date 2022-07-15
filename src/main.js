import { ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { errorMessages } from "./App.vue";
import Vue from "vue";
import App from "./App.vue";

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: errorMessages[rule] // assign message
  });
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
