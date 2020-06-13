<template>
  <div class="mastotest" v-if="disp">
    <h3>Commentaires à cet article :</h3>
    <p>
      <em
        ><a :href="`https://diaspodon.fr/web/statuses/${statid}`"
          >(Commenter sur mastodon)</a
        ></em
      >
    </p>
    <mastocom
      v-for="com in data.descendants"
      :com="com"
      :key="com.id.toString()"
      class="comms"
    ></mastocom>
  </div>
</template>

<script>
export default {
  props: ["statid"],
  async mounted() {
    console.log("yo le mounted diou");
    this.data = await fetch(
      `https://diaspodon.fr/api/v1/statuses/${this.statid}/context`
    ).then(res => res.json());
  },
  data() {
    return { data: null };
  },
  computed: {
    disp: function() {
      if (this.data && this.data.descendants.length > 0) return true;
      else return false;
    }
  } /*,
  methods: {
    async prout() {
      const test = await fetch(
        `https://diaspodon.fr/api/v1/statuses/${this.statid}/context`
      ).then(res => res.json());
      console.log(test);
      this.data = test;
    }
  }*/
};
</script>

<style>
.mastotest {
  margin-top: 2rem;
}
.comms {
  width: 75%;
  margin: auto;
  margin-top: 1rem;
}
</style>
