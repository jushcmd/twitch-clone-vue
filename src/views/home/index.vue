<template>
  <div class="home">
    <h1>Home</h1>
    <h1>Kodwitch</h1>


   <br />
    <br />
    <br />

    <Card />
    <Avatar :size="40" />
    <br />
    <br />
    <br />
  </div>
</template>

<script>

import Card from "@/components/Card";
import Avatar from "@/components/Avatar";

export default {
  name: 'Home',
  components: {
    Avatar,
    Card
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
