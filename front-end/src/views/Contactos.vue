<template>
    <div class="container">
      <h1 class="mt-5 mb-4 text-center" style="color:#1d1a55" >Contactos</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4 text-center">
            <div class="card-body">
              <i class="fas fa-map-marker-alt"></i> <strong>Morada:</strong><br>
              Largo da Estação <br> 4950-498 <br> Monção
            </div>
          </div>
          <div class="card mb-4 text-center">
            <div class="card-body">
              <i class="fas fa-phone-alt"></i> <strong>Telefones:</strong><br>
              <ul class="list-unstyled">
                <li>Geral - 928 054 540</li>
                <li>Presidente - 932383791</li>
                <li>Vice-Presidente - 967133619</li>
                <li>Academia - 965401729</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4 text-center">
            <div class="card-body">
              <i class="fas fa-globe"></i> <strong>Endereço web:</strong><br>
              <a href="http://www.bandamusicaldemoncao.com">www.bandamusicaldemoncao.com</a>
              <br> <br>
            <strong>Redes Sociais:</strong><br>
            <ul class="social-icons justify-content-center">
              <a href="https://www.facebook.com/bandamusicaldemoncao"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://pt.linkedin.com/company/banda-musical-de-mon%C3%A7%C3%A3o"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/bandamusicaldemoncao1792/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/@bandamusicaldemoncao" ><i class="fa fa-youtube" aria-hidden="true"></i></a>
            </ul>
            </div>
          </div>
          <div class="card mb-4 text-center">
            <div class="card-body">
              <i class="fas fa-envelope"></i> <strong>Email:</strong><br>
              <ul class="list-unstyled">
                <li>geral@bandamusicaldemoncao.com</li>
                <li>presidente@bandamusicaldemoncao.com</li>
                <li>tesoureiro@bandamusicaldemoncao.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contactos'
  }
  </script>
  
  <style scoped>
.social-icons a {
  align-items: center;
  font-size: 30px;
  margin: 0 10px;
  color: #1d1a55;
}
.social-icons {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}
  </style>
