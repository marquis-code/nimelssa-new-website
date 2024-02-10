<template>
  <div>
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-10"
      v-if="isOpen"
      @click="toggleSidebar"
    ></div>

    <!-- Semi-Circular Sidebar -->
    <div
      :class="`fixed top-0 right-0 h-full z-20 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`"
      class="md:w-64 w-72 shadow-lg rounded-bl-full bg-yellow-900"
    >
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-x-6 py-4 px-3">
          <img src="@/assets/images/logo.png" class="h-14 w-14" alt="logo" />
          <button @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul class="-mt-4 space-y-4">
          <li v-for="(item, index) in sidebarItems" :key="index" class="pr-6">
            <nuxt-link
              :to="item.path"
              :class="[item.path === $route.path ? 'font-semibold' : '']"
              @click.native="hide"
              class="px-4 py-3 text-sm font-light text-gray-700 rounded-md flex justify-between items-center no-underline"
            >
              <div class="flex items-center gap-x-2">
                <img
                  :src="require(`~/assets/icons/${item.icon}.svg`)"
                  alt=""
                  class="h-6 w-6"
                />
                <span
                  class="text-white font-medium"
                  :class="[
                    item.path === $route.path ? 'font-bold' : 'font-normal',
                  ]"
                >
                  {{ item.name }}</span
                >
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarItems: [
        {
          name: "NIMELSSA QUIZaaa",
          icon: "results",
          path: "/quiz",
        },
        {
          name: "NIMELSSA RESULTS HUB",
          icon: "poll",
          path: "/auth/login",
        },
        {
          name: "NIMELSSA COMMERCE",
          icon: "shopping",
          path: "/auth/login",
        },
        {
          name: "NIMELSSA PROJECT MANAGEMENT",
          icon: "projects",
          path: "/auth/login",
        },
      ],
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.rounded-bl-full {
  border-bottom-left-radius: 100% 50%;
}
</style>
