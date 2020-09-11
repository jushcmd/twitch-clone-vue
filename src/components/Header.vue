<template>
  <header class="header">
    <Container class="header-inner">
      <nav>
        <router-link to="/" class="twitchmainicon">
          <TwitchMainİcon />
        </router-link>
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
      <input type="text" placeholder="Ara"/>
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
          <router-link class="bital" to="/">
            Bit Al
          </router-link>
          <router-link>
            <HeaderSahip />
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
import HeaderSahip from "@/components/Sahipbilgisi.vue"
import TwitchMainİcon from "@/icons/twitchmainicon.svg"


export default {
  name: 'MainHeader',
  components: {
    Container,
    IconPrime,
    IconBrowse,
    IconBell,
    IconWhisper,
    IconBit,
    HeaderSahip,
    TwitchMainİcon
  }
}
</script>


<style scoped>
.header {
  background-color: ghostwhite;
  height: 50px;

}
.header-inner{
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50px;
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
      background-color: #d3d3d9);
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.following {
  position: absolute;
  top: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 13px;
}
following:hover {
  position: absolute;
  top: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  margin-left: 13px;

}


.directory {
  position: absolute;
  top: 10px;
  padding-left: 100px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
    margin-bottom: 19px;
}

.espor {
  position: absolute;
  top: 10px;
  padding-left: 150px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
    margin-bottom: 19px;
}
.music {
  position: absolute;
  top: 10px;
  padding-left: 200px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
    margin-bottom: 19px;
}
.tripoints {
  position: absolute;
  top: 3px;
  padding-left: 260px;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    margin-left: 18px;
    margin-bottom: 19px;
}
.prime {
    margin-left: 18px;
    text-align: right;
    position: inherit;
    float: right;
}
.bell {
     margin-left: 18px;
     text-align: right;
     position: inherit;
    float: right;
 }
.whisper {
    margin-left: 18px;
    text-align: right;
    position: inherit;
    float: right;
}
.browse {
    margin-left: 8px;
    margin-top: 10px;
    position: inherit;
}
.bit {
    margin-left: 18px;
    text-align: right;
    position: inherit;
    float: right;
}

.input {
  width: 341px;
  height: 27px;
  background-color: var(--color-background-input);
}
.bital {
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  margin-left: 8px;
  margin-bottom: 30px;
  text-align: right;
  position: inherit;
  float: right;

}
.twitchmainicon {


}


</style>
