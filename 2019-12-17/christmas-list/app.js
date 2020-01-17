const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    title: '🎄 Christmas List 🎄',
    items: [{
      id: 0,
      name: 'Tricycle',
      received: false,
    }, {
      id: 1,
      name: 'Puzzle of the Eiffel Tower',
      received: false,
    }],
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.unshift({
          id: Date.now(),
          name: this.newItem,
          received: false,
        });
        this.newItem = '';
      }
    },
    removeItem(id) {
      const removeIndex = this.items.findIndex(item => item.id === id);
      this.items.splice(removeIndex, 1);
    },
    toggleReceived(id) {
      const item = this.items.find(item => item.id === id);
      item.received = !item.received;
    }
  }
});
