<template>
  <div id="app">
    <Header :cart="cart" :currency="currency" @openCart="openBasket = true"></Header>
    <Basket v-if="openBasket" :data="cart" @close="openBasket = false" :currency="currency" />
    <List v-else-if="products.length && !openBasket">
      <Cart v-for="product in products" :key="product.id" :data="product" :currency="currency" @click="addToCart" />
    </List>
    <Spiner v-else />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';
import Spiner from './components/ui/Spiner.vue';
import Basket from './components/Basket.vue'

export default {
  name: 'App',
  data() {
    return {
      cart: [],
      currency: 'RUB',
      products: [],
      openBasket: false,
      loading: false
    };
  },
  components: {
    Header,
    List,
    Cart,
    Basket,
    Spiner
  },
  created() {
    setInterval(this.getList, 2000)
  },
  methods: {
    async getList() {
      let data = await this.$store.dispatch('getProductsList');
      try {
        this.products = data;
      } catch(e) {
        console.log('error:', e);
      }
    },
    addToCart(id, count) {
      count = +count;

      const index = this.cart.findIndex((item) => {
        return item.id === id;
      });

      this.products.forEach((item) => {
        if(item.id == id) {
          if(this.cart[index]) {
            this.cart[index].count += count;
          } else {
            this.cart.push({
              count,
              price: item.price,
              title: item.title,
              id: item.id,
              unit: item.unit,
            })
          }
        }
      })
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>