<template>
    <div  class="product-card col-3">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <h4 class="name">{{ product.name }}</h4>
      <p class="description">{{ product.description }}</p>
      <p class="description">{{ product.weight }}</p>
      <p class="description">{{product.portion}}</p>
      <div class="group">
        <p class="price">{{product.price}}</p>
        <div>
          <button v-if="product.count > 0" @click="deleteToCart" class="button solid btn" value="-" action="minus">-</button>
          <span class="count" v-if="product.count > 0">{{product.count}}</span>
          <button @click="addProductToCart" class="button solid btn" value="+" action="buy">+</button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/useCartStore';
import { toRefs } from 'vue';

interface Product {
  id:number,
  name:string,
  description:string,
  weight:string,
  portion:string,
  price:number,
  image:string,
  count:number,
  filterName: string
}

const props = defineProps<{ product: Product }>();
const { product } = toRefs(props);
console.log(product.value.count)
const cartStore = useCartStore();

const addProductToCart = () => {
  cartStore.addToCart(product.value);
  product.value.count += 1;
};
const deleteToCart = () => {
  cartStore.minusToCard(product.value)
  product.value.count -= 1
}
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
</style>