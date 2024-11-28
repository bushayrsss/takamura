<template>
<div class="container_cart">
  <div class="left mb-5">
      <h1 style="margin-top: 20px;margin-left: 10px; font-weight: 400; font-size: 25px ">ОФОРМЛЕНИЕ ЗАКАЗА</h1>
      <form style="margin-top: 30px; margin-left: -70px; padding: 10px 5px">
        <div class="form-group1">
            <img  src="../assets/img/truck.svg" alt="Курьер" class="icon">
          <select id="delivery-method" name="delivery-method">
            <option value="courier">Курьер</option>
            <option value="pickup">Самовызов(Россашанский пр-д 3, ТЦ Прага)</option>
            <option value="pickup">Самовызов(Шереметьевская ул. 6 кор. 1, ТЦР Райкин Плаза)</option>
            <option value="pickup">Самовызов(Производственная 12к1, Порт Пивных Дегустаторов)</option>
          </select>
        </div>

        <div class="form-group">
          <input type="text" id="name" name="name" placeholder="Ваше имя">
        </div>
        <div class="form-group row">
          <input type="tel" name="phone" placeholder="Телефон">
          <input type="email" name="email" placeholder="E-mail">
        </div>

        <div class="time-group">
            <img src="../assets/img/clock.svg" alt="" class="icon">
          <select name="delivery-method" id="delivery-method">
            <option value="nearest">Заказ на ближайшее время</option>
            <option value="clock">Ко времении</option>
          </select>
          <select style="width: 100px;" name="delivery-method" id="delivery-method">
            <option value="time"> 14:00</option>
            <option value="time"> 14:30</option>
            <option value="time"> 15:00</option>
            <option value="time"> 15:30</option>
            <option value="time"> 16:00</option>
            <option value="time"> 16:30</option>
            <option value="time"> 17:00</option>
            <option value="time"> 17:30</option>
            <option value="time"> 18:00</option>
            <option value="time"> 18:30</option>
            <option value="time"> 19:00</option>
            <option value="time"> 19:30</option>
            <option value="time"> 20:00</option>
            <option value="time"> 20:30</option>
            <option value="time"> 21:00</option>
            <option value="time"> 21:30</option>
            <option value="time"> 22:00</option>
            <option value="time"> 22:30</option>
            <option value="time"> 23:00</option>
            <option value="time"> 23:30</option>
          </select>
        </div>

        <button style="margin-top: 20px; margin-left: -100px" type="submit">Оформить заказ</button>
        <button class="path__btn">Ознакомьтесь с <span style="color: red">информацией о доставке</span> перед созданием заказа</button>
      </form>
  </div>
  <div class="right">
    <div class="container__slot">
      <ul style="font-weight: bold; margin-top: 50px; font-size: 22px;" v-if="cartStore.items.length > 0">
        <li v-for="item in cartStore.items" :key="item.id">
          <img class="cart-img" :src="item.image" alt=""> {{item.name}} - {{item.price}} x {{item.count}}
          <button
              style="padding: 5px 5px; margin-left: 40px; margin-top: 20px; border-radius: 10px; background: #000; width: 100px; "
              @click="removeItem(item.id)">Удалить
          </button>
        </li>
      </ul>
      <p v-else class="card__text">Корзина пуста</p>
      <p style="font-weight: bold">Всего товаров: {{cartStore.totalItems}}</p>
      <p style="font-weight: bold">Общая сумма: {{cartStore.totalPrice}}</p>
      <button style="margin-left: 70px; margin-top: 30px; width: 400px;" @click="clearCart">
        Очистить корзину
      </button>
      <router-link to="/">
        <button style="margin-top: 20px; margin-left: 70px; width: 400px;">Перейти к покупкам</button>
      </router-link>
    </div>
  </div>
</div>
</template>



<script setup lang="ts">
import { useCartStore } from '../stores/useCartStore.ts';

const cartStore = useCartStore();

const removeItem = (id: number) => {
  cartStore.removeFromCart(id);
};

const clearCart = () => {
  cartStore.clearCart();
};
</script>



<style scoped>
.container_cart{
  display: flex;
  height: 100vh;
  color: black;
  overflow: visible;
}
.left, .right{
  text-align: start;
  border: 1px solid grey;
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 10px 5px;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


h1 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  text-align: start;
  margin-left: -190px;
  margin-top:5px;
  width: 472px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.row {
  display: flex;
  gap: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.icon {
  width: 20px;
  vertical-align: middle;
  margin-top:1px;
  margin-left: -50px;
  margin-right: 10px;
  color: #7F7F7F;
}
.form-group1{
  margin-top: 30px;
  margin-left: -140px;
}
.cart-img{
  max-width: 100px;
  margin-bottom: 20px;
}

.path__btn{
  border-radius: 5px;
  background: #E7E7E7;
  font-size: 12px;
  text-align: center;
  color: #1F1E23;
  margin-top: 30px;
  width: 350px;
  height: 50px;
}
</style>