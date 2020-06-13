<template>
  <div class="com">
    <div v-html="com.content"></div>
    <footer>le {{ date }}, par {{ com.account.display_name }}</footer>
  </div>
</template>

<script>
export default {
  props: ["com"],
  computed: {
    date: function() {
      const timing = new Date(this.com.created_at);

      return (
        //timing.getDate() + "/" + timing.getMonth() + "/" + timing.getFullYear()
        timing.toLocaleDateString("fr-FR")
      );
    }
  }
};
</script>

<style>
.com {
  box-shadow: 0 4px 4px lightgrey;
  padding: 1rem;
  margin: 1rem auto 2rem auto;
  width: 75%;
}

.com p {
  text-align: left;
}
</style>
