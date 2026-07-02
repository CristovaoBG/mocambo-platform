<template>
  <div class="gallery">
    <div class="gallery__backdrop"></div>

    <Swiper
      ref="swiperRef"
      class="gallery__swiper"
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="0"
      :speed="450"
      :loop="images.length > 1"
      :breakpoints="breakpoints"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(image, index) in images" :key="image.id">
        <div class="gallery__slide">
          <ProgressiveImage
            :full="image.full"
            :thumb="image.thumb"
            :alt="image.id"
            :eager="index === 0"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <button
      type="button"
      class="gallery__next-btn"
      aria-label="Próxima foto"
      @click="nextSlide"
    ></button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y } from 'swiper/modules';
import 'swiper/css';

import ProgressiveImage from './ProgressiveImage.vue';
import images from '@/utils/importImages';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProgressiveImage,
  },

  data() {
    return {
      images,
      modules: [A11y],
      swiperInstance: null,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
        },
      },
    };
  },

  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },

    nextSlide() {
      this.swiperInstance?.slideNext();
    },
  },
};
</script>

<style scoped lang="scss">
.gallery {
  position: relative;
  margin-bottom: 0;
}

.gallery__backdrop {
  position: absolute;
  background-color: var(--verde-escuro);
  width: 100%;
  height: 143px;
}

.gallery__swiper {
  width: 100%;
}

.gallery__slide {
  height: 846px;
  width: 99%;
  background-color: rgb(119, 160, 173);
}

.gallery__next-btn {
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 105px;
  height: 99px;
  right: 24px;
  top: 340px;
  position: absolute;
  background: transparent url('../assets/Caminho 69.svg') 0% 0% no-repeat padding-box;
  background-size: cover;
  z-index: 100;
}

@media (max-width: 767px) {
  .gallery__slide {
    width: 100%;
  }
}
</style>
