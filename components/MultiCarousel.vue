<template>
  <div class="carousel relative w-full h-20 md:h-64 overflow-hidden">
    <div class="carousel-item absolute top-0 left-0 right-0 bottom-0 flex gap-x-3"
      :class="{ 'move-right': direction === 'right', 'move-left': direction === 'left' }">
      <img v-for="(image, index) in images" :key="index" :src="image" alt=""
        class="min-w-[100px] md:min-w-[400px] h-32 md:h-60 object-cover object-center block origin-center skew-x-12 rounded-md" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      required: true,
      validator: function (value) {
        return ['left', 'right'].includes(value);
      },
    },
  },
};
</script>
