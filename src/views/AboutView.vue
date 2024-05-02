<template>
<div class="container">
  <div class="row">
    <div class="col">
        <p class="about" style="margin-top:61px">Situado a apenas 10 minutos do coração de Brasília, nosso espaço oferece um salão espaçoso e jardins externos encantadores, que proporcionam o cenário ideal para qualquer ocasião especial.</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <ul class="features">
            <li>Salão interno com +0000 m²</li>
            <li>Estacionamento amplo e de fácil acesso</li>
            <li>Pista de dança</li>
            <li>Espaço Bar & Lounge</li>
            <li>Cozinha profissional</li>
            <li>Ampla área externa</li>
        </ul>
    </div>
  </div>
</div>

</template>

<style scoped>
  .about{
    text-align: left;
    margin-left: 17%;
    margin-right: 17%;
    font: normal normal normal 16px/26px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    opacity: 1;
  }

  .features{
    text-align: left;
    margin-left: 17%;
    margin-right: 5%;
    text-align: left;
    font: normal normal normal 20px/50px Roboto;
    letter-spacing: 0px;
    color: #242D21;
    opacity: 1;
    list-style-type: none;
    padding: 0;
    text-align: left;
  }

    li {
    border-bottom: 1px solid #ccc; /* Adicionar uma borda inferior com cor cinza claro */
    padding: 10px 0; /* Adicionar um espaçamento interno para separar os itens */
    color: #242D21;
    }

    li:last-child {
    border-bottom: none; /* Remover a borda do último item */
    }
  
  @media (max-width: 767px){
    .about{
        text-align: center;
        margin-left: 0%;
        margin-right: 0%;
    }
    .features{
        text-align: center;
        margin-left: 0%;
        margin-right: 0%;
    }
  }

</style>