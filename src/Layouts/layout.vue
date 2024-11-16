<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img src="../assets/img/logo.png.svg" alt="#">
        </div>
      </router-link>
      <div class="d-flex align-items-center ">
        <a class="phone" href="tel:+7(499)112-38-17">+7(499)112-38-17</a>
        <router-link to="/info">
          <img class="info" src="../assets/img/info22.png.svg" alt="#">
        </router-link>
        <router-link to="/map">
          <img class="map" src="../assets/img/map22.png.svg" alt="#">
        </router-link>
        <router-link to="/card">
          <img src="../assets/img/cart.svg" alt="#">
        </router-link>
        <router-link to="" @click="visible = true">
          <img src="../assets/img/menu.svg" alt="">
        </router-link>
      </div>
    </div>
    <div v-if="visible" class="menu">
      <div class="d-flex justify-content-between mb-5">
        <div style="width: 30px">
          <img  src="../assets/img/logo.png.svg" alt="#">
        </div>
        <span @click="visible = false" style="cursor: pointer;">X</span>
      </div>
      <ul>
<!--        <li>-->
<!--            <router-link to="/program">-->
<!--              Программа лояльности-->
<!--            </router-link>-->
<!--          </li>-->
<!--        <router-link to="/promotion">-->
<!--          <li>-->
<!--            Акции-->
<!--          </li>-->
<!--        </router-link>-->

<!--          <li>-->
<!--            <router-link to="/">Меню</router-link>-->
<!--          </li>-->
<!--          <li>-->
<!--            <router-link to="/">Наборы</router-link>-->
<!--          </li>-->
<!--        <li><a  href="#">Суши</a></li>-->
<!--        <li><a href="#">Роллы</a></li>-->
<!--        <li><a href="#">Теплые роллы</a></li>-->
<!--        <li><a href="#">Маки</a></li>-->
<!--        <li><a href="#">Салаты</a></li>-->
<!--        <li><router-link to="/contact">Контакты</router-link></li>-->
        <li v-for="(link, index) in links">
          <router-link @click="visible = false" :to="link.to">
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <slot/>
    <footer>
        <p class="footer__number">+7 (499) 112-38-17</p>
        <p class="footer__a">feedback@takamura-eats.ru <br>
          сотрудничество
        </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)

const links = [
    {
      name: 'Программа лояльности',
      to: '/program'
    },
    {
      name: 'Акции',
      to: '/promotion'
    },
    {
      name:'Меню',
      to: '/'
    },
    {
      name: 'Наборы',
      to: '/'
    },
    {
      name:'Суши',
      to: '/'
    },
    {
      name:'Роллы',
      to:'/'
    },
    {
      name:'Теплые роллы',
      to: '/'
    },
    {
      name:'Маки',
      to: '/'
    },
    {
      name:'Салаты',
      to:'/'
    },
    {
      name:'Соусы',
      to:'/'
    },
    {
      name:'Контакты',
      to: '/contact'
    }
]

</script>

<style scoped>

</style>