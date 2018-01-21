<template>
  <div>
    <header-my></header-my>
    <registration></registration>
    <news></news>
    <chat></chat>
  </div>
</template>

<script>

  import HeaderMy from './components/header/HeaderMy.vue'
  import Chat from './components/chat/Chat.vue'
  import News from './components/navigation/News.vue'
  import Registration from './components/navigation/Registration.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: '3',
      msg2: 'Welcome to Your Vue.js App',
      msg3: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderMy,
    Chat,
    News,
    Registration
  }
}
</script>

<style>
header-my{

}
registration{
  float: left;
}

</style>
