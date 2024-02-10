<template>
  <main>
    <LoadSpinner v-if="showHideSpinner" />
    <section class="md:flex">
      <div
        class="bg-yellow-900 hidden md:block w-20 h-screen sticky top-0 space-y-[400px] z-10"
      >
        <div>
          <div class="pl-2 mt-10">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
          <p
            class="rotate-90 text-white text-2xl font-bold mt-10 leading-loose tracking-widest"
          >
            NIMELSSA
          </p>
        </div>
        <div class="pl-3 z-50">
          <button @click="toggleSidebar" class="z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <!-- <navigation-bar-section class="hidden md:block" /> -->
      <mobile-nav :isOpen="isOpen" @toggleNav="handleToggleNav" class="md:hidden block" />
      <div class="w-full overflow-y-auto">
        <Nuxt />
      </div>
      <!-- <CursorFx color="#006A4E" color-hover="#f1c40f" /> -->
    </section>
    <AnimatedSidebar :isOpen="isOpen" />
  </main>
</template>

<script>
import LoadSpinner from "@/components/LoadSpinner.vue";
import AnimatedSidebar from "@/components/AnimatedSidebar.vue";
// import { CursorFx } from "@luxdamore/vue-cursor-fx";
// import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";
export default {
  name: "default",
  components: { LoadSpinner, AnimatedSidebar },
  data() {
    return {
      isOpen: false,
      showHideSpinner: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showHideSpinner = false;
    }, 3000);
  },
  created() {
    // adds the event listener function that will handle the event
    this.$nuxt.$on("toggle", () => {
      this.showHideSpinner = false;
    });
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    handleToggleNav() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>


<style>
body {
  font-family: "Montserrat", sans-serif;
}
</style>
