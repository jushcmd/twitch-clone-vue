<template>
  <header class="header">

    <router-link class="home" to="/">
      <IconHome />
    </router-link>
    <form class="form">
      <input type="text" placeholder="Ara">
    </form>
    <nav>
    <router-link to="/directory/followed">
        <IconHeart />
    </router-link>
    <router-link to="/directory">
      <IconBrowse />
    </router-link>
    </nav>
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
.header {
  background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 24px;
}

.form {
  width: 341px;
  height: 27px;
  background-color: var(--color-background-input);
}
.home {




}
</style>
