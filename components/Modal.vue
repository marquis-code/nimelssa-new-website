<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
      <div class="px-4 py-2 flex justify-between items-center border-b border-gray-200">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <button @click="close" class="text-gray-600 hover:text-gray-900">&times;</button>
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
