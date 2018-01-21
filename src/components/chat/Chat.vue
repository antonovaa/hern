<template>
  <div id="chat">
    chat
    <img src="./images/chat.jpg" />
    <textarea rows="10" cols="45" name="text" disabled="disabled">
      {{this.allMessages}}
    </textarea>
    <input type="text" v-model="this.message"/>
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
    methods: {
      sendMessages: function () {

      },
      setfilter: function () {

      }
    },
    computed: {
      eversedMessage: function () {
        // `this` указывает на экземпляр vm
//        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

<style>

#chat img{
  opacity: 0.5;
}
</style>
