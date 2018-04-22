<template lang="html">
  <section class="app">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'Hello Coding Garden!'
  })
};
</script>

<style lang="css">
.app {
  font-family: monospace;
  margin: 0 2em 0 2em;
}
</style>
