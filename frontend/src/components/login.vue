<template>
  <div>
    <h1>Connexion</h1>
    <p>Entrez votre identifiant et votre mot de passe pour vous connecter.</p>
    <form action="post" class="container">
      
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="pseudo">Pseudo :</label>
            <input type="text">
          </div>

          <div class="col-md-4">
            <label for="password">Mot de passe :</label>
            <input type="password">
          </div>
        </div>

      <button class="btn btn-info">Connexion</button>

    </form>
    <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Groupomania">
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped lang="scss">
h1{
  margin-bottom: 2%;
}
p{
  margin-bottom: 2%;
}
.container{
  max-width: 1000px;
}
.col-md-5, .col-md-4{
  text-align: end;
  margin-bottom: 4%;
}

input{
  margin-left: 5px;
  margin-right: 5%;
}

button{
  margin-top: 2%;
  margin-bottom: 5%;
}

img{
    max-width: 80%;
}

@media all and (max-width : 768px){
  .col-md-5, .col-md-4{
    text-align: start;
  }
}
</style>
