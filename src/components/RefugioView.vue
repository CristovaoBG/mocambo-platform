<template>
  <div class="parent">
    <div class="bglogo" ref="bglogo"></div>
    <div class="background align-items-center justify-content-center d-flex" style="min-height: 765px;">
        <div class="d-flex flex-column refugio-container" style="max-width: 765px;">
            <h1 class="refugio" ref="refugio" style="margin: 35px;">O <i>refúgio</i> dos momentos que ficam para sempre.</h1>
            <br>
            <p ref="mainText" style="margin: 40px 40px 0 40px; z-index: 3;">Acreditamos que os eventos devem ser ambientes orgânicos e íntimos, independentemente do número de convidados, seja 50 ou 500. [Orientamos nossos clientes durante todo o processo de planejamento, oferecendo conselhos especializados e ideias criativas.]</p>
            <br>
            <div style="margin: auto; margin-top: 79px;">
                <a type="button" class="btn btn-primary btn-agendar" href="https://wa.me/5561998112533?text=Boa%20tarde!%20Gostaria%20de%20agendar%20uma%20visita%20:)">Agende uma visita</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const refugio = ref(null)
const bglogo = ref(null)
const mainText = ref(null)

const handleScroll = (element) => {
  if (element) {
    const rect = element.getBoundingClientRect();
    // isVisible.value = rect.top < window.innerHeight && rect.bottom >= 0;
    if(rect.top < window.innerHeight) {
      element.classList.add("visible")
      element.classList.remove("invisible")
      return
    }
    element.classList.add("invisible")
    element.classList.remove("visible")
    //isVisible.value = rect.top < window.innerHeight;
  }
};

const rotateBgLogo = () => {  
  if (bglogo.value){
    const rect = bglogo.value.getBoundingClientRect();
    bglogo.value.style.transform = `rotate(${rect.top/60}deg)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => handleScroll(refugio.value));
  handleScroll(refugio.value); 
  window.addEventListener('scroll', () => handleScroll(bglogo.value));
  window.addEventListener('scroll', () => handleScroll(mainText.value));
  window.addEventListener('scroll', rotateBgLogo);
  rotateBgLogo();
});

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// });

</script>


<style scoped>
  
  .background {
    top: 1077px;
    height: 765px;
    background: transparent url('../assets/Grupo 31.png') 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  .refugio{
    text-align: center;
    letter-spacing: 0px;
    color: #485544;
    opacity: 1;
    z-index: 3;
  }

  .parent{
    position:relative;
  }

  .bglogo{
    width: 217px;
    height: 221px;
    left: 22%;
    top: 24%;
    position: absolute;
    background: transparent url('../assets/Grupo 15.svg') 0% 0% no-repeat padding-box;
    background-size: cover;
    transition: transform 5s ease;
  }

  @media (max-width: 767px){
    .bglogo{
      left: -5%;
    }
  }


</style>