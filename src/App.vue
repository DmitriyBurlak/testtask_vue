<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header>
    <List v-if="products.length">
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

export default {
  name: 'App',
  data() {
    return {
      cart: [],
      currency: 'VGTB',
      products: [],
    };
  },
  components: {
    Header,
    List,
    Cart,
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
      this.products.forEach(item => {
        if(item.id == id) {
          this.cart.push({
            amount: count,
            price: item.price,
            title: item.title,
          })
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