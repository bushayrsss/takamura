<template>
  <div class="container__slot">
    <div>
      <p class="text">ИНФОРМАЦИЯ О ДОСТАВКЕ</p>
      <p class="info__description">
        Мы принимаем заказы с 10.00 до 22.30 <br>
        Доставляем заказы с 11.00 до 23.20
      </p>
      <p class="map__a"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.065829127636!2d37.606776376735674!3d55.600867973028286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab27ac4962c83%3A0xadb48ddc5dd731e7!2sTakamura%20sushi!5e0!3m2!1sru!2skg!4v1730803253036!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
      <router-link to="/"><button class="btn3">Посмотреть списком</button></router-link>
    </div>
  </div>
</template>

<script setup lang="ts">

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
.map__a{
  margin-left: 270px;
  margin-top: 50px;
}
.btn3{
  width: 220px;
  height: 50px;
  border-radius: 15px;
  background: none;
  margin-left: 460px;
  margin-top: 50px;
}
</style>