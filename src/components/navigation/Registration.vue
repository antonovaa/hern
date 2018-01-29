<template>
  <div id="registreation">
    <!--registreation-->
    <!--<textarea rows="10" cols="45" name="text" disabled="disabled">-->
      <!--{{allMessages}}-->
      <!--asdasdasdasdasd-->
    <!--</textarea>-->
    <!--<i>asdasd asd asd asd asd </i>-->
    <!--<input type="text" v-model="message"/>-->

    <div id="reg">
      <h1>registratioion
      ]df[</h1>
    </div>

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

<style lang="scss">

/*textarea{*/
  /*color:blue;*/
/*}*/
/*#registreation {*/
  /*height: 200px;*/
  /*color: red;*/
  /*font-size: 33px;*/

/*i {*/
  /*color: blue;*/
  /*font-size: 10px;*/

/*}*/

/*}*/

  #reg{

    height: 300px;
    background-color: #300;
  }
</style>
