<script setup>
import { site, whatsappUrl } from '@/content/site';

const whatsappReserveUrl = whatsappUrl(site.whatsapp.messages.reserve);
</script>

<template>
    <div style="height:376px;"  class="align-items-center justify-content-center d-flex flex-column">
      <h2 class="reserve">Reserve agora, e venha celebrar!</h2>
      <a type="button" class="btn btn-primary btn-agendar" :href="whatsappReserveUrl">Fale conosco</a>
    </div>
</template>

<style scoped>
  .reserve{
    max-width: 404px;
    width: 100%;
    margin: 0 auto 3.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
  }

</style>