<script setup>
"use strict";
</script>

<template>
  <div class="gradient-container">
    <div class="gradient"></div>
  </div>
  <div class="contact-container">
    <h1 class="contact-title">Get in Touch</h1>
    <div class="contact-links">
      <a href="https://www.linkedin.com/in/eliasrt/" target="_blank" rel="noopener noreferrer" class="contact-link">
        <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
      </a>
      <a href="https://github.com/sonicer105" target="_blank" rel="noopener noreferrer" class="contact-link">
        <font-awesome-icon :icon="['fab', 'github']" /> GitHub
      </a>
      <a href="mailto:eliasramsayturner@gmail.com" class="contact-link">
        <font-awesome-icon :icon="['fas', 'envelope']" /> Email
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.gradient {
  --size: 750px;
  --speed: 20s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  // background-image: linear-gradient(hsl(222, 84, 60, 100%), hsl(164, 79, 71));
  background-image: linear-gradient(hsl(222, 84%, 60%, 100%), hsl(164, 79%, 71%));
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 500px;
  }
}

.gradient-container {
  background-color: #071c39;
  position: relative;
  height: 100%;
  inset: 0;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
.gradient-container, .gradient-container * {
  transition: all 0.5s ease-out;
}

.contact-container {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 1px 1px 2px #999;
}

.contact-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-link {
  font-size: 1.5rem;
  color: #eee;
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 5px;

  &:hover {
    color: #fff;
    border-color: #fff;
  }

  & > .fa {
    margin-right: 0.5rem;
  }
}

@media (max-width: 768px) {
  .contact-links {
    flex-direction: column;
  }
}
</style>
