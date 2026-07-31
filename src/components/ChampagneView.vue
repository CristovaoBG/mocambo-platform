<script setup>
import { site } from '@/content/site';
import ProgressiveImage from './ProgressiveImage.vue';

const jpeg800 = require('@/assets/display/Grupo 32-800w.jpg');
const jpeg1600 = require('@/assets/display/Grupo 32-1600w.jpg');
const webp800 = require('@/assets/display/Grupo 32-800w.webp');
const webp1600 = require('@/assets/display/Grupo 32-1600w.webp');

const full = jpeg1600;
const thumb = require('@/assets/thumbs/Grupo 32.png');
const srcset = `${jpeg800} 800w, ${jpeg1600} 1600w`;
const webpSrcset = `${webp800} 800w, ${webp1600} 1600w`;
</script>

<template>
  <div class="champagne">
    <ProgressiveImage
      class="champagne__bg"
      :full="full"
      :srcset="srcset"
      :webp-srcset="webpSrcset"
      :thumb="thumb"
      sizes="100vw"
      alt=""
    />
    <div class="champagne__content container-fluid">
      <div class="row justify-content-start" style="height:511px">
        <div class="col-md-4 d-flex justify-content-center align-self-center">
          <div class="mstamp"></div>
        </div>
        <div class="address col-md-4 align-self-center">
          <p>Endereço:<br><template v-for="(line, index) in site.address.lines" :key="line">{{ line }}<br v-if="index < site.address.lines.length - 1"></template><br><br>Telefone: <a :href="'tel:' + site.phone.tel">{{ site.phone.display }}</a><br><br>Siga-nos: <a :href="site.instagram.url" target="_blank" class="instagram-link">{{ site.instagram.handle }}</a></p>
        </div>
      </div>
    </div>
    <p class="footn">{{ site.copyright }}</p>
  </div>
</template>

<style scoped>
p {
  color: var(--amarelo);
}

.instagram-link {
  color: var(--amarelo);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.instagram-link:hover {
  color: #E4405F;
  text-decoration: underline;
}

.champagne {
  position: relative;
  height: 511px;
  width: 100%;
  overflow: hidden;
}

.champagne__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.champagne__content {
  position: relative;
  z-index: 1;
}

.mstamp {
  width: 159px;
  height: 163px;
  background: transparent url('../assets/Grupo 20.svg') center;
  opacity: 1;
}

.footn {
  position: absolute;
  z-index: 1;
  justify-self: center;
  bottom: 3%;
  transform: translateX(-50%);
  left: 50%;
  width: 60%;
}

@media (max-width: 767px) {
  .address {
    align-self: baseline;
  }

  .champagne {
    height: 682px;
  }
}
</style>
