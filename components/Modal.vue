<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="bg-white m-4 rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
      <div class="px-4 py-2 flex justify-between items-center border-b border-gray-200">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <button @click="close" class="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
