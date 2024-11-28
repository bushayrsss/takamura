<template>
  <section>
    <div class="container__slot">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row m-0">
                <div class="col-6">
                  <div class="block">
                    <img src="../assets/img/carousel1.png" alt="#">
                  </div>
                </div>
                <div class="col-6">
                  <div class="block">
                    <h1 style="margin-bottom: 20px">РОЛЛЫ TAKAMURA</h1>
                    <p>
                      Мы выбираем качественные морепродукты, соединяем <br>
                      их со свежайшими овощами и добавляем немного риса
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row m-0">
                <div class="col-6">
                  <div class="block">
                    <img class="carousel__img" src="../assets/img/car2.jpg" alt="#">
                  </div>
                </div>
                <div class="col-6">
                  <div class="block">
                    <h1>РОЛЛЫ TAKAMURA</h1>
                    <p>
                      Лосось, тунец, тигровые креветки и морской <br>
                      гребешок в наших роллах приправлены <br>
                      исключительно натуральными соусами
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row m-0">
                <div class="col-6">
                  <div class="block">
                    <img class="carousel__img" src="../assets/img/car3.jpg" alt="#">
                  </div>
                </div>
                <div class="col-6">
                  <div class="block">
                    <h1>РОЛЛЫ TAKAMURA</h1>
                    <p>
                      У нас особая любовь к авокадо, и <br>
                      поэтому мы заворачиваем роллы в <br>
                      него и добавляем в начинку. <br>
                      Авокадо много не бывает!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span aria-hidden="true">что еще -></span>
          </button>
        </div>
    </div>
    <div class="container__slot">
      <div class="btn__menu">
        <div class="d-flex gap-3">
          <button class="btn1" @click="inputCategory = 'set'">Наборы</button>
          <button class="btn1" @click="inputCategory = 'sushi'">Суши</button>
          <button class="btn1" @click="inputCategory = 'rolly'">Роллы</button>
          <button class="btn1" @click="inputCategory = 'rolly2'">Теплые роллы</button>
          <button class="btn1" @click="inputCategory = 'mak'">Маки</button>
          <button class="btn1" @click="inputCategory = 'salat'">Салаты</button>
          <button class="btn1" @click="inputCategory = 'sous'">Соусы</button>
        </div>
      </div>
    </div>
    <div class="container__slot">
      <div class="product-list row">
        <productItem
            v-for="product in filtered"
            :key="product.id"
            :product="product"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, watch} from "vue";

