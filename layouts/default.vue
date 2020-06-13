<template>
  <div class="main-container">
    <mobile-menu class="mobile-only"></mobile-menu>
    <div class="article-container">
      <nuxt />
    </div>
    <sidebar class="navbar"></sidebar>
  </div>
</template>

<script>
export default {
  async fetch() {}
};
</script>

<style>
.main-container {
  max-width: 980px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* Layout desktop*/
@media (min-width: 780px) {
  .mobile-only {
    display: none;
  }
  .article-container {
    width: 65%;
    min-width: 500px;
    max-width: 650px;
    padding-top: 4rem;
  }
  .navbar {
    max-width: 280px;
  }
}

/* Layout mobile*/
@media (max-width: 779px) {
  .article-container {
    width: 100%;
    padding: 1rem;
  }
  .navbar {
    display: none;
  }
  .mobile-only {
  }
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
