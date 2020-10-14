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
        return {msg : null};
    },
    beforeMount(){
        const options = {
          headers : {
            authorization : localStorage.getItem("userId") + " " + localStorage.getItem("token")
          }
        };
        const currentMessage = window.location.href.split("?id=")[1];
        fetch("http://localhost:3000/api/messages/" + currentMessage, options)
        .then((response) => {
          if(response.ok){
              response.json()
              .then((myJson) => {
                this.msg = myJson.message;
                const textArea = document.getElementById("text");
                textArea.innerHTML = this.msg;
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
        const modify = document.getElementById("modify");
        modify.addEventListener("click", function(e){
          e.preventDefault();
          const currentMessage = window.location.search.substring(4);
          const options = {
            headers : {
              "Content-type" : "application/json",
              authorization : localStorage.getItem("userId") + " " + localStorage.getItem("token")
            },
            method : "PUT",
            body : JSON.stringify({message : textArea.value})
          };
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
          return false;
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
