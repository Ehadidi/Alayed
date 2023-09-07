import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';


import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';


// import my scss
import '@/assets/scss/defaults.scss'
import '@/assets/scss/defaults-ltr.scss'
// import lightbox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});



// import fontawesome 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab)
dom.watch();

// import bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import i18n 
import VueI18n from 'vue-i18n';
import i18n from './i18n';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

import "primevue/resources/themes/lara-light-indigo/theme.css";

// import axios 
import axios from 'axios';
axios.defaults.baseURL = 'https://backend.aleayid.aait-sa.com/api/'
axios.defaults.headers.common['lang'] = `${localStorage.getItem('locale')}`;

// createApp
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('Toast', Toast)
  .use(vuetify)
  .use(i18n)
  .use(VueI18n)
  .use(ToastService)
  .use(PrimeVue)
  .use(VueGoogleMaps , {
    load: {
      key: "",
      language: 'ar',
    },
  })
  .mount('#app')