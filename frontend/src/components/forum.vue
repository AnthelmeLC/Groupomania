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
        return {msg : [
            {id : 1, message : "Salut à tous, je n'arrive pas à finir mon projet à temps, quelqu'un peut il venir m'aider svp?", time : "heure", userPseudo : "test", userJob : "testeur"},
            {id : 2, message : "Salut test! Je serais dispo demain à 15h si tu as toujours besoin, je pourrais te filer un coup de main toute la fin d'après midi. Mon projet est terminé et je connais bien le tiens, ça devrait aller vite :) Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Ng'bthnk Nyarlathotep lw'nafh, mg hai ph'hlirgh nw ebunma ch' mg, nnnsyha'h shogg Shub-Niggurathor ftaghu hlirgh kn'a k'yarnak. CDagon bug nog kn'a Dagon h'orr'e eeoth syha'h Azathoth lloigoth, r'luh ebunma shtunggli R'lyeh ngch' y-ebunma uaaah cvulgtlagln hupadgh, llll throd hafh'drn ph'ftaghu nog lloig f'uh'e s'uhn. Kn'a stell'bsna shtunggli kadishtu hrii f'hafh'drn chtenff ngfhtagn nanilgh'ri zhro sll'ha naDagon ebunma 'fhalma, tharanak ph'mnahn' mnahn' hafh'drn nnnehye llll athg nglui throd 'bthnk kn'a. H'hrii 'ai hlirgh naflbug fhtagnog hai Chaugnar Faugn kadishtu, Tsathoggua Azathoth shtunggli nilgh'ri Chaugnar Faugnyar f'orr'e gothayar, ch' ph'goka y'hah goka h'ilyaa h'hupadgh.", time : "heure", userPseudo : "omégaFort", userJob : "meilleurTesteur"}
    ]}},
    beforeMount(){
        fetch("http://localhost:3000/api/messages/")
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
        .catch(function(error){
            console.log("Il y a eu un problème avec l'opération fetch : " + error.message);
        });
    },
    mounted(){
        const messages = document.getElementById('messages');
        for(let message of this.msg){
            const newMessage = document.createElement("div");
            newMessage.innerHTML = `<div class="col-md-8"><p>${message.message}</p></div><div class="col-md-4"><div class="row"><div class="col-md-7"><p>${message.time}</p><p>${message.userPseudo}<br>${message.userJob}</p></div><div class="col-md-5"><a href="/message?id=${message.id}"><img src="./logoWrite.png" alt="logo modifier le message" id="modify${message.id}" title="Modifier le message"></a><img src="./logoWrong.png" alt="logo supprimer le message" id="delete${message.id}" title="Supprimer le message"></div></div></div>`;
            messages.appendChild(newMessage);
            newMessage.setAttribute("class", "row bigRow");
            
            const remove = document.getElementById("delete" + message.id);
            remove.addEventListener("click", function(){
                const options = {
                    headers : {
                        method : "DELETE"
                    }
                };
                fetch("http://localhost:3000/api/messages/" + message.id, options)
                .then(function(response){
                    if(response.ok){
                        alert("Message supprimé!");
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

    .col-md-7{
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
