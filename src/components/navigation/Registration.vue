<template>
  <div>
    registreation
    <textarea rows="10" cols="45" name="text" disabled="disabled">
      {{allMessages}}
    </textarea>
    <input type="text" v-model="message"/>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        message:'',
        allMessages:'',
      }
    },
    computed: {
      eversedMessage: function () {
        // `this` указывает на экземпляр vm
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

<style>



</style>
