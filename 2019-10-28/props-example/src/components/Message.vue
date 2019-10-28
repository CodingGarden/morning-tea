<template>
  <p
    :class="{
      [textAlign]: true,
    }"
  >
    {{msg}}
  </p>
</template>

<script>
export default {
  props: ['msg', 'textAlign']
}
</script>

<style scoped>
.center {
  text-align: center;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}
</style>