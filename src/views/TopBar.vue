<template>
        <div class="topbar justify-content-center">
      <div class="title"></div>
    </div>
</template>

<style scoped>
    .topbar {
    width: 100%;
    height: 426px;
    background: var(--verde-escuro);
    opacity: 1;    
    display: flex;
    }
    .title{
        width: 375px;
        height: 124px;
        background: transparent url('../assets/Grupo 18.svg') no-repeat center;
        opacity: 1;
        margin-top: 83px;
    }

  @media (max-width: 500px) {
    .title{
        transform: scale(0.75);
        background-size: contain;
        
    }
  }
</style>