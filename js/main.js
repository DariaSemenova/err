import { Cart } from "./Cart.js";
import { Products } from "./Products.js";

const App = {
  components: {
    Cart,
    Products,
  },
  data() {
    return {
      API: `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`,
      userSearch: "",
    };
  },
  provide() {
    return {
      API: this.API,
      getJson: this.getJson,
    };
  },
  methods: {
    getJson(url) {
      return fetch(url).then((result) => result.json());
    },
  },
};
Vue.createApp(App).mount("#app");