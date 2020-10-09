<template>
  <section id="talk">
    <h1>Exprimez-vous !</h1>
    <form>
        <textarea name="message" rows="5" cols="100" id="text">écrivez ici...</textarea>
        <button class="btn btn-info">Envoyer</button>
    </form>
</section>
</template>

<script>
export default {
  name: 'login',
  mounted(){
    
  }
}
</script>

<style scoped lang="scss">
h1{
  margin-bottom: 3%;
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
