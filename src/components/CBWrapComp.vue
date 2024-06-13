<script setup>
"use strict";
const props = defineProps({
  class: String,
  code: String,
  lang: String,
  title: String
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
  <div ref="blockWrapperRef" class="block-wrapper" :class="class">
    <div class="title-bar">
      <img class="controls" src='data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>' aria-hidden="true">
      <span class="text">{{ title || 'Terminal' }}</span>
    </div>
    <CodeBlock class="code-block" :code="code" codeBlockRadius="0" :copyButton="false" height="25rem" :highlightjs="true" :lang="lang" />
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

@mixin stagger-windows($index) {
  z-index: $index + 2;
  top: ($index * 6) + em;
  left: ($index * 4) + em;
  animation-delay: ($index * 400) + 1000 + ms;

  @media (max-width: 1280px) {
    top: ($index * 3) + em;
  }

  &.hover-enabled:hover {
    top: (($index * 6) - 1) + em;

    @media (max-width: 1280px) {
      top: (($index * 3) - 1) + em;
    }
  }
}

.block-wrapper {
  background-color: #000;
  transition: top 250ms ease-in-out, opacity 250ms ease-in-out;
  opacity: 0;
  animation: float 6s ease-in-out infinite, fadeIn 1s ease-out;
  @media (max-width: 1280px) {
    animation: stayVisible 6s ease-in-out infinite, fadeIn 1s ease-out;
  }
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  border-radius: 1em 1em 0 0;

  @for $i from 1 through 5 {
    &.block-#{$i} {
      @include stagger-windows($i - 1);
    }
  }

  &.hover-enabled:hover {
    opacity: 1 !important;
    z-index: 101;
  }

  @media (max-width: 1280px) {
    left: 0 !important;
  }

  .title-bar {
    background-color: #222;
    border-radius: 1em 1em 0 0;
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

<style lang="scss">
  .block-wrapper pre[class*="language-"] {
    background-color: transparent;
  }
</style>
