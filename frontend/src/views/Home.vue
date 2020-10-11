<template>
  <div class="home">
    <img alt="Logo Groupomania" src="@/assets/icon-above-font.svg">
    <h1>Bienvenue sur le réseau social de Groupomania !</h1>
    <a class="btn btn-primary" href="#/signup">s'inscire</a>
    <a class="btn btn-info" href="#/login">se connecter</a>
  </div>
</template>

<script>
export default {
  name: 'Home'
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