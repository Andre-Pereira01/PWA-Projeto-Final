<template>
    <section class="container-fluid">
      <section class="row footer">
        <section class="col-sm-6 text-center">
          <section class="col">
        <br> <p style="color: #AD986E;">Projeto Final - André Pereira [2302569]</p> <br>
          </section>
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
    
    align-items: center;
    padding: 0.2em;
    bottom: 0px;
    background-color: #1D1A55;
    /* overflow: visible; */

  }
  @media only screen and (max-width: 768px) {
  .footer {
    position: fixed; 
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0.2em;
    bottom: 0px;
    background-color: #1D1A55;
    bottom: -20px;
  }
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