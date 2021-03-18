import { CartItem } from "./CartItem.js";

export const Cart = {
  inject: ["API", "getJson"],
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    addProduct(product) {
      this.getJson(`${this.API}/addToBasket.json`).then((data) => {
        if (data.result) {
          let find = this.cartItems.find(
            (el) => el.id_product === product.id_product
          );
          if (find) {
            find.quantity++;
          } else {
            let prod = Object.assign({ quantity: 1 }, product);
            this.cartItems.push(prod);
          }
        }
      });
    },
    remove(product) {
      this.getJson(`${this.API}/deleteFromBasket.json`).then((data) => {
        if (data.result) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            this.cartItems.splice(this.cartItems.indexOf(product), 1);
          }
        }
      });
    },
  },
  template: ` 
    <div class="cart-wrapper"> 
        <a href="#" class="basket"><img src="img/forma_1_1113.png" alt="basket"> 
        <div class="counter"> {{cartItems.length}}</div> </a> 
        <div class="cart-block"> 
            <p class="cart-empty" v-if="!cartItems.length">Cart is empty</p>
            <CartItem 
                v-for="item of cartItems" 
                :key="item.id_product"
                :img="imgCart"
                :cartItem="item"
                @remove="remove"
            ></CartItem>
            <div class="cart-total-wrapper">
                <h3 class="cart-total-wrapper_heading">TOTAL</h3>
                <span class="cart-total-wrapper_prise">0 $</span>
            </div>
            <a class="cart-button_checkout" href="checkout.html">
            <button>Checkout</button></a>
            <a class="cart-button_a" href="shoppingCart.html"> 
            <button> Go to cart</button></a>
        </div>
    </div>`,
};
