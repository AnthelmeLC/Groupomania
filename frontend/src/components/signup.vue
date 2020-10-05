<template>
  <div>
    <h1>Inscription</h1>
    <p>Veuillez renseigner tous les champs ci-dessous pour vous inscrire.</p>
    <form action="post" class="container">
      
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="name">Nom :</label>
            <input type="text">
          </div>

          <div class="col-md-4">
            <label for="surname">Prénom :</label>
            <input type="text">
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="pseudo">Pseudo :</label>
            <input type="text">
          </div>

          <div class="col-md-4">
            <label for="email">Email :</label>
            <input type="email">
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="password">Mot de passe :</label>
            <input type="password">
          </div>

          <div class="col-md-4">
            <label for="confirmation-password">Confirmation :</label>
            <input type="password">
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="job">Poste dans l'entreprise :</label>
            <input type="text">
          </div>
        </div>


      <button class="btn btn-primary">Inscription</button>

    </form>
    <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Groupomania">
  </div>
</template>

<script>
export default {
  name: 'signup'
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
