<template>
  <v-app>
    <!-- <v-main> -->
    <SiteHeader></SiteHeader>

    <v-main class="body-containt" :class="{ 'homeBody': isIndexPage }">
      
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <!-- <transition name="pageView">
        <router-view :Reffre="Reffre" />
      </transition> -->
      
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
.v-overlay__content{
  font-family: 'main_font', sans-serif !important;
}


@font-face {
  font-family: 'main_font';
  src: url('@/assets/webfonts/URW-DIN-Arabic.ttf');
}

a {
  text-decoration: none !important;
}

.pageView-enter-active {
  animation: fadeDown .5s forwards;
}

.pageView-leave-active {
  animation: fadeDown 0.5s reverse;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
