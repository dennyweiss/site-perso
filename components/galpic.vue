<template>
  <div class="galerie">
    <img
      v-for="img in JSON.parse(srcs)"
      :key="img"
      :src="img"
      class="zoom"
      :style="'width: ' + wgal + '%'"
    />
  </div>
</template>

<script>
export default {
  name: "galerie",
  props: ["srcs"],
  computed: {
    wgal: function() {
      const calc = 100 / JSON.parse(this.srcs).length;
      return calc - 2;
    }
  }
};
</script>

<style>
.galerie {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
