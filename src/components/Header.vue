<template>
  <header class="header">
    <Container class="header-inner">
        <nav class="nav1">
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
    <!-- Search -->
<nav>
    <form class="search">
      <input type="text" placeholder="Ara ulan"/>
        <router-link class="browse" to="/">
            <IconBrowse />
        </router-link>
    </form>
</nav>
        <nav>
        <router-link class="prime" to="/">
            <IconPrime />
        </router-link>
           <router-link class="bell" to="/">
               <IconBell />
           </router-link>
           <router-link class="whisper" to="/">
               <IconWhisper />
           </router-link>
            <router-link class="bit" to="/">
                <IconBit />
            </router-link>
       </nav>
    </Container>
  </header>
</template>

<script>

import Container from "@/components/Container";
import IconPrime from "@/icons/prime.svg"
import IconBrowse from "@/icons/browse.svg"
import IconBell from "@/icons/bell.svg"
import IconWhisper from "@/icons/whisper.svg"
import IconBit from "@/icons/bit.svg"


export default {
  name: 'MainHeader',
  components: {
    Container,
    IconPrime,
    IconBrowse,
    IconBell,
    IconWhisper,
    IconBit,
    Avatar
  }
}
</script>


<style scoped>
.header {
  background-color: ghostwhite;

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
    border-bottom: #d3d3d9;
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
    margin-left: 18px;
}

.espor {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
}
.music {
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
}
.tripoints {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
}
.prime {
    margin-left: 18px;

}
.bell {
     margin-left: 18px;

 }
.whisper {
    margin-left: 18px;

}
.browse {
    margin-left: 8px;
    margin-top: 10px;
}
.bit {
    margin-left: 18px;
}
</style>
