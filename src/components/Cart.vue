<template>
  <div class="card">
    <p class="card-title">{{ data.title }}</p>
    <img class="card-image" :src="data.image" alt="">
    <p class="card-price">Цена: {{ data.price }} {{ currency }}</p>

    <div class="card-input">
      <input type="number" v-model="count">
      <span>кг</span>
    </div>

    <button @click="$emit('click', data.id, count), count = null" :disabled="!count"> В корзину </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: null
    }
  },
  props: {
    data: Object,
    currency: String,
  },
};
</script>

<style>
  .card {
    width: calc(100% / 3 - 10px);
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 15px;
  }
  .card-image {
    width: 100%;
  }
  .card-input input {
    margin-right: 10px;
  }
  button {
    padding: 5px;
    margin: 5px;
  }
  @media (max-width: 840px) {
    .card {
      width: calc(100% / 2 - 10px);
    }
  }
  @media (max-width: 420px) {
    .card {
      width: 100%;
    }
  }
</style>
