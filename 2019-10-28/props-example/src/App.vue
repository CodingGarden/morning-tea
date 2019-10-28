<template>
  <div id="app">
    <Message msg="Hello Friends!" text-align="center" />
    <Message msg="Hello Everyone!" text-align="left" />
    <Message msg="Hello Coders!" text-align="right" />
    <Message msg="Hello People!" text-align="center" />
    <AlignedMessage msg="Hello Friends!" :body="true" />
    <AlignedMessage msg="Hello Everyone!" :header="true" />
    <AlignedMessage msg="Hello Coders!" :menu="true" />
    <StyledMessage msg="Hello Friends!" text-align="center" />
    <StyledMessage msg="Hello Everyone!" text-align="left" />
    <StyledMessage msg="Hello Coders!" text-align="right" />
  </div>
</template>

<script>
import Message from './components/Message.vue';
import AlignedMessage from './components/AlignedMessage.vue';
import StyledMessage from './components/StyledMessage.vue';

export default {
  name: 'app',
  components: {
    Message,
    AlignedMessage,
    StyledMessage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
