<template lang="html">
  <section class="app">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'Hello Coding Garden'
  })
};
</script>

<style lang="css">
.app {
  font-family: monospace;
  font-size: 3em;
}
</style>
