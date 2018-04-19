<template>
  <div id="about">
    <img class="about-main" src="./images/vgif-ru-28923.gif"/>
    <i>About start {{number}}</i>

    <addAboutComponent v-show="this.$store.state.isAuthorised===1"></addAboutComponent>

    <div v-if="send_request">
      <div v-for="article in articles">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="container">
                <div v-for="file in article.files" class="row">
                  <!--<div>-->
                  <div class="col-9">
                    <img :src="file.image" class="article-img float-left"/>
                  </div>
                  <div class="col-3">
                    <div>name {{file.name}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="container">
                <div class="row">
                  <div class="col-8"><label for="newDescription">Описание</label><textarea
                    id="newDescription" type="text">{{article.description}}</textarea></div>
                  <div class="col-4"><label for="jotting">Краткое описание </label><textarea
                    id="jotting" type="text">{{article.jotting}}</textarea></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import addAboutComponent from './About/AddAboutComponent.vue'

  export default {
    data() {
      return {
        message: '',
        allMessages: '',
        newTitle: '',
        newImage: '',
        newDescription: '',
        articles: []
      }
    },
    props: ['number'],
    components: {
      addAboutComponent
    },
//    watch: {
//      number: function (val) {
//        console.log('from about' + val + " " + number);
//      },
//    },
    computed: {
      show: function () {
        return this.$store.state.isAuthorised === 1;
      },
      send_request: function () {
        return true;
      }
    },

    created: function () {
      console.log('from about ');
      axios.post('/accessAll/getArticles')
      .then((req) => {
        if(req.data!=null)
        this.articles = req.data;
      })
      .catch((req) => {
        console.log("Error " + req.data)
      });
    }
  }
</script>

<style lang="scss" scoped>

  img{
    width: 100%;
  }

  .container{
    margin-left: 2px;
  }
  .row{
    margin-top: 10px;
  }

  #about {
    border: 3px solid orangered;
    .about-main {
      width: 30%;
    }
    #addNew {
      padding-right: 500px;
      /*margin: 500px;*/
    }
  }

  .article-img {
    width: 100%;
  }
</style>
