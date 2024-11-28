<template>
  <header class="header">
    <div class="container">
      <div class="d-flex ">
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
          <router-link to="/cart">
            <img src="../assets/img/cart3.svg" alt="#">
            <span>{{cartStore.totalItems}}</span>
          </router-link>
          <router-link to="" @click="visible = true">
            <img src="../assets/img/menu.svg" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <div v-if="visible" class="menu">
    <div class="d-flex justify-content-between mb-5">
      <div style="width: 30px">
        <img  src="../assets/img/logo.png.svg" alt="#">
      </div>
      <span @click="visible = false" style="cursor: pointer;">X</span>
    </div>
    <ul>
      <li v-for="(link, index) in links">
        <router-link @click="visible = false" :to="link.to">
          {{link.name}}
        </router-link>
      </li>
    </ul>
  </div>
  <div style="padding-top: 100px;">
    <div class="container">
      <slot/>
    </div>
  </div>
  <footer>
    <div class="container">
      <p class="footer__number">+7 (499) 112-38-17</p>
      <p class="footer__a">feedback@takamura-eats.ru <br>
        сотрудничество
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useCartStore} from "../stores/useCartStore.ts";

const inputCategory = ref('set')

const cartStore = useCartStore()

const visible = ref(false)

const links =  [
    {
      name: 'Программа лояльности',
      to: '/program',
      command: () => {
        inputCategory.value = 'set'
      }
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
      to: '/',
      command: () => {
        inputCategory.value = 'set'
      }
    },
    {
      name:'Суши',
      to: '/',
      command: () => {
        inputCategory.value = 'sushi'
      }
    },
    {
      name:'Роллы',
      to:'/',
      command: () => {
        inputCategory.value = 'rolly'
      }
    },
    {
      name:'Теплые роллы',
      to: '/',
      command: () => {
        inputCategory.value = 'rolly2'
      }
    },
    {
      name:'Маки',
      to: '/',
      command: () => {
        inputCategory.value = 'mak'
      }
    },
    {
      name:'Салаты',
      to:'/',
      command: () => {
        inputCategory.value = 'salad'
      }
    },
    {
      name:'Соусы',
      to:'/',
      command: () => {
        inputCategory.value = 'sous'
      }
    },
    {
      name:'Контакты',
      to: '/contact'
    }
]

</script>

<style scoped>

</style>