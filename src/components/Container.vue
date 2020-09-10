<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
.container {
  max-width: 1315px;
  max-height: 50px;
  margin-right: auto;
  margin-left: auto;
}

</style>