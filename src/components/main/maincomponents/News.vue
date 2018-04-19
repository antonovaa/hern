<template>
  <div id="news">
    news main satsar {{this.number}}
    <img src="./images/vgif-ru-28923.gif" style="width: 70%"/>

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
