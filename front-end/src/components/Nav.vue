<template>
    <nav class="navbar navbar-expand-lg fixed-top">
      <section class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo.jpg" alt="Logo" class="navbar-logo" />
        </a>
        <button
          class="navbar-toggler cust-toggler me-auto mb-lg-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon cust-toggler"></span>
        </button>
        <section>
          <ul class="navbar-nav">
            <li class="nav-item" v-if="isAuthenticated">
              <p class="nb1 mb-0 ms-0">{{ name }}</p>
            </li>
          </ul>
        </section>
        <section
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item" v-if="isAuthenticated && level == 'socio'">
              <router-link to="/conta" class="nb">VER CONTA</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link to="/inscricao" class="nb">INSCRIÇÕES</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/noticias" class="nb">NOTÍCIAS</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated || level == 'socio'">
              <router-link to="/acerca" class="nb">SOBRE A BANDA</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated || level == 'socio'">
              <router-link to="/contactos" class="nb">CONTACTOS</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated && level == 'admin'">
              <router-link to="/notificacao" class="nb">CRIAR NOTÍCIA</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated && level == 'admin'">
              <router-link to="/admin" class="nb">GESTÃO DE SÓCIOS</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link to="/login" class="nb">LOGIN</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <a href="#" class="nb" @click.prevent="logout()">LOGOUT</a>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  </template>
  
  <style scoped>
  .cust-toggler {
    border-color: #AD986E;
  }
  .cust-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  .navbar {
    position: relative;
    height: auto;
    background-color: #1D1A55 !important;
  }
  .nav {
    border-color: #1D1A55 !important;
    border-width: 2px !important;
    text-decoration: none !important;
    padding: 10px;
  }
  .nav-item {
    text-decoration: none !important;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .nb,
  .nb1 {
    color: #AD986E !important;
    font-weight: bold;
    text-decoration: none !important;
    border-right: #1D1A55;
    border-right-style: solid;
    border-right-width: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .nb:hover {
    color: #C21A26 !important;
  }
  .navbar-logo {
  max-width: 75px; 
  height: 75px;
}
  </style>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import {
    IS_USER_AUTHENTICATED_GETTER,
    LOGOUT_ACTION,
    GET_USER_LEVEL_GETTER,
    GET_USER_NAME_GETTER,
  } from "../store/storeconstants";
  export default {
    computed: {
      ...mapGetters("auth", {
        isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
        level: GET_USER_LEVEL_GETTER,
        name: GET_USER_NAME_GETTER,
      }),
    },
    methods: {
      ...mapActions("auth", {
        _logout: LOGOUT_ACTION,
      }),
      logout() {
        this._logout();
        this.$router.replace("/");
      },
    },
  };
  </script>
  
  