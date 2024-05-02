<template>
  <div class="parent">
    <div class="bglogo"></div>
    <div class="background align-items-center justify-content-center d-flex" style="min-height: 765px;">
        <div class="d-flex flex-column refugio-container" style="max-width: 765px;">
            <h1 class="refugio" style="margin: 35px;">O <i>refúgio</i> dos momentos que ficam para sempre.</h1>
            <br>
            <p style="margin: 40px 40px 0 40px; z-index: 3;">Acreditamos que os eventos devem ser ambientes orgânicos e íntimos, independentemente do número de convidados, seja 50 ou 500. [Orientamos nossos clientes durante todo o processo de planejamento, oferecendo conselhos especializados e ideias criativas.]</p>
            <br>
            <div style="margin: auto; margin-top: 79px;">
                <a type="button" class="btn btn-primary btn-agendar" href="https://wa.me/5561998112533?text=Boa%20tarde!%20Gostaria%20de%20agendar%20uma%20visita%20:)">Agende uma visita</a>
            </div>
        </div>
    </div>
  </div>
</template>

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
  }

  @media (max-width: 767px){
    .bglogo{
      left: -5%;
    }
  }


</style>