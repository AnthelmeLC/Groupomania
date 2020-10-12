<template>
  <section id="message">
    <h1>Modifiez votre message :</h1>
    <form>
        <textarea name="message" rows="5" cols="100" id="text"></textarea>
        <button class="btn btn-info" id="modify">Modifier</button>
    </form>
</section>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {msg : {id : 1, text : "Salut à tous, je n'arrive pas à finir mon projet à temps, quelqu'un peut il venir m'aider svp?", time : "heure", userPseudo : "test", userJob : "testeur"}}
    },
    beforeMount(){
        const currentMessage = window.location.href.split("?id=")[1];
        fetch("http://localhost:3000/api/messages/" + currentMessage)
        .then(function(response){
            if(response.ok){
                response.json().then(function(myJson){
                    this.msg = myJson;
                });
            }else{
                console.log("Mauvaise réponse du réseau");
            }
        })
        .catch(function(error){
            console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
        });
    },
    mounted(){
        const textArea = document.getElementById("text");
        textArea.innerHTML = `${this.msg.text}`;
        const modify = document.getElementById("modify");
        modify.addEventListener("click", function(){
            const options = {
              headers : {
                "Content-type" : "application/json"
              },
              method : "PUT",
              body : JSON.stringify({message : textArea.value})
            };
            const currentMessage = window.location.search.substring(4);
            fetch("http://localhost:3000/api/messages/" + currentMessage, options)
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
form{
    display: flex;
    flex-direction: column;
}
h1{
  margin-bottom: 3%;
  color: #138496;
}

textarea{
    border: #138496 solid 1px;
    margin-bottom: 1%;
}

form{
    align-items: center;
}

@media all and (max-width : 768px){
  .col-md-5, .col-md-4{
    text-align: start;
  }
}
</style>
