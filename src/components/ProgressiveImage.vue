<template>
  <div ref="container" class="progressive-image">
    <img
      :src="thumb"
      :alt="alt"
      class="progressive-image__placeholder"
      aria-hidden="true"
      decoding="async"
    />
    <picture v-if="shouldLoadFull">
      <source
        v-if="webpSrcset"
        type="image/webp"
        :srcset="webpSrcset"
        :sizes="sizes"
      />
      <img
        :src="full"
        :srcset="srcset || undefined"
        :sizes="srcset ? sizes : undefined"
        :alt="alt"
        class="progressive-image__full"
        :class="{ 'is-loaded': loaded }"
        decoding="async"
        @load="onFullLoad"
      />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    full: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    srcset: {
      type: String,
      default: '',
    },
    webpSrcset: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '100vw',
    },
    alt: {
      type: String,
      default: '',
    },
    eager: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      shouldLoadFull: false,
      loaded: false,
    };
  },

  mounted() {
    if (this.eager) {
      this.shouldLoadFull = true;
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.shouldLoadFull = true;
          this.observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    this.observer.observe(this.$refs.container);
  },

  beforeUnmount() {
    this.observer?.disconnect();
  },

  methods: {
    onFullLoad() {
      this.loaded = true;
    },
  },
};
</script>

<style scoped>
.progressive-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(119, 160, 173);
}

.progressive-image__placeholder,
.progressive-image__full,
.progressive-image picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.progressive-image__placeholder,
.progressive-image__full {
  object-fit: cover;
}

.progressive-image__placeholder {
  filter: blur(18px);
  transform: scale(1.08);
}

.progressive-image__full {
  opacity: 0;
  transition: opacity 0.45s ease;
}

.progressive-image__full.is-loaded {
  opacity: 1;
}
</style>
