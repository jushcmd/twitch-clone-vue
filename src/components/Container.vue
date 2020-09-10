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
  max-width: 960px;
  max-height: 30px;
  margin-right: auto;
  margin-left: auto;
}

</style>