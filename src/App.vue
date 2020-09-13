<template>
  <v-app>
    <!-- Header Bölümü -->

    <!-- Header Bölümü END -->

    <!-- Container -->
    <v-main>
      <v-container>
        <h3>Seveceğinizi düşündüğümüz Canlı kanallar</h3>
        <v-row class="mb-4">
          <v-col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="(item, index) in 3"
            :key="index"
          >
            <v-card class="elevation-0 justify">
              <div class="shadow">
                <img
                  src="https://raw.githubusercontent.com/SelimPolat16/twitch-clone-vue/vue_eskiversion/src/images/kodbilbakkal.png"
                  class=""
                />
              </div>

              <v-card-subtitle style="padding: 3px"></v-card-subtitle>
              <v-avatar class="float-left mr-4">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png"
                  alt="Kodbilen"
                />
              </v-avatar>
              <div>
                <a href="#"> Kodbilen Yayında | !çöp !düş</a>
              </div>
              <div><a href=""> Kodbilen</a></div>
              <div class="ml-16"><a href="">Bilim ve Teknoloji</a></div>
              <div class="ml-15">
                <v-responsive
                  class="text-center text-decoration-none grey lighten-2 rounded-pill d-inline-flex align-center justify-center mr-1 ml-2 ma-2 font-weight-bold grey--text"
                >
                  <a href=""
                    ><span style="font-size: 0.8rem; padding: 0 0.8rem">
                      Türkçe</span
                    ></a
                  >
                </v-responsive>
                <v-responsive
                  class="text-center grey lighten-2 rounded-pill d-inline-flex align-center justify-center ml-1 ma-1 font-weight-bold grey--text"
                >
                  <a href=""
                    ><span style="font-size: 0.8rem; padding: 0 0.8rem">
                      Programlama</span
                    ></a
                  >
                </v-responsive>
              </div>
              <v-card-text> </v-card-text>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- Container END -->
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
@import './assets/styles/main.css';
</style>

<style scoped>
.shadow {
  position: relative;
  transition: 0.5s ease;
}
.shadow:hover {
  transform: translateY(-5px);
  transform: translateX(6px);
  transition: 0.5s ease;
  border-bottom: 8px solid #660099;
  border-left: 7px solid #290099;
}
</style>
