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
    <router-link to="/directory/followed" class="following">
       Takip Edilen
    </router-link>
    <router-link to="/directory" class="directory">
      Gözat
    </router-link>
        <router-link to="/directory/espor" class="espor" >
            Espor
        </router-link>
        <router-link to="/directory/music" class="music">
            Müzik
        </router-link>
        <router-link to="/directory/tripoints" class="tripoints">
             ...
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

}
.header-inner{
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
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
      background-color: #d3d3d9) ;
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.following {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;

}

.directory {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
}

.espor {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
}
.music {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
}
.tripoints {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}




</style>
