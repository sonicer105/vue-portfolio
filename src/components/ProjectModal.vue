<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: false // Make it not required to handle the null state
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal">
      <button class="close-btn" @click="emit('close')">×</button>
      <transition name="fade-content">
        <div v-if="project">
          <h2>{{ project.title }}</h2>
          <picture>
            <source v-for="image in project.images" :key="image.type" :srcset="image.url" :type="'image/' + image.type">
            <img :src="project.images.find(image => image.type === 'png').url" :alt="project.title" class="modal-img">
          </picture>
          <p>{{ project.description }}</p>
          <div class="button-container" v-if="project.link">
            <a class="button" v-bind:href="project.link" target="_blank" rel="noopener noreferrer">
              {{ project.linkText }}
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s;
}

.modal {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

.fade-content-enter-active, .fade-content-leave-active {
  transition: opacity 0.5s;
}
.fade-content-enter-from, .fade-content-leave-to {
  opacity: 0;
}

.button-container {
  text-align: right;

  .button {
    display: inline-block;
    padding: 1rem;
    background: #000;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
  } 
}
</style>
