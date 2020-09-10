<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
    <h3>Kodbilen Yayında | !çöp !dc !düş</h3>
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png'
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
h3{
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 10px;
  font-weight: bold;
}
</style>