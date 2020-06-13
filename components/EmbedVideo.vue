<template>
  <iframe
    width="560"
    height="315"
    sandbox="allow-same-origin allow-scripts allow-popups"
    :src="src"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: ["src"]
};
</script>
