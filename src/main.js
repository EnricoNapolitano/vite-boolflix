import { createApp } from 'vue'
import "@fontsource/questrial" //imported font questrial (simil to helvetica)
import { library } from '@fortawesome/fontawesome-svg-core' // FA library
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons' // FA icon
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons' // FA icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //FA component
import App from './App.vue'

library.add(regularStar, solidStar)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
