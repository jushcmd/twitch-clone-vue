<template>
  <article>
  <div class="card">
    <!-- Header -->
    <header class="card-header">
      
    </header>

    <!-- media -->
    <div class="card-media">
      <img src="../images/kodbilbakkal.png">
    </div>

    <!-- actions -->

    <!-- view count -->



  </div>
  </article>
</template>

<script>
export default {
  name: 'Card',

}
</script>

<style scoped>
.card-media{
  width: 400px;
  height: auto;
  box-sizing: border-box;
  flex-direction: column !important;
  display: flex !important;
  margin: 0 !important;
  padding: 0.5rem;
}
.card-media:after{
}
.card-media:hover{
  background: #9147ff;
  background: var(--color-accent);
  transform-origin: 0 100%;
}

</style>
