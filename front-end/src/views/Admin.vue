
<template id="example-modal">
  <section class="container">
    <section class="row mt-3 text-center">
      <h1 class="text-center" style="color:#1D1A55">Gestão de Sócios</h1>
    </section>
    <section v-if=isShow
      class="alert mt-3"
      role="alert"
      v-bind:class="'alert-' + message.type"
    >
      {{ message.msg }}
    </section>
    <section class="row mt-3">
      <h4 style="color: #1D1A55;">Sócios inscritos:</h4>
    </section>
    <section class="card mt-2">
      <section class="card-body">
        <table class="table mt-2">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telémovel</th>
              <th class="text-center">Ações</th>
            </tr>
            <tr v-for="user of this.usersAccepted" :key="user._id">
              <td>{{ user.firstname + " " + user.lastname }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.mobile }}</td>
              <td class="text-center">
                <button
                  @click="detail(user._id)"
                  type="button"
                  class="btn btn-success btn-sm me-2 ac-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fas fa-search me-1" aria-hidden="true"></i>
                  Detalhes
                </button>
                <button
                  @click="deleteStd(user._id)"
                  type="button"
                  class="btn btn-danger btn-sm me-2 ac-btn"
                >
                  <i class="far fa-trash-alt me-1" aria-hidden="true"></i
                  >Remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <section class="row mt-3">
      <h4>Pedidos pendentes:</h4>
    </section>
    <section class="card mt-2">
      <section class="card-body">
        <table class="table mt-2">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telemóvel</th>
              <th class="text-center">Ações</th>
            </tr>
            <tr v-for="user of this.usersToAccept" :key="user._id">
              <td>{{ user.firstname + " " + user.lastname }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.mobile }}</td>
              <!-- <td>
                <button
                  @click="acceptStd(user._id)"
                  type="button"
                  class="btn btn-success btn-sm me-2 ac-btn"
                >
                  <i class="fas fa-check me-1 act-btn" aria-hidden="true"></i
                  >Aceitar
                </button>
                <button
                  @click="deleteStd(user._id)"
                  type="button"
                  class="btn btn-danger btn-sm me-2 ac-btn"
                >
                  <i class="far fa-trash-alt me-1" aria-hidden="true"></i
                  >Não aceitar
                </button>
              </td> -->
              <td>
  <div class="text-center">
    <button
      @click="acceptStd(user._id)"
      type="button"
      class="btn btn-success btn-sm me-2 ac-btn"
    >
      <i class="fas fa-check me-1 act-btn" aria-hidden="true"></i
      >Aceitar
    </button>
    <button
      @click="deleteStd(user._id)"
      type="button"
      class="btn btn-danger btn-sm me-2 ac-btn"
    >
      <i class="far fa-trash-alt me-1" aria-hidden="true"></i
      >Não aceitar
    </button>
  </div>
