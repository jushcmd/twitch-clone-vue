<template>
  <div class="home">
    <div>
    <h3  style="font-weight: 600!important; font-size: 25px">Seveceğinizi düşündüğümüz Canlı kanallar</h3>
    </div>
    <br />

    <Card /><Card /><Card />

    <br />
  </div>
</template>

<script>

import Card from "@/components/Card";

export default {
  name: 'Home',
  components: {
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
