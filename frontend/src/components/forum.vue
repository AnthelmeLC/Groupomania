<template>
    <div class="midnightblue">
        <div class="white">
            <section class="container">
                <h1>Lâchez vous !</h1>
                <div class="text-align-left">
                    <a href="/post" class="btn btn-info post">Poster</a>
                    <div id="messages">

                    </div>
                    <a href="/post" class="btn btn-info post">Poster</a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forum',

    data(){
        return {msg : []}
    },

    beforeMount(){
        //options de la requête
        const options = {
            headers : {
                authorization : localStorage.getItem("userId") + " " + localStorage.getItem("token")
            }
        };
        //requête pour récupérer tous les messages à afficher
        fetch("http://localhost:3000/api/messages/", options)
        .then((response) => {
            if(response.ok){
                //récupération de tous les messages réussie
                response.json()
                .then((myJson) =>{
                    //insertion des messages dans data
                    this.msg = myJson;
                    const messages = document.getElementById('messages');
                    //mise en page de chaque message contenu dans data
                    for(let message of this.msg){
                        const newMessage = document.createElement("div");
                        newMessage.innerHTML = `<div class="col-md-8"><p>${message.message}</p></div><div class="col-md-4"><div class="row"><div class="col-md-7"><p>${message.createdAt}</p><p>${message.User.pseudo}<br>${message.User.job}</p></div><div class="col-md-5" id="img${message.id}"><a href="/message?id=${message.id}"><img src="./logoWrite.png" alt="logo modifier le message" id="modify${message.id}" title="Modifier le message"></a><img src="./logoWrong.png" alt="logo supprimer le message" id="delete${message.id}" title="Supprimer le message"></div></div></div>`;
                        messages.appendChild(newMessage);
                        newMessage.setAttribute("class", "row bigRow");
                        if(message.User.id != localStorage.getItem("userId") && localStorage.getItem("moderator") != "true"){
                            const img = document.getElementById("img" + message.id);
                            img.setAttribute("class", "none");
                        }

                        //événement click sur chaque boutton delete
                        const remove = document.getElementById("delete" + message.id);
                        remove.addEventListener("click", function(){
                            //options de la requête
                            const options = {
                                headers : {
                                  "Content-type" : "application/json",
                                  authorization : localStorage.getItem("userId") + " " + localStorage.getItem("token")
                                },
                                method : "DELETE"
                            };
                            //envoi de la requête de suppression du message
                            fetch("http://localhost:3000/api/messages/" + message.id, options)
                            .then(function(response){
                                if(response.ok){
                                    //suppression dans la DB réussie
                                    //avertissement de la suppression à l'utilisateur
                                    alert("Message supprimé!");
                                    //rafraichissement de la page du forum
                                    window.location.reload();
                                }
                                else{
                                    console.log("Mauvaise réponse du réseau");
                                }
                            })
                            .catch(function(error){
                                console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
                            });
                        });
                    }
                });
            }
            else{
                console.log("Mauvaise réponse du réseau");
            }
        })
        .catch(function(error){
            console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
        });
    }
};
</script>

<style lang="scss">
.midnightblue{
    background-color: midnightblue;
}

.white{
    background-color: white;
    max-width: 60%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 3px;
    padding-left: 3px;
}

.logoGroupomania{
    max-width: 80%;
}

h1{
    margin-top: 5%;
    margin-bottom: 5%;
}

.text-align-left{
    text-align: left;
}

.bigRow{
    border: midnightblue solid 2px;
    background-color: #138496;
    color: white;
    border-radius: 20px;
    margin-bottom: 0.5%;
    font-size: large;
}

.col-md-8{
    border-right: midnightblue 2px dotted;
    p{
        text-align: left;
    }
}

.col-md-5 img{
    display: block;
    margin-top: 5%;
    &:hover{
        cursor: pointer;
    }
}
.post{
    border: midnightblue solid 2px;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
    font-size: large;
}

.none{
    display: none;
    background-color: red;
}

@media all and (max-width: 768px){
    .col-md-8{
        border-right: none;
        border-bottom: midnightblue 2px dotted;
    }

    .col-md-4{
        display: flex;
        justify-content: space-around;
    }

    .col-md-5{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1%;
    }
}

@media all and (max-width : 550px){
    .white{
        max-width: 90%;
    }
}
</style>
