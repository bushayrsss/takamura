<template>
  <div class="container__slot">
    <p class="card__text">Корзина пуста</p>
    <router-link to="/"><button class="btn3">Перейти к покупкам</button></router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card__text{
  font-size: 45px;
  line-height: 63px;
  text-align: center;
  color: #1f1e23;
  margin-top: 100px;
  font-weight: 200;
}
p, h1{
  font-weight: 200;
}
.btn3{
  width: 240px;
  height: 50px;
  border-radius: 15px;
  background: none;
  margin-left: 450px;
}
</style>