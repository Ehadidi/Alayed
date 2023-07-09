import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// import my scss
import '@/assets/scss/defaults.scss'
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
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  // something vue-i18n options here ...
})


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

// createApp
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(vuetify)
  .use(VueGoogleMaps , {
    load: {
      key: "AIzaSyBNLoYGrbnQI_GMqHt6m0PSN9yA7Zvq7gA",
      // language: 'de',
    },
  })
  .use(i18n)
  .mount('#app')