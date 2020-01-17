<template>
  <div id="app">
    <div class="hover-title" v-for="(image, i) in images" :key="image">
      <img :src="image">
      <div><span>{{titles[i]}}</span></div>
    </div>
  </div>
</template>

<script>
const context = require.context('.', true, /\.jpeg$/);
const images = context.keys().map(context);

function getRandomKittenText() {
  const words = `Howl uncontrollably for no reason poop in the plant pot for cat dog hate mouse eat string barf pillow no baths hate everything morning beauty routine of licking self. Hide when guests come over chase laser or hit you unexpectedly but play riveting piece on synthesizer keyboard. Attack the dog then pretend like nothing happened have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat for find something else more interesting, yet dont wait for the storm to pass, dance in the rain, or yowling nonstop the whole night kitty poochy, or human is washing you why halp oh the horror flee scratch hiss bite. Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat chew on cable scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food wack the mini furry mouse. Man running from cops stops to pet cats, goes to jail see owner, run in terror. Sit in box litter box is life, so kitten is playing with dead mouse yet litter box is life eat grass, throw it back up but sleep on keyboard, so pee in human's bed until he cleans the litter box. Morning beauty routine of licking self chew`.split(' ');
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push(words[Math.floor(Math.random() * words.length)])
  }
  return result.join(' ');
}

export default {
  name: 'app',
  data: () => ({
    images: [],
    titles: [],
  }),
  async mounted() {
    this.images = images;
    for (let i = 0; i < images.length; i++) {
      this.titles.push(getRandomKittenText())
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  column-count: 2;
  font-family: sans-serif;
}

img {
  width: 100%;
}

.hover-title {
  position: relative;
}

.hover-title div {
  display: flex;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  color: white;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  transition: all 500ms linear;
}

.hover-title div span {
  text-align: center;
  display: inline-block;
  font-size: 3rem;
  padding: 1rem;
}

.hover-title:hover div {
  visibility: visible;
  opacity: 1;
}
</style>
