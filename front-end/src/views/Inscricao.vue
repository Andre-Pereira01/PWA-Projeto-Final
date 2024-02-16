<template>
  <section class="scrolling-component" ref="scrollcomponent">
    <section class="container my-body">
      <h1 class="text-center mt-5" style="color:#1D1A55">Ficha de inscrição de sócios
      </h1>
      <section v-if=isShow class="alert mt-3" role="alert" v-bind:class="'alert-' + message.type">
        {{ message.msg }}
      </section>
      <form class="form-signin" v-on:submit.prevent="send">
        <section class="row mt-4">
          <section class="col-md-3 g-4">
            <input type="text" v-model="form.firstname" class="form-control" id="firstname"
              placeholder="Insira o nome próprio" />
          </section>
          <section class="col-md-3 g-4">
            <input type="text" v-model="form.lastname" class="form-control" id="lastname"
              placeholder="Insira o apelido" />
          </section>
          <section class="col-md-6 g-4">
            <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Insira o nome completo" />
          </section>
        </section>
        <section class="row">
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.nif" class="form-control" id="nif" placeholder="Insira o NIF" />
          </section>
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.cartaodecidadao" class="form-control" id="cartaodecidadao"
              placeholder="Insira o número do cartão de cidadão" />
          </section>
        </section>
        <section class="row">
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.email" class="form-control" id="email" placeholder="Insira o email" />
          </section>
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.mobile" class="form-control" id="mobile"
              placeholder="Insira o número de telemóvel" />
          </section>
          <section class="col-md-4 g-4">
            <input placeholder="Data de nascimento" class="form-control textbox-n" type="text" v-model="form.bdate"
              onfocus="(this.type = 'date')" id="bdate" />
          </section>
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.morada" class="form-control" id="morada" placeholder="Insira a morada" />
          </section>
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.codigopostal" class="form-control" id="codigopostal"
              placeholder="Insira o código postal" />
          </section>
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.freguesia" class="form-control" id="freguesia"
              placeholder="Insira a freguesia" />
          </section>
        </section>
        <section class="row">
          <section class="col-md-4 g-4">
            <input type="text" v-model="form.username" class="form-control" id="username"
              placeholder="Insira o username" />
          </section>
          <section class="col-md-4 g-4">
            <input type="password" v-model="form.password" class="form-control" id="password"
              placeholder="Insira a password" />
          </section>
        </section>
        <section class="row mt-4">
          <section>
            <section class="form-check">
              <input class="form-check-input" type="checkbox" v-model="form.notifications" value="" id="subscribenews"
                checked />
              <label class="form-check-label" for="subscribenews">
                Subscrever notificações?</label>
            </section>
          </section>
        </section>
        <section class="text-center">
          <button type="submit" class="btn btn-outline-success mt-4 me-4 my-button">SUBMETER</button>
          <button @click="cleanForm()" type="button" class="btn btn-outline-danger mt-4 me-4 my-button">LIMPAR</button>
          <button @click="back()" type="button" class="btn btn-outline-primary mt-4 my-button">VOLTAR</button>
        </section>
      </form>

      <section class="spacer"></section>
    </section>
  </section>
  <br/>
    
  <br/>
    
  <br/>
    
</template>
  
<style scoped>
.my-button {
  width: 120px;
}

select option[disabled]:first-child {
  display: none;
}

.my-body {
  margin-top: 0%;
}

.spacer {
  height: 100px;
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
        firstname: "",
        lastname: "",
        name: "",
        nif: "",
        cartaodecidadao: "",
        email: "",
        mobile: "",
        bdate: "",
        morada: "",
        codigopostal: "",
        freguesia: "",
        username: "",
        password: "",
        notifications: true,
      },
      message: {
        type: "",
        msg: "",
      },
      isShow: false
    };
  },
  methods: {
    ...mapMutations({
      showLoader: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async send() {
      (this.message.type = ""), (this.message.msg = "");
      let postData = {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        name: this.form.name,
        nif: this.form.nif,
        cartaodecidadao: this.form.cartaodecidadao,
        email: this.form.email,
        mobile: parseInt(this.form.mobile),
        morada: this.form.morada,
        codigopostal: this.form.codigopostal,
        freguesia: this.form.freguesia,
        accepted: false,
        level: "socio",
        bdate: this.form.bdate,
        username: this.form.username,
        password: this.form.password,
        notifications: this.form.notifications,
      };
      if (this.checkForm() == true) {
        this.showLoader(true);
        await axios
          .post("https://gestao-socios-bmm-api.onrender.com/user", postData)
          .then((response) => {
            if (response.data.http == 201) {
              this.showLoader(false);
              this.message.type = "success";
              this.message.msg = "Utilizador criado com sucesso. A sua inscrição fica pendente de aprovação.";
              this.isShow = true
            } else if (response.data.http == 200) {
              this.showLoader(false);
              this.message.type = "warning";
              this.message.msg = "Utilizador existente.";
              this.isShow = true
            } else {
              this.showLoader(false);
              this.message.type = "danger";
              this.message.msg = "Ocorreu um problema, tente de novo...";
              this.isShow = true
            }
          })
          .catch(() => {
            this.error = "Valores inválidos!";
            this.showLoader(false);
          });
      } else {
        this.message.type = "danger";
        this.message.msg = "Todos os campos deve estar preenchidos!";
        this.isShow = true
      }
    },
    cleanForm() {
      (this.form.firstname = ""),
        (this.form.lastname = ""),
        (this.form.name = ""),
        (this.form.nif = ""),
        (this.form.cartaodecidadao = ""),
        (this.form.email = ""),
        (this.form.mobile = ""),
        (this.form.bdate = ""),
        (this.form.morada = ""),
        (this.form.codigopostal = ""),
        (this.form.freguesia = ""),
        (this.form.username = ""),
        (this.form.password = ""),
        (this.form.notifications = true)
      this.isShow = false
    },
    back() {
      this.$router.replace("/");
    },
    checkForm() {
      if (
        this.form.firstname != "" &&
        this.form.lastname != "" &&
        this.form.name != "" &&
        this.form.nif != "" &&
        this.form.cartaodecidadao != "" &&
        this.form.email != "" &&
        this.form.mobile != "" &&
        this.form.bdate != "" &&
        this.form.morada != "" &&
        this.form.codigopostal != "" &&
        this.form.freguesia != "" &&
        this.form.username != "" &&
        this.form.password != ""
      )
        return true;
      else return false;
    },
  },
};
</script>