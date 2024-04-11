<template>
  <div class="container">
    <nav class="row">
      <div class="col-sm-4" ><a class="btn btn-light btn-block" href="/galeria/">Galeria</a></div>
      <div class="col-sm-4" ><a class="btn btn-light btn-block" href="https://wa.me/556198112533?text=Ol%C3%A1%2C+eu+gostaria+de+agendar+uma+visita%21">Whatsapp</a></div>
      <div class="col-sm-4" ><a class="btn btn-light btn-block" href="https://www.google.com/maps?cid=4084662712591169574&authuser=0">Maps</a></div>
        <!-- <a class="col-sm-2" href="/galeria/">Galeria</a> | 
        <a class="col-sm-2" href="/informacoes/">Informações</a> -->
    </nav>
    <div class="row">
      <h1 class="col-md offset-md-4">Espaço Mocambo</h1> 
      <div class="row">
        <p class="col-md offset-md-3"> O local perfeito para celebrar momentos inesquecíveis.</p>
      </div>   
    </div>
    <SlideComponent/>
    <h3>Informações</h3>
    <ol class="list-group">
      <li><a href="tel:+5561998112533">(61) 99811-2533</a></li>
      <li> St. de Habitações Individuais Norte Trecho 1 - Lago Norte, Brasília - DF, 71560-100</li>
    </ol>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15362.614955327766!2d-47.892157299999994!3d-15.716518699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39b38bc9f96d%3A0x38afa3187b47b826!2sSal%C3%A3o%20de%20Festa%20I%20Casamento%20I%20Evento%20Corporativo%20I%20Espa%C3%A7o%20Mocambo%20-%20Bras%C3%ADlia-DF!5e0!3m2!1sen!2sbr!4v1712345052714!5m2!1sen!2sbr" allowfullscreen></iframe>    <h3>Links</h3>
    </div>
</template>

<script>
import SlideComponent from '../components/SlideComponent.vue'

export default {
  name: 'HelloWorld',
  components: {
    SlideComponent
  },
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
iframe {
    width: 100%;
    height: 500px;
    border: none;
}
.col-sm-4 .btn {
  width: 100%;
}
.gm-style-iw {
        display: none !important;
    }

</style>
