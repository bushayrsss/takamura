import {createApp, defineComponent} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.css'
import App from './App.vue'
import router from "./router.ts";
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)
app.use(defineComponent)
app.use(pinia)
app.use(router)

app.mount('#app')
