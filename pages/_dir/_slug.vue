<template>
  <aff-page :page="data"></aff-page>
</template>

<script>
    export default {
        async asyncData({ $content, params }) {
            const data = await $content(params.dir, params.slug).fetch();

            return { data };
        }
    };
</script>

<style>
  .labelio:hover {
    background-color: orangered;
  }
  a.label {
    margin-right: 1rem;
    background-color: ;
  }
  a.label:hover {
    border: 0;
  }
</style>
