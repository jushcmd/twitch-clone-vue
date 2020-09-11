<template>
  <figure class="avatar">

    <img :src="src" :alt="alt" :width="size" :height="size" />


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
figure{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
.avatar{
  display: flex !important;
  display: block;
  box-sizing: border-box;
  margin-right: 1rem!important;
  float: left;
  margin-top: 5px;

}
</style>