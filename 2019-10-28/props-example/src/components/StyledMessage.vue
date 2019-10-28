<template>
  <p
    :style="{
      'text-align': textAlign
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
