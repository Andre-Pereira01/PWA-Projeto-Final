<template>
    <section class="container-fluid">
      <section class="row footer">
        <section class="col-sm-6 text-center">
          <ul class="social-media">
            <li>
              <a href="https://www.facebook.com/bandamusicaldemoncao"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://pt.linkedin.com/company/banda-musical-de-mon%C3%A7%C3%A3o"><i class="fa fa-linkedin-square" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/bandamusicaldemoncao1792/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="mailto:geral@bandamusicaldemoncao.com" ><i class="fa fa-envelope" aria-hidden="true"></i></a>
            </li>
          </ul>
        </section>
        <section class="col-sm-6 text-center text-white">
          <p style="color:#AD986E">Banda Musical de Monção - 232 anos ao serviço da cultura</p>
        </section>
      </section>
    </section>
  </template>
  
  <style scoped>
  .footer a {
    color: #AD986E;
  }
  .footer a:hover {
    opacity: 0.5;
  }
  .footer {
    position: fixed;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0.2em;
    bottom: 0px;
    background-color: #1D1A55;
    overflow: visible;
  }
  .footer li {
    display: inline;
    padding-right: 0.5em;
    font-size: 2em;
  }
  ul.social-media {
    padding: 0;
  }
  @media (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: center;
    }
    .footer li {
      font-size: 2em;
    }
  }
  </style>