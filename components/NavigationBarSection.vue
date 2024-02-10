<template>
  <main>
    <div class="bg-yellow-900 w-20 h-screen sticky top-0 space-y-[400px] z-10">
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
    <AnimatedSidebar :isOpen="isOpen" />
  </main>
</template>

<script>
import AnimatedSidebar from "@/components/AnimatedSidebar.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
    AnimatedSidebar,
  },
  data() {
    return {
      isOpen: false,
      showSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style></style>
