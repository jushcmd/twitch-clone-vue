<template>
  <header class="header">
    <Container class="header-inner">
    <router-link class="home" to="/">
      <IconHome />
    </router-link>
    <!-- Search -->
    <form class="search">
      <input type="text" placeholder="Ara ulan" />
    </form>
    <nav>
    <router-link to="/directory/followed">
       Takip Edilenler
    </router-link>
    <router-link to="/directory">
      Gözat
    </router-link>
    </nav>
    </Container>
  </header>
</template>

<script>
import IconHome from '@/icons/home.svg'
import Container from "@/components/Container";

export default {
  name: 'MainHeader',
  components: {
    IconHome,
    Container
  }
}
</script>


<style scoped>
.header {
  background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 50px;
}
.header-inner{
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}


.search{
  display: none;
  @media (--t) {
    display: block;
    text-align: center;

    input {
      width: 215px;
      height: 28px;
      border: 1px solid #ccc);
      background-color: #ffffff) ;
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
