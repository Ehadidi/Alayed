<template>
  <v-app>
    <!-- <semipolar-spinner :animation-duration="2000" :size="65" color="#ff1d5e" /> -->
    <!-- <v-main> -->
    <SiteHeader></SiteHeader>

    <v-main class="body-containt" :class="{ 'homeBody': isIndexPage }">
      <router-view :Reffre="Reffre" />
    </v-main>

    <SiteFooter :socials="socials" :Partners="Partners"></SiteFooter>
    <!-- </v-main> -->
    <siteOption></siteOption>
  </v-app>
</template>


<script>
import axios from 'axios';
import SiteHeader from '@/components/Layouts/SiteHeader.vue'
import SiteFooter from '@/components/Layouts/SiteFooter.vue'
import siteOption from '@/components/Layouts/siteOptions.vue'

// import { SemipolarSpinner } from 'epic-spinners'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    siteOption,
    // SemipolarSpinner
  },
  data() {
    return {
      socials: [],
      Partners: [],
      Reffre: ''
    }
  },
  methods: {
    async get_home() {
      await axios.get('home')
        .then((res) => {
          this.socials = res.data.data.socials
          this.Partners = res.data.data.Partners
        })
    },
  },
  computed: {
    shouldAddClass() {
      return this.$i18n.locale === 'en';
    },
    isIndexPage() {
      return this.$route.path === '/';
    }
  },
  mounted() {
    if (this.shouldAddClass) {
      document.body.classList.add('ltr');
    }
    this.get_home()
  },

}
</script>
<style lang="scss">
.v-application {
  direction: rtl !important;
  font-family: 'main_font', sans-serif !important;
}

#app {
  direction: rtl !important;
  font-family: 'main_font', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@font-face {
  font-family: 'main_font';
  src: url('@/assets/webfonts/URW-DIN-Arabic.ttf');
}

a {
  text-decoration: none !important;
}

</style>
