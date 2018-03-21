<template>
  <div id="app">
    <background :images="images" :pointerx="pointerxReceived" :pointery="pointeryReceived"></background>
    <button-control :buttonactive="buttonActive" @buttonpressed="buttonPressed"></button-control>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Background from '@/components/background'
import ButtonControl from '@/components/button'

export default {
  name: 'App',
  components: {
    Background,
    ButtonControl
  },
  sockets: {
    back_button_x_pressed: function (payload) {
      this.pointerxReceived = payload
      console.log(this.pointerxReceived)
    },
    back_button_y_pressed: function (payload) {
      this.pointeryReceived = payload
      console.log(this.pointeryReceived)
    }
  },
  data () {
    return {
      pointerx: 0,
      pointery: 0,
      pointerxReceived: 0,
      pointeryReceived: 0,
      buttonActive: {
        'up': null,
        'down': null,
        'left': null,
        'right': null
      },
      images: [
        [
          './static/1.jpg',
          './static/11.jpg',
          './static/13.jpg'
        ], [
          './static/16.jpg',
          './static/21.jpg',
          './static/27.jpg'
        ]
      ]
    }
  },
  created: function () {
    this.checkActive()
  },
  methods: {
    buttonPressed: function (value) {
      switch (value.value) {
        case 'up':
          this.pointery++
          this.$socket.emit('button_y_pressed', this.pointery)
          break
        case 'down':
          this.pointery--
          this.$socket.emit('button_y_pressed', this.pointery)
          break
        case 'left':
          this.pointerx--
          this.$socket.emit('button_x_pressed', this.pointerx)
          break
        case 'right':
          this.pointerx++
          this.$socket.emit('button_x_pressed', this.pointerx)
          break
      }
      this.checkActive()
    },
    checkActive: function () {
      console.log(`y : ${this.pointery}`)
      console.log(`x : ${this.pointerx}`)
      if (this.pointery + 1 !== 2) {
        this.buttonActive.up = ''
      } else {
        this.buttonActive.up = 'disabled'
      }
      if (this.pointery - 1 !== -1) {
        this.buttonActive.down = ''
      } else {
        this.buttonActive.down = 'disabled'
      }
      if (this.pointerx - 1 !== -1) {
        this.buttonActive.left = ''
      } else {
        this.buttonActive.left = 'disabled'
      }
      if (this.pointerx + 1 !== 3) {
        this.buttonActive.right = ''
      } else {
        this.buttonActive.right = 'disabled'
      }
    }
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
  margin-top: 0;
}
</style>
