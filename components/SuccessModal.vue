<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
      <div v-if="showCloseButton"
        class="px-4 py-2 flex justify-between items-center border-b border-gray-200"
      >
        <h2 class="text-lg font-semibold">Success</h2>
        <button @click="close" class="text-gray-600 hover:text-gray-900">
          &times;
        </button>
      </div>
      <div class="p-4 text-center space-y-6">
        <div class="flex justify-center items-center">
          <img
            src="@/assets/icons/celebration.svg"
            alt="celebration"
            class="h-32 w-32"
          />
        </div>
        <h1 class="text-center text-xl font-semibold">{{ title }}</h1>
        <p class="text-green-600 font-semibold">{{ desc }}</p>
      </div>
      <div class="w-full p-3" v-if="showActionButton">
        <button
          @click="handleRedirection"
          class="bg-black text-white w-full py-3 rounded-md"
        >
          Go Home
        </button>
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
      default: "Thanks For Voting",
    },
    desc: {
      type: String,
      default: "Your vote was submitted successfully!",
    },
    showActionButton: {
      type: Boolean,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleRedirection(){
      this.$router.push('/election')
      this.close()
    }
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
