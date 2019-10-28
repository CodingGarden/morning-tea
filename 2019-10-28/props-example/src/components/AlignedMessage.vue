<template>
  <p
    :class="{
      center: header,
      left: body,
      right: menu,
    }"
  >
    {{msg}}
  </p>
</template>

<script>
export default {
  props: ['msg', 'body', 'header', 'menu']
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