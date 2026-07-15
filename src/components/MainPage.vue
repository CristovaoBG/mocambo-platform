<template>
    <TopBar/>
    <GalleryView/>
    <RefugioView/>
      <div class="row g-0">
        <div class="col-md-5 d-flex align-items-stretch">
          <AboutView />
        </div>
        <div class="col-md-7 about-entrance__image">
          <EntranceView/>
      </div>
    </div>
    <ExperienceView/>
    <FaqView/>
    <section class="map-section">
      <iframe
        class="map-section__frame"
        :src="site.maps.embedUrl"
        allowfullscreen
        loading="lazy"
        title="Localização do Espaço Mocambo"
      ></iframe>
      <a
        class="btn-maps"
        :href="site.maps.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no Maps
      </a>
    </section>
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

  .about-entrance {
    background: var(--branco);
  }

  .about-entrance__image {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    .about-entrance__image {
      display: flex;
    }
  }

  .map-section {
    position: relative;
    width: 100%;
  }

  .map-section__frame {
    display: block;
    width: 100%;
    height: 461px;
    border: 0;
  }

  .btn-maps {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    display: inline-block;
    font-family: "adobe-caslon-pro", serif;
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1;
    color: var(--verde);
    background: var(--branco);
    border: 1px solid var(--verde);
    border-radius: 100px;
    padding: 0.7rem 1.75rem 0.45rem;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 6px 20px rgba(36, 45, 33, 0.18);
    transition: 400ms ease-out;
  }

  .btn-maps:hover {
    color: var(--branco);
    background: var(--verde);
    border-color: var(--verde);
    transform: translate(-50%, -2px);
    box-shadow: 0 8px 24px rgba(36, 45, 33, 0.28);
  }

  @media (max-width: 767px){
       h1 { font-size: 46px; line-height: 55px; } 
       h2 { font-size: 28px; line-height: 42px; }

       .btn-maps {
         font-size: 1.15rem;
         padding: 0.6rem 1.35rem 0.4rem;
         bottom: 1.15rem;
       }
  }
</style>


<script>
import { site } from '@/content/site'
import TopBar from './TopBar.vue'
import RefugioView from './RefugioView.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import EntranceView from './EntranceView.vue'
import ReserveView from './ReserveView.vue'
import ChampagneView from './ChampagneView.vue'
import GalleryView from './GalleryView.vue'
import FaqView from './FaqView.vue'

export default {
  name: 'HelloWorld',
  data() {
    return { site }
  },
  components: {
    TopBar,
    RefugioView,
    AboutView,
    ExperienceView,
    EntranceView,
    ReserveView,
    ChampagneView,
    GalleryView,
    FaqView,
  },
}
</script>