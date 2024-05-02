<style>
  :root {
    --branco: rgb(252, 252, 252);
    --preto: rgba(10,10,10,1);
    --verde-escuro: #242D21;
    --verde: #485544;
    --amarelo: #EAE4C7;
  }

  h1 {
    font-family: "adobe-caslon-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 4.25rem;
    color: var(--verde);
    text-align: center;
  }

  h2 {
    font-family: "adobe-caslon-pro", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    color: var(--verde);
    text-align: center;
  }

  p {
    font-family: "roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    color: var(--verde);
    text-align: center;
  }

  li {
    font-family: "roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    color: var(--verde);
  }

  .btn-primary {
    font-family: "adobe-caslon-pro", serif;
    font-size: 2.5rem;
    border-radius: 100px;
    line-height: 1;
    padding: 15px 35px 5px 35px;
    background-color: var(--verde);
    border-color: var(--verde);
    text-align: center;
  }

  .btn-primary {
      transition: 500ms ease-out;
  }
  
  .btn-primary:hover {
    background-color: var(--verde-escuro);
    padding: 15px 40px 5px 40px;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px var(--verde);
  }

  @media (max-width: 767px){
    .btn-primary {
      font-size: 2.2rem;
    }
  }

  .refugio{
    text-align: center;
    letter-spacing: 0px;
    color: #485544;
    opacity: 1;
  }

  .about-features-div{
    height: 756px;
    opacity: 1;
  }

  @media (max-width: 767px){
       h1 {font: normal normal normal 46px/55px Adobe Caslon Pro;} 
       h2 {font: normal normal normal 28px/42px Adobe Caslon Pro;}
  }
</style>

<template>
    <TopBar/>
    <GalleryView/>
    <RefugioView/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 d-flex justify-content-center align-items-center" style="min-height: 604px;">
          <AboutView />
        </div>
        <div class="col-md-7" style="margin: 0; padding-right: 0; padding-left: 0;">
          <EntranceView/>
        </div>
      </div>
    </div>
    <iframe style="width: 100%; height: 461px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15362.614955327766!2d-47.892157299999994!3d-15.716518699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39b38bc9f96d%3A0x38afa3187b47b826!2sSal%C3%A3o%20de%20Festa%20I%20Casamento%20I%20Evento%20Corporativo%20I%20Espa%C3%A7o%20Mocambo%20-%20Bras%C3%ADlia-DF!5e0!3m2!1sen!2sbr!4v1712345052714!5m2!1sen!2sbr&language=pt-BR" allowfullscreen></iframe>
    <ReserveView/>
    <ChampagneView/>
    
</template>

<script>
import TopBar from '../views/TopBar.vue'
import RefugioView from '../views/RefugioView.vue'
import AboutView from '../views/AboutView.vue'
import EntranceView from '../views/EntranceView.vue'
import ReserveView from '../views/ReserveView.vue'
import ChampagneView from '../views/ChampagneView.vue'
import GalleryView from '../views/DebugView.vue'

export default {
  name: 'HelloWorld',
  components: {
    TopBar,
    RefugioView,
    AboutView,
    EntranceView,
    ReserveView,
    ChampagneView,
    GalleryView,
  },
}
</script>