const inputCategory = ref('set')
import productItem from "../components/productItem.vue"
let products  = reactive([
  {
    id:0,
    name:'LUX',
    description:'Калифорния с камчатским крабом',
    weight:'902gr',
    portion:'32pcs',
    price:2650,
    image:'https://takamura-eats.ru/userfls/shop/small/1221_lux.jpg',
    count:0,
    filterName: 'set'
  },
  {
    id:1,
    name:'Микс 4',
    description:'Калифорния с камчатским крабом' +
        'и манго, Креветка в авокадо,' +
        'Филадельфия, Дракон с креветкой',
    weight:'900gr',
    portion:'32pcs',
    price:2360,
    image:'https://takamura-eats.ru/userfls/shop/small/1222_miks-4.jpg',
    count:0,
    filterName: 'set'
  },
  {
    id:2,
    name:'Микс 5',
    description:'Филадельфия, Креветка в' +
        'авокадо, Эби темпура',
    weight:'708gr',
    portion:'32pcs',
    price:1560,
    image:'https://takamura-eats.ru/userfls/shop/small/1223_miks-5.jpg',
    count:0,
    filterName: 'set'
  },
  {
    id:3,
    name:'Микс 7',
    description: 'Запеченный тунец с сыром',
    weight:'870gr',
    price:2650,
    image:'https://takamura-eats.ru/userfls/shop/small/1224_miks-7.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:4,
    name:'Угорь-Лосось',
    description: 'Филадельфия люкс, Дракон,' +
        'Креветка в авокадо\n' ,
    weight:'732gr',
    price:2060,
    image:'https://takamura-eats.ru/userfls/shop/small/1306_ugor-losos.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:5,
    name:'Классика',
    description: 'Лосось, Угорь, Тунец-авокадо,' +
        'Креветка, Авокадо, Огурец',
    weight:'605gr',
    price:1350,
    image:'https://takamura-eats.ru/userfls/shop/small/1305_klassika.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:6,
    name:'Острый набор',
    description: 'Креветка-тунец, Креветка-' +
        'лосось, Креветка-гребешок' ,
    weight:'420gr',
    price:1290,
    image:'https://takamura-eats.ru/userfls/shop/small/1271_ostryy-nabor.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:7,
    name:'Теплые-холодные',
    description:'Эби темпура, Запеченный угорь,' +
        'Филадельфия люкс, Креветка FIT',
    weight:'1000gr',
    price:2395,
    image:'https://takamura-eats.ru/userfls/shop/small/1242_teplye-kholodnye.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:8,
    name:'Микс 3',
    description: 'Запеченный тунец с сыром,' +
        'Сливочная креветка',
    weight:'317gr',
    price:720,
    image:'https://takamura-eats.ru/userfls/shop/small/1307_miks-3.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:9,
    name:'Микс 8',
    description: 'Филадельфия, Креветка Fit',
    weight:'351gr',
    price:960,
    image:'https://takamura-eats.ru/userfls/shop/small/1512_miks-8.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:10,
    name:'Запеченный набор',
    description: 'Запеченный лосось, Запеченный' +
        'краб, Запеченный угорь  (В' +
        'СОСТАВЕ ПРИСУТСТВУЕТ МАЙОНЕЗ)',
    weight:'615gr',
    price:910,
    image:'https://takamura-eats.ru/userfls/shop/small/1240_zapechennyy-.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:11,
    name:'Запеченный 2',
    description: 'Запеченный угорь, Запеченный' +
        'лосось, Запеченная Филадельфия',
    weight:'748gr',
    price:1495,
    image:'https://takamura-eats.ru/userfls/shop/small/1309_zapechennyy-2-.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:12,
    name:'Темпура',
    description: 'Эби темпура, Унаги темпура,' +
        'Филадельфия темпура' ,
    weight:'758gr',
    portion: '24pcs',
    price:1560,
    image:'https://takamura-eats.ru/userfls/shop/small/1270_tempura.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:13,
    name:'Микс 11',
    description:'Филадельфия, Дракон, Эби' +
        'темпура',
    weight: '767gr',
    portion:'24pcs',
    price:1870,
    image:'https://takamura-eats.ru/userfls/shop/small/1669_miks-11.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:14,
    name:'Микс 12',
    description:'Филадельфия, Дракон, Сливочная' +
        'креветка, Эби темпура',
    weight:'978gr',
    portion:'32pcs',
    price:2295,
    image:'https://takamura-eats.ru/userfls/shop/small/1670_miks-12.jpg',
    count: 0,
    filterName: 'set'
  },
  {
    id:15,
    name:'Угорь',
    description: 'Угорь, рис ',
    weight: '101g',
    portion: '6pcs',
    image: 'https://takamura-eats.ru/userfls/shop/small/1391_ugor.jpg',
    count: 0,
    filterName: 'sushi'
  },
  {
    id:16,
    name:'Филадельфия FIT',
    description: 'Лосось, сливочный сыр, авокадо,' +
        ' икра тобико',
    weight: '96g',
    portion: '4pcs',
    image: 'https://takamura-eats.ru/userfls/shop/small/1643_filadelfiya-fit.jpg',
    count: 0,
    filterName: 'sushi'
  },
  {
    id:17,
    name:'Вулкан',
    description: 'Угорь, лосось, сливочный сыр' +
        ' Cremette, соус унаги',
    weight: '103g',
    portion: '4pcs',
    image: 'https://takamura-eats.ru/userfls/shop/small/1623_vulkan.jpg',
    count: 0,
    filterName: 'sushi'
  },
  {
    id:18,
    name:'Сливочный угорь',
    description: 'Угорь, копченый лосось, сливочный' +
        ' сыр, огурец',
    weight: '101g',
    portion: '4pcs',
    image: 'https://takamura-eats.ru/userfls/shop/small/1625_slivochnyy-ugor.jpg',
    count: 0,
    filterName: 'sushi'
  },
  {
    id:19,
    name: 'Нигири Гребешок',
    description:'Гребешок, рис',
    weight: '27g',
    portion: '1pcs',
    price: 180,
    image: 'https://takamura-eats.ru/userfls/shop/small/1499_nigiri-grebeshok.jpg',
    count: 0,
    filterName: 'rolly'
  },
  {
    id:20,
    name: 'Нигири Угорь',
    description:'Угорь, рис',
    weight: '27g',
    portion: '1pcs',
    price:150,
    image: 'https://takamura-eats.ru/userfls/shop/small/1500_nigiri-ugor.jpg',
    count: 0,
    filterName: 'rolly'
  },
  {
    id:21,
    name: 'Гункан тобико',
    description:'Икра тобико, рис',
    weight: '29g',
    portion: '1pcs',
    price: 100,
    image: 'https://takamura-eats.ru/userfls/shop/small/1511_gunkan-tobiko.jpg',
    count: 0,
    filterName: 'rolly'
  },
  {
    id:22,
    name: 'Гункан чука',
    description:'Водоросли вакаме, рис',
    weight: '29g',
    portion: '1pcs',
    price: 80,
    image: 'https://takamura-eats.ru/userfls/shop/small/1510_gunkan-chuka.jpg',
    count: 0,
    filterName: 'rolly'
  },
  {
    id:23,
    name: 'Запеченный тунец с сыром',
    description: '\n' +
        'Тунец еллоуфин, сливочный сыр, сыр гауда, соус шрирача, кунжут',
    weight: '211g',
    portion: '8pcs',
    price: '560',
    image: 'https://takamura-eats.ru/userfls/shop/small/1413_zapechennyy-tunets-s-syrom.jpg',
    count: 0,
    filterName: 'rolly2'
  },
  {
    id:24,
    name: 'Запеченная Филадельфия ',
    description: 'Лосось, сливочный сыр, огурец',
    weight: '128g',
    portion: '4pcs',
    price: '345',
    image: 'https://takamura-eats.ru/userfls/shop/small/1313_zapechennaya-filadelfiya.jpg',
    count: 0,
    filterName: 'rolly2'
  },
  {
    id:25,
    name: 'Три сыра лосось\n',
    description: 'Лосось, сыр чеддер, сыр гауда, сливочный сыр Cremette',
    weight: '105g',
    portion: '4pcs',
    price: '275',
    image: 'https://takamura-eats.ru/userfls/shop/small/1417_tri-syra-losos.jpg',
    count: 0,
    filterName: 'rolly2'
  },
  {
    id:26,
    name: 'Запеченный лосось с\n' +
        'сыром',
    description: 'Лосось, сливочный сыр, сыр\n' +
        'гауда, соус шрирача, кунжут\n',
    weight: '106g',
    portion: '4pcs',
    price: '385',
    image: 'https://takamura-eats.ru/userfls/shop/small/1414_zapechennyy-losos-s-syrom.jpg',
    count: 0,
    filterName: 'rolly2'
  },
  {
    id:27,
    name:'Запеченный краб',
    description: 'Краб (имитация), сливочный сыр,' +
        ' омлет томаго, огурец, соус ' +
        ' яки (майонезная основа)',
    weight: '123g',
    portion: '4pcs',
    price: 220,
    image: 'https://takamura-eats.ru/userfls/shop/small/1431_zapechennyy-krab.jpg',
    count: 0,
    filterName: 'mak'
  },
  {
    id:28,
    name:'Запеченный угорь',
    description: 'Угорь, сливочный сыр, омлет ' +
        'томаго, огурец, соус яки ' +
        '(майонезная основа)\n' +
        '\n',
    weight: '123',
    portion: '4pcs',
    price: 235,
    image: 'https://takamura-eats.ru/userfls/shop/small/1433_zapechennyy-ugor.jpg',
    count: 0,
    filterName: 'mak'
  },
  {
    id:29,
    name:'Запеченная креветка',
    description: 'Тигровые креветки, сливочный сыр,' +
        ' омлет томаго, огурец, соус ' +
        'яки(майонезная основа)',
    weight: '246g',
    portion: '8pcs',
    price: 470,
    image: 'https://takamura-eats.ru/userfls/shop/small/1433_zapechennyy-ugor.jpg',
    count: 0,
    filterName: 'mak'
  },
  {
    id:30,
    name:'Запеченный гребешок',
    description: 'Гребешок, сливочный сыр, омлет ' +
        'томаго, огурец, соус' +
        ' яки (майонезная основа)',
    weight: '123g',
    portion: '4pcs',
    price: 245,
    image: '  https://takamura-eats.ru/userfls/shop/small/1435_zapechennyy-grebeshok.jpg',
    count: 0,
    filterName: 'mak'
  },
  {
    id:31,
    name:'Салат чука\n',
    description: 'Водоросли вакаме, ореховый соус\n',
    weight: '100g',
    price: 250,
    image: 'https://takamura-eats.ru/userfls/shop/small/1439_salat-chuka.jpg',
    count: 0,
    filterName: 'salat'
  },
  {
    id:32,
    name:'Унаги соус',
    weight: '30g',
    price: 40,
    image: 'https://takamura-eats.ru/userfls/shop/small/1440_unagi-sous.jpg',
    count: 0,
    filterName: 'sous'
  },
  {
    id:33,
    name: 'Соус шрирача',
    weight: '30g',
    price: 40,
    image: 'https://takamura-eats.ru/userfls/shop/small/1442_sous-shriracha.jpg',
    count: 0,
    filterName: 'sous'
  },
  {
    id:34,
    name: 'Васаби',
    weight: '15g',
    price: 30,
    image: 'https://takamura-eats.ru/userfls/shop/small/1460_vasabi.jpg',
    count: 0,
    filterName: 'sous'
  },
  {
    id:35,
    name: 'Имбирь',
    weight: '26g',
    price: 30,
    image: 'https://takamura-eats.ru/userfls/shop/small/1461_imbir-.jpg',
    count: 0,
    filterName: 'sous'
  }
]);

let filtered = products.filter(el => {
  if (inputCategory.value === el.filterName) {
    return el
  }
})
watch(inputCategory, async () => {
  filtered = products.filter(el => {
    if (inputCategory.value === el.filterName) {
      console.log(el)
      return el
    }
  })
})
</script>

<style scoped>
.pre{
  display: none;
}

</style>