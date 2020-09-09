<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Twitch cloneee</CustomText>

  </div>
</template>

<script>

import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<style scoped>
h1 {
  color: red;

  @media (--t) {
    color: blue;
  }
}
</style>
