<template>
  <section>
    <h1>Connexion</h1>
    <p>Entrez votre identifiant et votre mot de passe pour vous connecter.</p>
    <form class="container" id="login-form" name="login-form">
      
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <label for="email">email :</label>
            <input type="email" required id="email" name="email">
          </div>

          <div class="col-md-4">
            <label for="password">Mot de passe :</label>
            <input type="password" required name="password">
          </div>
        </div>

      <button class="btn btn-info">Connexion</button>

    </form>
  </section>
</template>

<script>
export default {
  name: 'login',
  mounted(){
    const login = document.getElementById("login-form");
    login.addEventListener("submit", function(e){
      e.preventDefault();
      const form = new FormData(login);
      let user = {};
      for(let key of form.keys()){
        user[key] = form.get(key);
      }
      const options = {
        headers : {
          "Content-type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify({user : user})
      };
      //envoi du formulaire
      fetch("http://localhost:3000/api/auth/login", options)
      .then(function(response){
        if(response.ok){
          response.json().then(function(myJson){
            sessionStorage.clear;
            sessionStorage.setItem("userId" , myJson.userId);
            sessionStorage.setItem("token" , myJson.token);
            sessionStorage.setItem("moderator", myJson.moderator);
            window.location = window.location.origin + "/forum";
          });
        }
        else{
          console.log("Mauvaise réponse du réseau.");
        }
      })
      .catch(function(error){
        console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
      });
      return false
    });
  }
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
