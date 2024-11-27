import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.css'
import {createPinia} from "pinia"
import App from './App.vue'
import router from "./router.ts";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
    .mount('#app')
