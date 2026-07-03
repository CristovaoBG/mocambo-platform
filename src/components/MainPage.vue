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
    <iframe style="width: 100%; height: 461px" :src="site.maps.embedUrl" allowfullscreen></iframe>
    <ReserveView/>
    <ChampagneView/>
    
</template>
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

  .btn.btn-primary {
    --bs-btn-color: var(--branco);
    --bs-btn-bg: var(--verde);
    --bs-btn-border-color: var(--verde);
    --bs-btn-hover-color: var(--branco);
    --bs-btn-hover-bg: var(--verde-escuro);
    --bs-btn-hover-border-color: var(--verde-escuro);
    --bs-btn-active-color: var(--branco);
    --bs-btn-active-bg: var(--verde-escuro);
    --bs-btn-active-border-color: var(--verde-escuro);
    font-family: "adobe-caslon-pro", serif;
    font-size: 2.5rem;
    border-radius: 100px;
    line-height: 1;
    padding: 15px 35px 5px 35px;
    text-align: center;
  }

  .btn.btn-primary {
      transition: 500ms ease-out;
  }
  
  .btn.btn-primary:hover {
    padding: 15px 40px 5px 40px;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px var(--verde);
  }

  @media (max-width: 767px){
    .btn.btn-primary {
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


<script>
import { site } from '@/content/site'
import TopBar from './TopBar.vue'
import RefugioView from './RefugioView.vue'
import AboutView from './AboutView.vue'
import EntranceView from './EntranceView.vue'
import ReserveView from './ReserveView.vue'
import ChampagneView from './ChampagneView.vue'
import GalleryView from './GalleryView.vue'

export default {
  name: 'HelloWorld',
  data() {
    return { site }
  },
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