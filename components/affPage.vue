<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>
      <nuxt-link
        v-for="label in page.tags"
        :to="'/tag/' + label"
        class="label"
        :key="label"
        ><span class="labelio">{{ label }}</span></nuxt-link
      >
    </p>
    <!-- <strong>{{ page.description }}</strong> -->
    <nuxt-content :document="page" />
    <mastotest v-if="page.statid" :statid="page.statid"></mastotest>
  </div>
</template>

<script>
import galerie from "~/components/galpic.vue";
import important from "~/components/important.vue";

export default {
  props: ["page"],
  components: { galerie, important }
};
</script>
