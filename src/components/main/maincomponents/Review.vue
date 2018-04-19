<template>
  <div id="review">
    review    start {{this.number}}
    <img src="./images/vgif-ru-31747.gif" style="width: 50%"/>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        show:true
      }
    },
    props: ['number'],

  }
</script>

<style>
</style>
