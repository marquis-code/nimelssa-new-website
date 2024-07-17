<template>
  <main class="my-10 md:my-32 space-y-10">
    <div class="flex flex-col items-center justify-center space-y-8">
      <MultiCarousel :images="images1" direction="right" />
      <MultiCarousel :images="images2" direction="left" />
    </div>
  </main>
</template>

<script>
import MultiCarousel from '@/components/MultiCarousel.vue';
export default {
  components: {
    MultiCarousel
  },
  data() {
    return {
      images1: [
        '/carousel/carousel1.jpg',
        '/carousel/carousel2.jpg',
        '/carousel/carousel3.jpg',
        '/carousel/carousel4.jpg',
        '/carousel/carousel5.jpg',
        '/carousel/carousel6.png',
        '/carousel/carousel7.png',
        '/carousel/carousel8.png',
        '/carousel/carousel9.png',
        '/carousel/carousel10.png',
        '/carousel/carousel11.png',
        '/carousel/carousel12.png',
        '/carousel/carousel13.png'
        // More images
      ],
      images2: [
        '/carousel/carousel1.jpg',
        '/carousel/carousel2.jpg',
        '/carousel/carousel3.jpg',
        '/carousel/carousel4.jpg',
        '/carousel/carousel5.jpg',
        '/carousel/carousel6.png',
        '/carousel/carousel7.png',
        '/carousel/carousel8.png',
        '/carousel/carousel9.png',
        '/carousel/carousel10.png',
        '/carousel/carousel11.png',
        '/carousel/carousel12.png',
        '/carousel/carousel13.png'
        // More images
      ],
    };
  },
}
</script>

<style></style>
