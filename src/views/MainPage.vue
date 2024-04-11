
<template>
    <div class="topbar justify-content-center">
      <div class="title"></div>
    </div>
    <div class="background align-items-center justify-content-center" style="min-height: 765px;">
        <div class="d-flex flex-column refugio-container" style="max-width: 765px;">
            <h1 class="refugio" style="margin: 35px;">O <i>refúgio</i> dos momentos que ficam para sempre.</h1>
            <br>
            <p style="margin: 40px 80px 0 80px;">Acreditamos que os eventos devem ser ambientes orgânicos e íntimos, independentemente do número de convidados, seja 50 ou 500. [Orientamos nossos clientes durante todo o processo de planejamento, oferecendo conselhos especializados e ideias criativas.]</p>
            <br>
            <div style="margin: auto; margin-top: 79px;">
                <button type="button" class="btn btn-primary btn-agendar">Agende uma visita</button>
            </div>
        </div>
    </div>
    <div class="container-fluid">
      <div class="row align-items-center" style="height: 756px;">
        <div class="col-md-5">
            <p class="about">Situado a apenas 10 minutos do coração de Brasília, nosso espaço oferece um salão espaçoso e jardins externos encantadores, que proporcionam o cenário ideal para qualquer ocasião especial.</p>
            <p class="features">Salão interno com +0000 m²<br>Estacionamento amplo e de fácil acesso<br>Pista de dança<br>Espaço Bar & Lounge<br>Cozinha profissional<br>Ampla área externa</p>
        </div>
        <div class="col-md-7 entrance"> </div>
      </div>
    </div>
    <iframe style="width: 100%; height: 461px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15362.614955327766!2d-47.892157299999994!3d-15.716518699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39b38bc9f96d%3A0x38afa3187b47b826!2sSal%C3%A3o%20de%20Festa%20I%20Casamento%20I%20Evento%20Corporativo%20I%20Espa%C3%A7o%20Mocambo%20-%20Bras%C3%ADlia-DF!5e0!3m2!1sen!2sbr!4v1712345052714!5m2!1sen!2sbr&language=pt-BR" allowfullscreen></iframe>
    <div style="height:376px;"  class="align-items-center justify-content-center d-flex flex-column">
    <h2 class="reserve">Reserve agora e celebre momentos especiais conosco!</h2>
    <button type="button" class="btn btn-primary btn-agendar">Fazer reserva</button>

    </div>

    <div class="champagne"></div>

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
  @media (max-width: 767px){
       h1 {font-size: 3rem;} 
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
    text-align: center;
  }

  .btn-primary {
    font-family: "adobe-caslon-pro", serif;
    font-size: 2.5rem;
    border-radius: 100px;
    line-height: 1;
    padding: 15px 35px 5px 35px;
    background-color: var(--verde);
    border-color: var(--verde);
    justify-self: center;
    transition: 500ms ease-out;
    display: flex;
    align-items: center; /* Adiciona esta linha para centralizar verticalmente */
    justify-content: center; 
    border-top: -100px;
  }

  .btn-primary:hover {
    background-color: var(--verde-escuro);
    padding: 15px 40px 5px 40px;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px var(--verde);
  }
  
  .champagne {
    top: 1077px;
    height: 511px;
    background: transparent url('../assets/Grupo 32.png') 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
  }
  
  .background {
    top: 1077px;
    height: 765px;
    background: transparent url('../assets/Grupo 31.png') 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
  }

  .topbar {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 426px;
    background: var(--verde-escuro);
    opacity: 1;    
    display: flex;
    }

  .title{
    width: 375px;
    height: 124px;
    background: transparent url('../assets/Grupo 18.svg');
    opacity: 1;
    margin-top: 83px;
  }

  .refugio{
    text-align: center;
    letter-spacing: 0px;
    color: #485544;
    opacity: 1;
  }

  .entrance{
    min-height: 100px;
    background: #EFEFEF;
    opacity: 1;
  }
  
  .about-features-div{
    height: 756px;
    opacity: 1;
  }

  .about{
    text-align: left;
    margin-left: 25%;
    margin-right: 10%;
    font: normal normal normal 16px/26px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    opacity: 1;
  }

  .features{
    text-align: left;
    margin-left: 25%;
    margin-right: 5%;

    text-align: left;
    font: normal normal normal 20px/50px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    opacity: 1;
  }

  .reserve{
    width: 404px;
    text-align: center;
    font: normal normal normal 32px/42px Adobe Caslon Pro;
    letter-spacing: 0px;
    color: #485544;
    opacity: 1;
  }


</style>
