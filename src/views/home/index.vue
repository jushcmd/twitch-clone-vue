<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Twitch cloneee</CustomText>
    <IconHome />
  </div>
</template>

<script>

import CustomText from '@/components/CustomText'
import IconHome from '../../icons/home.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
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
