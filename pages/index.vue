<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("/", "welcome").fetch();

    return { page };
  }
};
</script>

<style></style>
