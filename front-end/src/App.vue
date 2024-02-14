<template>
  <!-- <Header /> -->
  <Nav />
  <Loader v-if="showLoader"></Loader>
  <section id="content">
    <router-view></router-view>
  </section>
  <Footer/>
</template>

<script>
import Nav from "./components/Nav.vue";
// import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";
import { mapState } from "vuex";
import { AUTO_LOGIN_ACTION } from "./store/storeconstants";
export default {
  name: "App",
  computed: {
    ...mapState({
      showLoader: (state) => state.showLoader,
      autoLogout: (state) => state.auth.autoLogout,
    }),
  },
  watch: {
    autoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace("/login");
      }
    },
  },
  components: {
    // Header,
    Nav,
    Loader,
    Footer,
  },
  created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
  },
};
</script>