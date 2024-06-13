<script setup>
"use strict";
import VueScrollSnap from 'vue-scroll-snap';
import SplashComp from "./components/SplashComp.vue"
import ProjectComp from "./components/ProjectComp.vue"
import ContactComp from "./components/ContactComp.vue"
</script>

<template>
  <vue-scroll-snap :fullscreen="true">
    <div class="item" id="splash">
      <SplashComp />
    </div>
    <div class="item" id="projects">
      <ProjectComp />
    </div>
    <div class="item" id="contact">
      <ContactComp />
    </div>
  </vue-scroll-snap>
</template>

<!-- not scoped -->
<style lang="scss">
/* General */
* {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
}
:root, :host {
  font-family: Roboto, sans-serif;
}
pre, code {
  font-family: "JetBrains Mono", monospace !important;
}
</style>

<style lang="scss" scoped>
/* containers */
#splash, #contact {
  overflow: hidden;
}
.item {
  overflow: auto;
  position: relative;
}
</style>
