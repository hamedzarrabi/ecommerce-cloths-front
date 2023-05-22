import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons';

import { far } from '@fortawesome/free-regular-svg-icons';

import { dom } from "@fortawesome/fontawesome-svg-core";


import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";


library.add(faAngleDown);
library.add(faAngleUp);
library.add(faSearch);
library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

createApp(App)
.use(store)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
