<template>
  <div class="main">
      <form>
        <input type="text" name="" id="message">
        <button id="message" @click="getValue" @submit="getValue">submit</button>
        <ul id="message"></ul>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  methods: {
    getValue: function (message) {
      let inputMessage = document.querySelector('input')
      let buttonMessage = document.querySelector('button')

      buttonMessage.addEventListener('click', () => {
        console.log(inputMessage.value)
        this.$socket.emit('patty', inputMessage.value)
        inputMessage.value = ''
      })
    },
    appendMessage: function (message) {
      let li = document.createElement('li')
      li.innerHTML = message
      document.querySelector('ul#message').appendChild(li)
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    welcome: function (val) {
    //   console.log(val)
      console.log('fires were shot')
    },
    patty: function (val) {
      alert(val)
    }
  }
}
</script>

<style>
html, body{
  margin: 0;
  top: 0;
}
</style>
