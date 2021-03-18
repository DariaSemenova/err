export const ProductItem = {
  props: ['product'],
  template: `
            <div class="product-card">
                <a href="singlePage.html" class="product">
                    <img src="{{product.product_img}}" height="280px" width="263px" alt="">
                    <p class="product-item_name">{{product.product_name}}</p>
                    <p class="product-item_price">{{product.price}}</p>
                </a> 
                <div class="product-text"  @click="$root.$refs.cart.addProduct(product)"><img class="product-img" src="img/forma_1_copy_1287.png" alt="">Add to Cart</div>
            </div> 
            `,
};
