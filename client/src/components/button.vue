<template lang="html">
<div class="buttons">
<button :disabled="buttonactive.up==='disabled'" @click="buttonPressed('up')" type="button" name="button">Up</button>
<button :disabled="buttonactive.down==='disabled'"  @click="buttonPressed('down')" type="button" name="button">Down</button>
<button :disabled="buttonactive.left==='disabled'"  @click="buttonPressed('left')" type="button" name="button">Left</button>
<button :disabled="buttonactive.right==='disabled'"  @click="buttonPressed('right')" type="button" name="button">Right</button>
</div>
</template>

<script>
export default {
  name: 'Button',
  props: ['buttonactive'],
  methods: {
    buttonPressed: function (value) {
      this.$emit('buttonpressed', {value})
    }
  }
}
</script>

<style lang="css">
</style>
