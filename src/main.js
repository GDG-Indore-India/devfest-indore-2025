import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';

// Firebase and Analytics
import './firebase.js'; 
import { analytics } from '@/firebase.js';
import { logEvent } from 'firebase/analytics'; 

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})



// to log custom event on Firebase Analytics
router.afterEach((to) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title : to.name,
      page_path: to.fullPath
    })
  }
})


// Mount the app
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
