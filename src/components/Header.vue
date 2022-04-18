<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ amount }} {{ currency }}</h3>
    <div class="header__button" @click="$emit('openCart')">
      <div class="bange" v-if="cart.length"><span>{{cart.length}}</span></div>
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20.5" cy="41.5" r="3.5" fill="#333"/><circle cx="37.5" cy="41.5" r="3.5" fill="#333"/><path d="M5 6L14 12L19 34H39L44 17H25" stroke="#333" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/><path d="M25 26L32.2727 26L41 26" stroke="#333" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    cart: {
      type: Array,
      default: []
    },
    currency: String,
  },
  data() {
    return {
    };
  },
  computed: {
    amount() {
      let val = 0;
      this.cart.forEach((item) => {
        val += item.price * item.count;
      });
      return val.toFixed(2);
    }
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__button {
    position: relative;
    cursor: pointer;
    margin-left: 22px;
  }
  .header__button .bange{
    position: absolute;
    background-color: #56e82c;
    border-radius: 50px;
    left: -20px;
    top: -7px;
  }
  .header__button .bange span {
    padding: 7px;
    font-size: 12px;
    font-weight: 600;
  }
  .header__button svg {
    width: 35px;
    height: 35px;
  }
</style>