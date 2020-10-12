<template>
  <section id="talk">
    <h1>Exprimez-vous !</h1>
    <form id="post">
      <textarea name="message" rows="5" cols="100" id="text" required></textarea>
      <button class="btn btn-info" >Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'post',
  mounted(){
    const post = document.getElementById("post");
    post.addEventListener("submit", function(e){
      e.preventDefault();
      const message = document.getElementById("text").value;
      const options = {
        headers : {
          "Content-type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify({message : message})
      };
      fetch("http://localhost/api/messages/", options)
      .then(function(response){
        if(response.ok){
          window.location = window.location.origin + "/forum";
        }
        else{
          console.log("Mauvaise réponse du réseau.");
        }
      })
      .catch(function(error){
        console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
      });
    });
  }
}
</script>

<style scoped lang="scss">
h1{
  margin-bottom: 3%;
}

textarea{
  max-width: 95%;
}

button{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
