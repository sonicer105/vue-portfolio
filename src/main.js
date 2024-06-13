"use strict";
import './assets/fonts.css'

/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* Import Fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPresentationScreen, faEnvelope, faHandWave, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faPresentationScreen, faEnvelope, faHandWave, faChevronRight, faLinkedin, faGithub);

/* Code Highlighting */
import CodeBlock from 'vue3-code-block';

/* Scroll Fix (for "back" navigation) */
window.onhashchange = () => {
    if(location.hash){ // false for nothing after the #
        let hash = location.hash.slice(1);
        let el = document.getElementById(hash);
        if(el){ // false if achor's id doesn't correspond to an element
            el.scrollIntoView();
        }
    }
}

/* WEBP Detection and class addition */
let webP = new Image();
webP.onload = webP.onerror = () => {
    document.body.classList.add((webP.height == 2) ? 'webp' : 'no-webp');
};
webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

/* Bootstrap the app */
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon) // load fa
    .component('CodeBlock', CodeBlock) // load highlighting
    .mount('#app'); // mount app
