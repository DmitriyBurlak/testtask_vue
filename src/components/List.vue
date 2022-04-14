<template>
  <div class="product-list">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .product-list {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
