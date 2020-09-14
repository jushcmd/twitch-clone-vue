<template>
  <v-app>
    <!-- Header Bölümü -->
    <v-app-bar app clipped-left color="white accent-4">
      <v-app-bar-nav />
      <v-icon class="mx-1" large>mdi-twitch</v-icon>
      <v-toolbar-title class="align-center">
        <a style="font-size: 15px" href="">Takip Edilen</a>
        <a class="ml-3" style="font-size: 15px" href="">Gözat</a>
        <a class="ml-3" style="font-size: 15px" href="">Espor</a>
        <a class="ml-3" style="font-size: 15px" href="">Müzik</a>
        <v-btn class="ma-2" icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        solo
        placeholder="Ara"
        single-line
        append-icon="mdi-magnify"
        class="mt-8"
        color="black"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-crown-outline</v-icon>
      </v-btn>
      <v-btn class="ma-2" icon>
        <v-icon class="ml-3">mdi-bell</v-icon>
      </v-btn>
      <v-card-actions>
        <v-spacer />

        <v-btn color="Default" text @click="menu = false"
          ><svg
            width="20px"
            height="20px"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
            class="ScIconSVG-sc-1bgeryd-1 cMQeyU"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
              fill="#efeff1"
            ></path>
          </svg>
          Bit Al
        </v-btn>
      </v-card-actions>

      <v-btn class="ma-2" icon>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <div>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="250"
          offset-x
        >
          <template v-slot:activator="{ on }">
            <v-badge
              bordered
              bottom
              color="green accent-4"
              dot
              offset-x="10"
              offset-y="10"
            >
              <v-avatar size="40" v-on="on">
                <v-img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png"
                ></v-img>
              </v-avatar>
            </v-badge>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar>
                    <v-img
                      style="float: right"
                      src="https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png"
                    ></v-img>
                  </v-avatar>
                </v-list-item-avatar>
                <v-listem-item-badge>
                  <v-badge
                    class="mt-9"
                    bordered
                    bottom
                    color="green accent-4"
                    dot
                    offset-x="10"
                    offset-y="10"
                  >
                  </v-badge>
                </v-listem-item-badge>
                <v-list-item-content>
                  <v-list-item-title>KodBilen</v-list-item-title>

                  <v-list-item-subtitle>Çevrimiçi</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>Ayarlar</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="menu = false">
                Çıkış Yap
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <!-- Header Bölümü END -->

    <!-- Container -->
    <v-main>
      <v-container>
        <h3>Seveceğinizi düşündüğümüz Canlı kanallar</h3>
        <v-row class="mb-4">
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
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
              <v-btn icon style="float: right">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>

              <v-card-subtitle style="padding: 3px"></v-card-subtitle>
              <v-avatar class="float-left mr-4">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png"
                  alt="Kodbilen"
                />
              </v-avatar>
              <div style="font-size: 15px; font-weight: bold">
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
            </v-card>
          </v-col>
        </v-row>

        <div class="my-2">
          <h4 style="text-align: center; color: #9147ff; cursor: pointer">
            Daha Fazla Göster
          </h4>
        </div>
        <h2>
          Seveceğinizi düşündüğümüz
          <strong>Kategoriler</strong>
        </h2>
        <!-- Kategoriler Card -->
        <v-row class="mb-12">
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="6"
            lg="2"
            v-for="(item, index) in 6"
            :key="index"
          >
            <v-card class="elevation-0 justify">
              <div class="shadow-2">
                <img
                  src="https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg"
                  class=""
                />
              </div>

              <v-card-subtitle style="padding: 3px"></v-card-subtitle>
              <div>
                <v-icon class="float-right">mdi-dots-vertical</v-icon>
                <a href="#"><h3>Sadece Sohbet</h3> </a>
              </div>
              <div class=""><a href="">302.532 izleyici</a></div>
              <div class="">
                <v-responsive
                  class="text-center text-decoration-none grey lighten-2 rounded-pill d-inline-flex align-center justify-center mr-1 ml-2 ma-2 font-weight-bold grey--text"
                >
                  <a href=""
                    ><span style="font-size: 0.8rem; padding: 0 0.8rem">
                      IRL</span
                    ></a
                  >
                </v-responsive>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Kategoriler Card-1 END -->
        <hr />
        <!-- Card 2 -->
        <br />
        <h3>
          <strong style="font-size: 23px">Kodbilen</strong>
          çevrimdışıyken
        </h3>
        <v-row class="mb-4">
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
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
              <v-btn icon style="float: right">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>

              <v-card-subtitle style="padding: 3px"></v-card-subtitle>
              <v-avatar class="float-left mr-4">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/1872225b-c797-4b35-b172-007c1a1fdb66-profile_image-70x70.png"
                  alt="Kodbilen"
                />
              </v-avatar>
              <div style="font-size: 15px; font-weight: bold">
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
            </v-card>
          </v-col>
        </v-row>

        <div class="my-2">
          <h4 style="text-align: center; color: #9147ff; cursor: pointer">
            Daha Fazla Göster
          </h4>
        </div>
        <!-- Card 2 END -->
        <!-- Card 2 -->
        <br />
        <h3>Seveceğinizi düşündüğümüz Klipler</h3>
        <v-row class="mb-4">
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="4"
            v-for="(item, index) in 3"
            :key="index"
          >
            <v-card class="elevation-0 justify">
              <div class="shadow">
                <img
                  src="https://clips-media-assets2.twitch.tv/AT-cm%7C856627176-preview-480x272.jpg"
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
              <div style="font-size: 15px; font-weight: bold">
                <a href="#">Sosyal Şeriat Go brrrrrrrrr</a>
              </div>
              <div><a href=""> Kodbilen</a></div>
              <div class="clip">
                <a href="#">Klibi oluşturan: heinax3</a>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <div class="my-2">
          <hr />
        </div>
        <!-- Card 2 END -->
      </v-container>
    </v-main>
    <!-- Container END -->
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    menu: false,
    theme: false
    //
  }),
  watch: {
    theme: function (next) {
      this.$vuetify.theme.dark = next
    }
  }
}
</script>

<style>
@import './assets/styles/main.css';
</style>

<style scoped>
.shadow {
  transition: 0.5s ease;
}

.shadow:hover {
  box-shadow: 1px 1px #9147ff, 2px 2px #9147ff, 3px 3px #9147ff, 4px 4px #9147ff,
    5px 5px #9147ff, 6px 6px #9147ff;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
  transition: 0.5s ease;
}
.shadow-2 {
  transition: 0.5s ease;
}
.shadow-2:hover {
  box-shadow: 1px 1px #9147ff, 2px 2px #9147ff, 3px 3px #9147ff, 4px 4px #9147ff,
    5px 5px #9147ff, 6px 6px #9147ff;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
  transition: 0.5s ease;
}
strong {
  color: #9147ff;
  cursor: pointer;
}
strong:hover {
  color: #9147ff;
  cursor: pointer;
  text-decoration: underline;
}
.clip {
  position: absolute;
  left: 64px;
}
</style>
