<template>
  <div class="gallery">
    <div class="gallery__backdrop"></div>

    <div class="gallery__carousel" :class="{ 'gallery__carousel--nav-dimmed': navDimmed }">
      <div class="gallery__fade gallery__fade--left" aria-hidden="true"></div>
      <div class="gallery__fade gallery__fade--right" aria-hidden="true"></div>

      <Swiper
        ref="swiperRef"
        class="gallery__swiper"
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :speed="500"
        :loop="images.length > 1"
        :grab-cursor="true"
        :centered-slides="centeredSlides"
        :breakpoints="breakpoints"
        :pagination="{ clickable: true, el: '.gallery__pagination' }"
        @swiper="onSwiper"
        @slide-change="dimNavTemporarily"
        @slider-first-move="dimNavTemporarily"
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
        class="gallery__nav gallery__nav--prev"
        aria-label="Foto anterior"
        @click="prevSlide"
      ></button>
      <button
        type="button"
        class="gallery__nav gallery__nav--next"
        aria-label="Próxima foto"
        @click="nextSlide"
      ></button>

      <div class="gallery__pagination"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
      modules: [A11y, Pagination],
      swiperInstance: null,
      navDimmed: false,
      navDimTimer: null,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      breakpoints: {
        768: {
          slidesPerView: 1.35,
          spaceBetween: 28,
          centeredSlides: true,
        },
      },
    };
  },

  beforeUnmount() {
    clearTimeout(this.navDimTimer);
  },

  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },

    dimNavTemporarily() {
      this.navDimmed = true;
      clearTimeout(this.navDimTimer);
      this.navDimTimer = setTimeout(() => {
        this.navDimmed = false;
      }, 4000);
    },

    nextSlide() {
      this.swiperInstance?.slideNext();
    },

    prevSlide() {
      this.swiperInstance?.slidePrev();
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

.gallery__carousel {
  position: relative;
}

.gallery__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: clamp(48px, 12vw, 160px);
  z-index: 10;
  pointer-events: none;
}

.gallery__fade--left {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(36, 45, 33, 0.45) 0%,
    rgba(36, 45, 33, 0.35) 45%,
    transparent 100%
  );
}

.gallery__fade--right {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(36, 45, 33, 0.45) 0%,
    rgba(36, 45, 33, 0.35) 45%,
    transparent 100%
  );
}

.gallery__swiper {
  width: 100%;
  overflow: visible;

  :deep(.swiper-slide) {
    transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
    opacity: 0.45;
    transform: scale(0.9);
    filter: brightness(0.75);
  }

  :deep(.swiper-slide-active) {
    opacity: 1;
    transform: scale(1);
    filter: brightness(1);
  }

  :deep(.swiper-slide-prev),
  :deep(.swiper-slide-next) {
    opacity: 0.65;
    transform: scale(0.94);
    filter: brightness(0.85);
  }
}

.gallery__slide {
  height: 846px;
  width: 100%;
  background-color: rgb(119, 160, 173);
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  transition: box-shadow 0.5s ease;
}

:deep(.swiper-slide-active) .gallery__slide {
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.28);
}

.gallery__nav {
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 105px;
  height: 99px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent url('../assets/Caminho 69.svg') 0% 0% no-repeat padding-box;
  background-size: cover;
  z-index: 20;
  opacity: 0.85;
  transition: opacity 0.5s ease, transform 0.25s ease;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(-50%) scale(0.94);
  }
}

.gallery__carousel--nav-dimmed .gallery__nav {
  opacity: 0.255;

  &:hover {
    opacity: 0.255;
  }
}

.gallery__nav--prev {
  left: 24px;
  transform: translateY(-50%) scaleX(-1);

  &:active {
    transform: translateY(-50%) scaleX(-1) scale(0.94);
  }
}

.gallery__nav--next {
  right: 24px;
}

.gallery__pagination {
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  gap: 10px;

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    margin: 0 !important;
    background: rgba(252, 252, 252, 0.45);
    opacity: 1;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: var(--branco);
    transform: scale(1.25);
  }
}

@media (max-width: 767px) {
  .gallery__swiper {
    :deep(.swiper-slide) {
      opacity: 1;
      transform: none;
      filter: none;
    }
  }

  .gallery__slide {
    width: 100%;
    box-shadow: none;
  }

  .gallery__fade {
    width: clamp(32px, 10vw, 64px);
  }

  .gallery__nav {
    width: 72px;
    height: 68px;
  }

  .gallery__nav--prev {
    left: 12px;
  }

  .gallery__nav--next {
    right: 12px;
  }
}
</style>
