<template>
    <!-- Top bar e Whatsapp -->
    <a class="icon" href="https://wa.me/5561998112533"></a>
    <div class="topbar justify-content-center" style="position: relative">
      <div class="title"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.icon{
  width: 78px;
  height: 78px;
  right: 10%;
  top: 10%;
  position: fixed;
  background: transparent url('../assets/icons8-whatsapp (7).svg') 0% 0% no-repeat padding-box;
  background-size: 78px;
  z-index: 1000;
  overflow: visible
  }
.topbar {
    width: 100%;
    height: 283px;
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
  .icon{
    right: 10%;
    top: 85%;
    width: 54px;
    height: 54px;
    background-size: 54px;
    z-index: 10;
  }
}
</style>