<template>
  <div>
    <i :class="cat.icon + ' fa-3x'"></i>
    <h1>{{ cat.title }}</h1>
    <section v-for="page in data" class="cat-card" :key="page.path">
      <nuxt-link :to="page.path"
        ><h3>{{ page.title }}</h3></nuxt-link
      >
      <p v-if="page.tags">
        <nuxt-link
          v-for="label in page.tags"
          :to="'/tag/' + label"
          class="label"
          :key="label"
        >
          <span class="labelio">{{ label }}</span></nuxt-link
        >
      </p>
      <p>{{ page.description }}</p>
      <!-- <nuxt-content :document="page" /> -->
    </section>
  </div>
</template>

<script>
export default {
  props: ["cat", "data", "icon"]
};
</script>
