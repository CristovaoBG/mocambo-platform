<template>
    <!-- Top bar e Whatsapp -->
    <a class="icon whatsapp" href="https://wa.me/5561998112533" target="_blank"></a>
    <a class="icon instagram" href="https://www.instagram.com/mocamboespaco" target="_blank"></a>
    <div class="topbar justify-content-center" style="position: relative">
      <div class="title d-flex " ref="title"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref(null);

const handleScroll = () => {
  if (title.value) {
    title.value.style.transform = `rotate(${window.scrollY/50}deg)`;
    title.value.style.opacity = `${1-window.scrollY/100}`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});


</script>


<style scoped>

.icon{
  width: 78px;
  height: 78px;
  right: 40px;
  top: 10%;
  position: fixed;
  background: transparent url('../assets/icons8-whatsapp (7).svg') 0% 0% no-repeat padding-box;
  background-size: 78px;
  z-index: 1000;
  overflow: visible
  }

.icon.instagram{
  right: 140px;
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>') 0% 0% no-repeat padding-box;
  background-size: 78px;
}
.topbar {
    width: 100%;
    height: 283px;
    background: var(--verde-escuro);
    opacity: 1;    
    display: flex;
    align-items: center;
  }
.title{
    width: 375px;
    height: 124px;
    background: transparent url('../assets/Grupo 18.svg') no-repeat center;
    opacity: 1;
    background-size: contain;
  }

@media (max-width: 760px) {
  .title{
    transform: scale(0.75);
    background-size: contain;

  }
  .icon{
    right: 30px;
    top: 85%;
    width: 54px;
    height: 54px;
    background-size: 54px;
    z-index: 10;
  }
  .icon.instagram{
    right: 100px;
    background-size: 54px;
  }
}
</style>