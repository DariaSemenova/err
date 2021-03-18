import { ProductItem } from "./ProductItem.js";

export const Products = {
  inject: ["API", "getJson"],
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.getJson(`getProducts.json`).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
    });
  },
  template: `
        <div class="products-wrapper">
                <ProductItem 
                v-for="el of products" 
                :key="el.id_product"
                >
                </ProductItem>
            </div>
    `,
};
