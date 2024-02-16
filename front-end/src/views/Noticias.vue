<template>
    <section class="container my-body">
      <h1 class="text-center mt-5" style="color:#1d1a55" >Notícias</h1>
      <section class="row">
        <section class="col-12 col-md-6 col-lg-4 mt-5" v-for="topic of this.news" :key="topic._id">
          <section
            class="card border mb-3"
            style="height: 18rem; border-color: #2b589f !important"
          >
            <section class="card-header">
              <b
                ><h4 class="my-header">{{ topic.title }}</h4></b
              >
            </section>
            <section class="card-body">
              <h5 class="card-text mt-2 just">{{ topic.summary }}</h5>
              <p class="card-text mt-3 just">{{ topic.text }}</p>
            </section>
          </section>
        </section>
      </section>
      <section class="spacer"></section>
    </section>
    <br/> <br/>
    <br/>
    <br/>
    <br/>

  </template>
  
  <style scoped>
  .my-header {
    color: #2b589f;
  }
  .just {
    text-align: justify;
  }
  .spacer {
    height: 200px;
  }
  </style>
  
  <script>
  import axios from "axios";
  import { mapMutations } from "vuex";
  import { LOADING_SPINNER_SHOW_MUTATION } from "../store/storeconstants";
  export default {
    data() {
      return {
        card: {
          title: "",
          summary: "",
          text: "",
        },
        news: [],
      };
    },
    mounted() {
      this.getNews();
    },
    methods: {
      ...mapMutations({
        showLoader: LOADING_SPINNER_SHOW_MUTATION,
      }),
      async getNews() {
        this.news = [];
        this.showLoader(true);
        await axios
          .get("https://gestao-socios-bmm-api.onrender.com/notification")
          .then((response) => {
            this.showLoader(false);
            let allNews = response.data.body;
            for (let i = 0; i < allNews.length; i++) {
              if (allNews[i].notifPage == true) {
                this.news.push({
                  _id: allNews[i]._id,
                  title: allNews[i].title,
                  summary: allNews[i].summary,
                  text: allNews[i].text,
                  date: allNews[i].registration_date,
                });
              }
            }
          })
          .catch((error) => {
            this.showLoader(false);
            alert(error);
          });
      },
    },
  };
  </script>