</td>

            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <!-- Modal -->
    <section
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      v-if="state == true"
      aria-hidden="true"
    >
      <section class="modal-lg modal-dialog">
        <section class="modal-content">
          <section class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Detalhes do sócio:
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </section>
          <section class="modal-body">
            <section class="row">
              <section class="col-md-3">Nome:</section>
              <section class="col-md-4">{{ form.name }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">NIF:</section>
              <section class="col-md-4">{{ form.nif }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Cartão de Cidadão:</section>
              <section class="col-md-4">{{ form.cartaodecidadao }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Email:</section>
              <section class="col-md-4">{{ form.email }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Contacto móvel:</section>
              <section class="col-md-4">{{ form.mobile }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Data de nascimento:</section>
              <section class="col-md-4">{{ form.bdate }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Morada:</section>
              <section class="col-md-4">{{ form.morada }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Código Postal:</section>
              <section class="col-md-4">{{ form.codigopostal }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-3">Freguesia:</section>
              <section class="col-md-4">{{ form.freguesia }}</section>
            </section>
            <section class="row mt-3">
              <section class="col-md-4">Subscrição de notificações:</section>
              <section class="col-md-4">{{ form.notifications }}</section>
            </section>
          </section>
          <section class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </section>
        </section>
      </section>
    </section>
    <section class="spacer"></section>
  </section>
</template>

<style scoped>
.ac-btn {
  width: 120px;
  color: white;
  font-weight: bold;
}
.spacer {
  height: 200px;
}
</style>

<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  GET_USER_TOKEN_GETTER,
  GET_USER_LEVEL_GETTER,
  GET_USER_ID_GETTER,
} from "../store/storeconstants";
export default {
  data() {
    return {
      data: localStorage.token,
      usersAccepted: [],
      usersToAccept: [],
      showModal: true,
      form: {
        firstname: "",
        lastname: "",
        name: "",
        cartaodecidadao: "",
        nif: "",
        morada: "",
        codigopostal: "",
        freguesia: "",
        email: "",
        mobile: "",
        bdate: "",
        notifications: false,
      },
      message: {
        type: "",
        msg: "",
      },
      state: true,
      isShow: false
    };
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
      level: GET_USER_LEVEL_GETTER,
      _id: GET_USER_ID_GETTER,
    }),
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapMutations({
      showLoader: LOADING_SPINNER_SHOW_MUTATION,
    }),

    async getUsers() {
      this.usersAccepted = [];
      this.usersToAccept = [];
      this.showLoader(true);
      await axios
        // .get("http://localhost:3000/user", {
          .get("https://gestao-socios-bmm-api.onrender.com/user",{

          headers: {
           Authorization: this.token,
          },
        })
        .then((response) => {
          this.showLoader(false);
          let users = response.data.body;
          for (let i = 0; i < users.length; i++) {
            if (users[i].accepted == true && users[i].level == "socio") {
              this.usersAccepted.push({
                _id: users[i]._id,
                firstname: users[i].firstname,
                lastname: users[i].lastname,
                cartaodecidadao: users[i].cartaodecidadao,
                nif: users[i].nif,
                morada: users[i].morada,
                codigopostal: users[i].codigopostal,
                freguesia: users[i].freguesia,
                email: users[i].email,
                mobile: users[i].mobile,
              });
            } else if (
              users[i].accepted == false &&
              users[i].level == "socio"
            ) {
              this.usersToAccept.push({
                _id: users[i]._id,
                firstname: users[i].firstname,
                lastname: users[i].lastname,
                email: users[i].email,
                mobile: users[i].mobile,
              });
            }
          }
        })
        .catch((error) => {
          this.showLoader(false);
          //alert(error);
          console.error(error);
        });
    },
    async acceptStd(_id) {
      this.showLoader(true);
      await axios
      .put("https://gestao-socios-bmm-api.onrender.com/user/" + _id, {
        // .put("http://localhost:3000/user/" + _id, {
          headers: {
            Authorization: this.token,
          },
        })
        .then(() => {
          this.message.msg = "Utilizador aceite!";
          this.message.type = "success";
          this.isShow=true
          this.showLoader(false);
          this.getUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteStd(_id) {
      this.showLoader(true);
      await axios
        .delete("https://gestao-socios-bmm-api.onrender.com/user/" + _id, {
          // .delete("http://localhost:3000/user/" + _id, {
          headers: {
            Authorization: this.token,
          },
        })
        .then(() => {
          this.message.msg = "Utilizador eliminado!";
          this.message.type = "success";
          this.isShow=true
          this.showLoader(false);
          this.getUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async detail(_id) {
      (this.message.type = ""), (this.message.msg = ""), this.showLoader(true);
      await axios
        .get("https://gestao-socios-bmm-api.onrender.com/user/" + _id, {
          // .get("http://localhost:3000/user/" + _id, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((response) => {
          (this.form.firstname = response.data.body.firstname),
            (this.form.lastname = response.data.body.lastname),
            (this.form.name = response.data.body.name),
            (this.form.cartaodecidadao= response.data.body.cartaodecidadao),
            (this.form.nif = response.data.body.nif),
            (this.form.bdate = response.data.body.bdate),
            (this.form.email = response.data.body.email),
            (this.form.mobile = response.data.body.mobile),
            (this.form.morada = response.data.body.morada),
            (this.form.codigopostal = response.data.body.codigopostal),
            (this.form.freguesia = response.data.body.freguesia);
          if (response.data.body.notifications == true)
            this.form.notifications = "SIM";
          else this.form.notifications = "NÃO";
          this.state = true;
          this.showLoader(false);
        })
        .catch(() => {
          this.message.msg = "Ocorreu um problema";
          this.message.type = "warning";
          this.isShow=true
          this.showLoader(false);
        });
    },
  },
};
</script>