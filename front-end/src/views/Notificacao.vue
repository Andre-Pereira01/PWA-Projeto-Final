<template>
    <section class="scrolling-component" ref="scrollcomponent">
      <section class="container my-body">
        <h1 class="text-center mt-5">CRIAR NOTIFICAÇÃO/AVISO</h1>
        <section
          v-if="isShow"
          role="alert"
          v-bind:class="'mt-3 alert alert-' + message.type"
        >
          {{ message.msg }}
        </section>
        <form class="form-signin" v-on:submit.prevent="createNotif">
          <section class="row mt-5">
            <section class="col-md-6">
              <label for="title" class="form-label"
                >Título (max. 26 caracteres)- total de caracteres:
                {{ form.title.length }}</label
              >
              <input
                type="text"
                v-model="form.title"
                class="form-control"
                id="title"
                placeholder="Insira o título"
              />
            </section>
          </section>
          <section class="row mt-4">
            <section class="col-md-12">
              <label for="title" class="form-label"
                >Resumo (max. 55 caracteres)- total de caracteres:
                {{ form.summary.length }}</label
              >
              <textarea
                v-model="form.summary"
                type="text"
                class="form-control"
                id="title"
                rows="5"
              ></textarea>
            </section>
          </section>
          <section class="row mt-4">
            <section class="col-md-12">
              <label for="text" class="form-label"
                >Texto (max. 180 caracteres) - total de caracteres:
                {{ form.text.length }}</label
              >
              <textarea
                v-model="form.text"
                type="text"
                class="form-control"
                id="text"
                rows="5"
              ></textarea>
            </section>
          </section>
          <section class="row mt-4">
            <section>
              <section class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.notifEmail"
                  value=""
                  id="notifEmail"
                  checked
                />
                <label class="form-check-label" for="subscribe_news">
                  Enviar notificação por email</label
                >
              </section>
              <section class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.notifPage"
                  value=""
                  id="notifPage"
                />
                <label class="form-check-label" for="subscribe_news">
                  Publicar na página Avisos</label
                >
              </section>
            </section>
          </section>
        </form>
        <section class="text-center">
          <button
            type="submit"
            v-on:click="createNotif"
            class="btn btn-outline-primary mt-4 me-4 my-button"
          >
            CRIAR
          </button>
          <button
            v-on:click="cleanForm"
            type="button"
            class="btn btn-outline-primary mt-4 me-4 my-button"
          >
            LIMPAR
          </button>
          <button
            @click="leave()"
            type="button"
            class="btn btn-outline-primary mt-4 my-button"
          >
            SAIR
          </button>
        </section>
        <section class="spacer"></section>
      </section>
    </section>
  </template>
  
  <style scoped>
  .my-button {
    width: 120px;
  }
  select option[disabled]:first-child {
    display: none;
  }
  .my-body {
    margin-top: 0px;
  }
  .spacer {
    height: 200px;
  }
  .top-btn {
    font-weight: bold;
    width: 100px;
  }
  </style>
  
  <script>
  import axios from "axios";
  import { mapMutations } from "vuex";
  import { LOADING_SPINNER_SHOW_MUTATION } from "../store/storeconstants";
  export default {
    name: "submit",
    data() {
      return {
        form: {
          title: "",
          summary: "",
          text: "",
          notifEmail: true,
          notifPage: false,
        },
        message: {
          type: "",
          msg: "",
        },
        isShow: false,
      };
    },
    methods: {
      ...mapMutations({
        showLoader: LOADING_SPINNER_SHOW_MUTATION,
      }),
      async createNotif() {
        this.isShow = false;
        this.message.type = "";
        this.message.msg = "";
        if (this.checkForm() == true) {
          this.message.type = "";
          this.message.msg = "";
          if (
            !this.checkTitleLength() ||
            !this.checkSummaryLength() ||
            !this.checkTextLength()
          ) {
            this.message.type = "";
            this.message.msg = "";
            (this.message.type = "warning"),
              (this.message.msg = "Número de caracteres inválido");
            this.isShow = true;
            return;
          }
          this.showLoader(true);
          let postData = {
            title: this.form.title,
            summary: this.form.summary,
            text: this.form.text,
            notifEmail: this.form.notifEmail,
            notifPage: this.form.notifPage,
          };
          await axios
            .post("http://localhost:3000/notification", postData)
            .then((response) => {
              if (response.data.http == 201) {
                this.showLoader(false);
                this.message.type = "success";
                this.message.msg = "Notificação criada com sucesso.";
                this.isShow = true;
              } else if (response.data.http == 200) {
                this.showLoader(false);
                this.message.type = "warning";
                this.message.msg = "Notificação existente.";
                this.isShow = true;
              } else {
                this.showLoader(false);
                this.message.type = "danger";
                this.message.msg = "Ocorreu um problema, tente de novo!";
                this.isShow = true;
              }
            })
            .catch(() => {
              this.error = "Valores inválidos!";
              this.showLoader(false);
            });
        } else {
          this.isShow = true;
          this.message.type = "danger";
          this.message.msg = "Todos os campos deve estar preenchidos!";
        }
      },
      cleanForm() {
        (this.form.title = ""),
          (this.form.summary = ""),
          (this.form.text = ""),
          (this.form.notifEmail = true),
          (this.form.notifPage = false);
        this.isShow = false;
      },
      leave() {
        this.$router.replace("/Admin");
      },
      checkForm() {
        if (
          this.form.title != "" &&
          this.form.summary != "" &&
          this.form.text != ""
        )
          return true;
        else return false;
      },
      checkTitleLength() {
        if (this.form.title.length <= 26) return true;
        else return false;
      },
      checkSummaryLength() {
        if (this.form.summary.length <= 55) return true;
        else return false;
      },
      checkTextLength() {
        if (this.form.text.length <= 180) return true;
        else return false;
      },
    },
  };
  </script>