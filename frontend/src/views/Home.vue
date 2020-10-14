<template>
  <section class="home">
    <h1>Bienvenue sur le réseau social de Groupomania !</h1>
    <a class="btn btn-primary" href="/signup">s'inscire</a>
    <a class="btn btn-info" href="/login">se connecter</a>
  </section>
</template>

<script>
export default {
  name: 'Home',

  beforeCreate(){
    //si l'utilisateur est déjà connecté, renvoi direct vers la page de forum
    if(localStorage.getItem("token")){
      window.location = window.location.origin + "/forum";
    }
  }
}
</script>

<style scoped lang="scss">
img{
  max-width: 400px;
}

h1{
  margin-bottom: 7%;
}

a{
  font-size: x-large;
  margin: 1% 1% 5% 1%;
}
</style>