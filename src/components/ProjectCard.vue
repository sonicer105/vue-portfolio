<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card">
    <picture>
      <source v-for="image in project.images" :key="image.type" :srcset="image.url" :type="'image/' + image.type">
      <img :src="project.images.find(image => image.type === 'png').url" :alt="project.title" class="card-img">
    </picture>
    <div class="card-content">
      <h2 class="card-title">{{ project.title }}</h2>
      <div class="card-description-wrapper">
        <div class="card-description">{{ project.description }}</div>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.5rem;
  margin: 0;
}

.card-description-wrapper {
  display: flex;
  padding: 0.5rem 0;

  .card-description {
    display: inline-block;
    font-size: 1rem;
    color: #555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    max-width: 250px;
  }

  & > svg {
    padding-top: 1px;
    margin-left: 5px;             /* Add some space before the icon */
  }
}
</style>
