<script setup>
"use strict";
const props = defineProps({
  infoClass: String
})

import { onMounted, ref } from 'vue';

const blockWrapperRef = ref(null);

onMounted(() => {
  const blockWrapper = blockWrapperRef.value;
  if (blockWrapper) {
    const handleAnimationEnd = (event) => {
      if (event.animationName.includes('fadeIn')) {
        blockWrapper.classList.add('hover-enabled');
        blockWrapper.removeEventListener('animationend', handleAnimationEnd);
        blockWrapper.removeEventListener('webkitAnimationEnd', handleAnimationEnd);
      }
    };
    blockWrapper.addEventListener('animationend', handleAnimationEnd);
    blockWrapper.addEventListener('webkitAnimationEnd', handleAnimationEnd); // For Safari and older browsers
  }
});
</script>

<template>
  <div ref="blockWrapperRef" class="info" :class="infoClass">
    <div class="title-bar">
      <img class="controls" src='data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>' aria-hidden="true">
      <span class="text">About Author</span>
    </div>
    <h1><font-awesome-icon :icon="['fas', 'hand-wave']" /> Hi, I'm Elias</h1>
    <h2>Full Stack Developer</h2>
    <a href="#projects"><font-awesome-icon :icon="['fas', 'presentation-screen']" /><span class="text">Projects</span></a>
    <a href="#contact"><font-awesome-icon :icon="['fas', 'envelope']" /><span class="text">Contact</span></a>
  </div>
</template>

<style lang="scss" scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    opacity: 0.9;
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
    opacity: 0.9;
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    opacity: 0.9;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes stayVisible {
  0%, 100% {
    opacity: 0.9;
  }
}

.info {
  background-color: #000;
  color: #fff;
  text-align: center;
  opacity: 0;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  border-radius: 1rem 1rem 0 0;
  transition: top 250ms ease-in-out, opacity 250ms ease-in-out;
  animation: 6s ease-in-out 3000ms infinite float, 1s ease-out 3000ms 1 fadeIn;
  @media (max-width: 1280px) {
    animation: 6s ease-in-out 3000ms infinite stayVisible, 1s ease-out 3000ms 1 fadeIn;
  }

  &.desktop {
    padding-bottom: 1.5rem;
    display: block;
    min-width: 300px;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  &.mobile {
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 0.8rem;
    display: none;

    @media (max-width: 1280px) {
      display: block;
    }
  }

  &.hover-enabled:hover {
    opacity: 1;
  }

  a {
    display: inline-block;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    transition: color 100ms ease-in-out, border-color 100ms ease-in-out;

    .text {
      display: inline-block;
      padding-left: 0.5em;
    }

    &:link, &:visited {
      color: #fff;
      border: 1px solid #fff;
    }
    
    &:hover, &:active {
      color: #ccc;
      border-color: #ccc;
    }
  }

  .title-bar {
    text-align: left;
    font-size: 1rem;
    background-color: #222;
    border-radius: 1rem 1rem 0 0;
    .controls {
      display: inline-block;
      padding: 0.75rem;
      vertical-align: top;
    }
    .text {
      display: inline-block;
      padding-top: 0.6rem;
      color: #fff;
    }
  }
}
</style>
