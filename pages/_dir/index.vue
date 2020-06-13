<template>
  <aff-page v-if="isPage" :page="data"></aff-page>
  <aff-cat
    v-else
    :cat="catindex"
    :data="data.filter(test => test.slug !== 'index')"
  ></aff-cat>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const data = await $content(params.dir).fetch();
    const isPage = !Array.isArray(data);
    let catindex = "lol";
    if (!isPage) {
      catindex = data.find(test => test.slug === "index");
    }
    console.log(isPage);

    return { data, isPage, catindex };
  }
};
</script>
