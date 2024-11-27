<template>
  <div>
    <h2>Корзина</h2>
    <ul v-if="cartStore.items.length > 0">
      <li v-for="item in cartStore.items" :key="item.id">
        {{ item.name }} — {{ item.price }} ₽ x {{ item.count }}
        <button @click="removeItem(item.id)">Удалить</button>
      </li>
    </ul>
    <p v-else>Корзина пуста</p>
    <p>Всего товаров: {{ cartStore.totalItems }}</p>
    <p>Общая сумма: {{ cartStore.totalPrice }} ₽</p>
    <button @click="clearCart">Очистить корзину</button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stories/useCartStore.ts';

const cartStore = useCartStore();

const removeItem = (id: number) => {
  cartStore.removeFromCart(id);
};

const clearCart = () => {
  cartStore.clearCart();
};
</script>