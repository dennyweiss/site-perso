<template>
  <div>
    <p>
      Voici les articles qui sont associés au label
      <span class="labeliz">{{ slug }}</span>
    </p>
    <section v-for="article in articles">
      <header>
        <nuxt-link :to="article.path">
          <h2>{{ article.title }}</h2>
        </nuxt-link>
        <p>{{ article.description }}</p>
      </header>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug;
    const articles = await $content("", { deep: true })
      .where({
        tags: { $contains: params.slug }
      })
      .fetch();

    return { articles, slug };
  }
};
</script>
