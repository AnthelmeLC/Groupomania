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
  beforeMount(){
    //récupération des messages dans la base de données
    //fetch("http://localhost:3000/api/messages/")
    //.then(function(response){
    //    if(response.ok){
    //        
    //    }
    //})
    console.log("test");
  },
  mounted(){
    //Ici on met en page les messages !
    
  }
}
</script>

<style scoped lang="scss">
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

@media all and (max-width : 550px){
    .white{
        max-width: 90%;
    }
}
</style>
