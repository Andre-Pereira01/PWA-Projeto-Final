<template>
  <section class="my-body">
  </section>
</template>

<style scoped>
.my-body {
  background-image: url('../assets/img.png'); 
  background-size: auto; 
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  padding-block: 100%;
  overflow: hidden; 
  background-color: #1D1A55;
}

.my-img {
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 768px) {
  .my-img {
    width: 500px;
  }
  .my-body {
  background-image: url('../assets/imgmobile.png'); 
  background-size: auto; 
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  padding-block: 100%;
  overflow: hidden; 
  background-color: #1D1A55;
}

}


h3 {
  color: #1D1A55 !important;
  position: relative;
  margin-top: 40px;
  font-family: 'PT Serif', serif;
  letter-spacing: 10px;
}
</style>     