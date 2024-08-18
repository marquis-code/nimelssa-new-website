<template>
  <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="flex flex-col items-center">
      <img src="/path-to-your-logo.png" alt="Logo" class="w-16 h-16 animate-spin" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
