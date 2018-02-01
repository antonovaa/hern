<template>
  <div id="header">

    <nav class="navbar navbar-inverse bg-inverse">
      <form class="form-inline">
        <button class="btn btn-sm align-middle btn-outline-secondary" type="button">About</button>
        <button class="btn btn-sm align-middle btn-outline-secondary" type="button">Conquest</button>
        <button class="btn btn-sm align-middle btn-outline-secondary" type="button">Review</button>
        <button class="btn btn-sm align-middle btn-outline-secondary" type="button">News</button>
        <button v-if="show" class="btn btn-sm align-middle btn-outline-secondary" type="button">new button))</button>
      </form>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>

  </div>
</template>

<script>
  import { bus } from '../../main.js'

  export default {
    data() {
      return {
        show:false,
        message: '',
        allMessages: '',
      }
    },
    created(){
      bus.$on('show-param',data=>{
        console.log(data);
        this.show=true;
      })
    }
  }
</script>

<style>
#header{
  margin: 0px;
  padding: 0px;
  width: 100%;
}

</style>
