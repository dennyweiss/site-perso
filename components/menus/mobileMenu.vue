<template>
  <div class="menu">
    <ul>
      <li>
        <a href="/">
          <i class="fas fa-home"></i>
        </a>
      </li>
      <!-- <li><i class="fas fa-bars" @click="dispmenu()">&nbsp;Menu</i></li> -->
      <!--<li><a href="https://diaspodon.fr/web/accounts/101167">
          <i class="fab fa-mastodon"></i></a></li>
      <li><a href="https://framasphere.org/people/8afe88907bc10138dfca2a0000053625"><i class="fab fa-diaspora"></i></a></li>-->
      <li v-for="icon in data" :key="icon.updatedAt.toString()">
        <nuxt-link :to="icon.dir + '/'"><i :class="icon.icon"></i></nuxt-link>
      </li>
    </ul>
    <p v-if="isMenu">Menu</p>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.data = await this.$content("", { deep: true })
      .where({ slug: "index" })
      .fetch();
  },
  data() {
    return { isMenu: false, data: null };
  },
  methods: {
    dispmenu() {
      this.isMenu = !this.isMenu;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
li {
  margin-right: 2rem;
}
i {
  font-size: 1.3rem;
}
.menu {
  width: 100%;
  min-height: 2rem;
  box-shadow: 0 4px 4px darkgrey;
  padding: 0.5rem;
}
</style>
