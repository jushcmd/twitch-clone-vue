<template>
  <header>
    <router-link class="home" to="/">
      <IconHome />
    </router-link>
    <router-link to="/followed">
        <IconHeart />
    </router-link>
    <router-link to="/directory">
      <IconBrowse />
    </router-link>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import IconHeart from '@/icons/heart.svg'
import IconBrowse from '@/icons/browse.svg'

export default {
  name: 'MainHeader',
  components: {
    IconHome,
    IconHeart,
    IconBrowse
  }
}
</script>


<style scoped>
.home{

}
</style>
