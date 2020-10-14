<template>
  <div id="app">
    <div id="nav">
      <a href="/forum" id="home"><img src="./assets/icon-left-font-monochrome-black.svg" alt="Logo Groupimania" id="logoGroupomania"></a>
      <button class="btn btn-info" id="disconnect">Deconnexion</button>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: relative;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#disconnect{
  position: absolute;
  right: 10%;
}

img{
  max-width: 80%;
}

.none{
  display: none;
}

@media all and (max-width : 960px){
  #nav{
      display: flex;
      flex-direction: column-reverse;
  }

  #disconnect{
      position: initial;
      max-width: 119px;
  }
}

</style>

<script>
  export default{
    mounted(){
      const disconnect = document.getElementById("disconnect");
      const home = document.getElementById("home");
      const location = window.location;
      const origin = window.location.origin;
      if(location == origin + "/" || location == origin + "/signup" || location == origin + "/login"){
        disconnect.setAttribute("class", "none");
        home.setAttribute("href", "/");
      }
      disconnect.addEventListener("click", function(e){
        e.preventDefault();
        localStorage.clear();
        window.location = origin + "/"
        return false;
      })
    }
  }
</script>
