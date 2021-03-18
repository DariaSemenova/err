export const CartItem = {
  props: ["cartItem"],
  emits: ["remove"],
  template: `
        <div class="cart-item">
            <img class="cart-product_img" src="{{product_img}}" height="100px" width="100px" alt="">
            <div class="cart-product">
                <h3 class="cart-product_name">{{cartItem.product_name}}</h3>
                <div class="star">
                    <i id="first" class="fas fa-star"></i>
                    <i id="second" class="fas fa-star"></i>
                    <i id="third" class="fas fa-star"></i>
                    <i id="fourth" class="fas fa-star"></i>
                    <i id="fifth" class="fas fa-star"></i>
                </div>
            <div class="cart-product_sum"><span class="cart-product_quantity">{{cartItem.quantity}}</span> x <span
                class="cart-product_price">$ {{cartItem.price}}</span></div>
                </div>
            <i class="fas fa-times-circle @click="$emit('remove', cartItem)""></i>
        </div>`,
};
