<!-- <template>
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
</style> -->

<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4"
  >
    <div
      class="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full mx-auto"
    >
      <div
        v-if="showCloseButton"
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
        <!-- <p class="text-lg font-semibold cursor-pointer">{{extra}}</p> -->
        <div v-if="!resetPassword" class="flex justify-center items-center gap-x-3">
          <button class="flex justify-center items-center gap-x-3" @click="copyToClipboard">
            <p class="font-black text-2xl text-gray-700" >{{ extra || '500' }}</p>
            <img
              src="@/assets/icons/copy.svg"
              alt="copy"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>
      <div class="w-full p-3" v-if="showActionButton">
        <button
          @click="handleRedirection"
          class="bg-black text-white w-full py-3 rounded-md"
        >
          Go Home
        </button>
      </div>
      <div class="w-full p-3" v-if="actionPath">
        <button
          @click="handleClick"
          class="bg-black text-white w-full py-3 rounded-md"
        >
          Proceed To Reset Password
        </button>
      </div>
      <div class="w-full p-3" v-if="resetPassword">
        <button
          @click="handleLogin"
          class="bg-black text-white w-full py-3 rounded-md"
        >
          Proceed To Login
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
    actionPath: {
      type: String,
      default: "",
    },
    extra: {
      type: String,
      default: "5000",
    },
    desc: {
      type: String,
      default: "Your vote was submitted successfully!",
    },
    showActionButton: {
      type: Boolean,
      default: false,
    },
    resetPassword: {
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
    handleRedirection() {
      this.$router.push("/election");
      this.close();
    },
    handleClick() {
      this.$router.push("/auth/reset");
      this.close();
    },
    handleLogin(){
      this.$router.push("/auth/login");
      this.close();
    },
    copyToClipboard() {
      const text = this.extra;
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            this.$toastr.s('OTP pin was successfully copied to clipboard!')
          })
          .catch((err) => {
            this.$toastr.e('Could not copy text: "', err)
          });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed"; // Prevents scrolling to the bottom of the page in MS Edge.
        textarea.style.opacity = 0;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            this.$toastr.s('OTP pin was successfully copied to clipboard!')
          } else {
            this.$toastr.e('Could not copy text')
          }
        } catch (err) {
          this.$toastr.e('Could not copy text: "', err)
        }
        document.body.removeChild(textarea);
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
