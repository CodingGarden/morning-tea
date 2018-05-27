<template>
  <Window title="vuido-demo" width="400" height="100" margined v-on:close="exit">
    <Box>
      <Text>Enter your name:</Text>
      <TextInput stretchy v-model="text"/>
      <Button v-on:click="sayHello()">Say Hello</Button>
      <Text v-if="showMessage">Hello, {{ text }}</Text>
    </Box>
  </Window>
</template>

<script>
import libui from 'libui-node'

export default {
  data: () => ({
    text: '',
    showMessage: false,
  }),
  methods: {
    updateName(value) {
      this.text = value;
    },
    sayHello() {
      this.showMessage = true;
    },
    exit() {
      libui.stopLoop();
    }
  }
}
</script>
