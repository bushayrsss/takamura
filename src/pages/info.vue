<template>
  <div class="container__slot">
    <div>
      <p class="text">ИНФОРМАЦИЯ О ДОСТАВКЕ {{cartStore.totalItems}}</p>
      <p class="info__description">
        Мы принимаем заказы с 10.00 до 22.30 <br>
        Доставляем заказы с 11.00 до 23.20
      </p>
    </div>
    <div>
      <p class="delivery">Доставка осуществляется по зонам:</p>
      <div class="delivery__row">
        <div class="delivery__col">
          <div class="delivery__block">
            <a class="info__a" href="">ОРАНЖЕВАЯ ЗОНА</a>
            <p class="info__text">Доставка от 700 р. <br>
              Способы оплаты: картой на сайте, <br>
              картой курьеру, наличными. <br>
              Время доставки 1-1,2 часа.
            </p>
          </div>
        </div>
        <div class="delivery__col">
          <div class="delivery__block">
            <a class="info__a" href="">ГОЛУБАЯ ЗОНА</a>
            <p class="info__text">
              Доставка от 1500 р. <br>
              Оплата картой на сайте. <br>
              Время доставки 1-1,3 часа.
            </p>
          </div>
        </div>
        <div class="delivery__col">
          <div class="delivery__block">
            <a class="info__a" href="">ЗЕЛЕНАЯ ЗОНА</a>
            <p class="info__text">
              Доставка от 3000 р. <br>
              Оплата картой на сайте. <br>
              Время доставки 1-2 часа.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "../stories/useCartStore.ts";

const cartStore = useCartStore()
</script>

<style scoped>
.text{
  font-size: 24px;
  text-align: center;
  padding-top: 40px;
  font-weight: 200;
}
p, h1{
  font-weight: 200;
}
.info__description{
  font-size: 20px;
  text-align: center;
}
.delivery{
  font-size: 20px;
}
.delivery__row{
  display: flex;

}
.delivery__col{
  width: 33.33%;
}

.info__text{
  font-size: 20px;
  color: #7F7F7F;
}
.info__a{
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}
</style>