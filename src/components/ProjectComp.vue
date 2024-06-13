<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import ProjectModal from './ProjectModal.vue';
import projects from './projects.json';

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};
</script>

<template>
  <div class="projects-container">
    <h1 class="section-title">Projects</h1>
    <div class="grid-container">
      <div class="grid-item" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" @click="openModal(project)" />
      </div>
    </div>
    <transition name="fade">
      <ProjectModal v-show="selectedProject" :project="selectedProject" @close="closeModal" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>

.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem;
  min-height: 100%;
  overflow: hidden;
  animation: moveBackground 60s linear infinite;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  /* WebP Support */
  .webp & {
    background: url('./images/pattern.webp');
  }

  /* Fallback for no WebP Support */
  .no-webp & {
    background: url('./images/pattern.png');
  }

  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Optional overlay */
    z-index: -1;
  }
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1000px 1000px; /* Adjust as needed */
  }
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px #999;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.grid-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
}

.grid-item {
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
