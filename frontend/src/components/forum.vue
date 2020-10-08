<template>
    <div class="midnightblue">
        <div class="white">
            <img src="../assets/icon-left-font-monochrome-black.svg" alt="Logo Groupimania">
            <section class="container">
                <h1>Lâchez vous !</h1>
                <div id="messages">

                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forum',
    data(){return {msg : [
        {message : "Salut à tous, je n'arrive pas à finir mon projet à temps, quelqu'un peut il venir m'aider svp?", time : "heure", userPseudo : "test", userJob : "testeur"},
        {message : "Salut test! Je serais dispo demain à 15h si tu as toujours besoin, je pourrais te filer un coup de main toute la fin d'après midi. Mon projet est terminé et je connais bien le tiens, ça devrait aller vite :)", time : "heure", userPseudo : "omégaFort", userJob : "meilleurTesteur"}
    ]}},
    beforeMount(){
        fetch("http://localhost/api/messages/")
        .then(function(response){
            if(response.ok){
                response.json().then(function(myJson){
                    this.msg = myJson;
                });
            }
            else{
                console.log("Mauvaise réponse du réseau");
            }
        })
    },
    mounted(){
        const messages = document.getElementById('messages');
        for(let message of this.msg){
            const newMessage = document.createElement("div");
            newMessage.innerHTML = `<div class="col-md-8"><p>${message.message}</p></div><div class="col-md-4"><p>${message.time}</p><p>${message.userPseudo}<br>${message.userJob}</p></div>`;
            messages.appendChild(newMessage);
            newMessage.setAttribute("class", "row");
        }
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
}

img{
    max-width: 80%;
}

h1{
    margin-top: 7%;
    margin-bottom: 5%;
}

.row{
    border: midnightblue solid 2px;
    background-color: #138496;
    color: white;
    border-radius: 20px;
}

.col-md-8{
    border-right: midnightblue 2px dotted;
    p{
        text-align: left;
    }
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
}

@media all and (max-width : 550px){
    .white{
        max-width: 90%;
    }
}
</style>
