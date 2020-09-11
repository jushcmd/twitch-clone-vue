<template>
  <article>
  <div class="card">
    <!-- Header -->

    <header class="card-header">

    </header>

    <!-- media -->
    <div class="card-media">
      <div class="card">
        <div class="live">
        </div>
      <img src="../images/kodbilbakkal.png">
          <div>

        </div>
      </div>
      <Avatar :size="40" />
        <div class="tw-ellipsis tw-font-size-5">

          <a href="https://www.twitch.tv/kodbilen">
            <h4>Kodbilen Yayında | !çöp !dc !düş</h4>
          </a>

        </div>
      <a href="https://www.twitch.tv/kodbilen">
        <h3 style="float: left">KodBilen</h3>
      </a>
      <div style="float: left; margin-left: 10px">
        <a href="https://www.twitch.tv/kodbilen">
          <h3 style="float: left">KodBilen</h3>
        </a>

      </div>

      </div>


    <!-- actions -->

    <!-- view count -->



  </div>

  </article>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  name: 'Card',
  components: {
    Avatar,
  },
}
</script>

<style scoped>

.card{

  margin-right: 1rem !important;
  img{
    .live{
      z-index: -1;
      position: absolute;
      height: 30px;
      background-color: red;
      left: 20px;
      top: 20px;
    }
    width: 400px;
    height: 248px;
    box-sizing: border-box;
    flex-direction: column !important;
    display: flex !important;
    margin: 0 !important;
    padding: 0.3rem;
  }
  .card:hover{
    .live{
      position: absolute;
      height: 30px;
      background-color: red;
      left: 20px;
      top: 20px;
    }
      background: #9147ff;
      background: var(--color-accent);
      transform-origin: 0 100%;
      transition: transform .1s ease;
      transform: scaleY(1);
      transition-delay: 75ms;
  }
}

.card-media{
  float: left;

}
.tw-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  align-items: flex-start !important;
  display: flex !important;

}
.tw-font-size-5 {
  font-size: var(--font-size-6) !important;
}

</style>
