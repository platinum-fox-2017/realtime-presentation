<template lang="html">
  <div class="image">
    <img id="background" :src="images[pointery][pointerx]" alt="">
  </div>
</template>

<script>
export default {
  name: 'Background',
  data: function () {
    return {
    }
  },
  props: ['pointery', 'pointerx', 'images']
}
</script>

<style lang="css" scoped>
#background {
  display: block;
  width: 100%;
  object-fit: cover;
}
</style>
