<template>
  <div class="bg-white">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Upcoming Events</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>

    <div class="container grid grid-cols-12 mx-auto">
      <div
        class="flex flex-col relative justify-center col-span-12 align-middle  dark:bg-gray-100 lg:col-span-6 border-2 shadow-md border-green-500 border-dotted lg:h-auto">
        <ssr-carousel loop :slides-per-page='1' :autoplay-delay='3'>
          <section class="bg-cover bg-top bg-no-repeat relative" v-for="(itm, idx) in carousels" :key="idx">
            <img :src="require(`@/assets/images/${itm.img}`)" alt=""
              class="h-[800px] w-full object-center object-cover" />
            <div class="absolute inset-0 bg-black/75"></div>
            <div class="absolute top-60">
              <div class="flex flex-col items-center p-8 py-12 text-center">
                <span class="text-white font-black">22nd December, 2023</span>
                <h1 class="py-4 text-5xl font-black text-white">NIMELSSA INDUCTION 🎉 </h1>
                <p class="pb-6 text-white font-black">Hurray Nimelssa Induction is here.</p>
                <div class="flex justify-center items-center gap-x-3 text-white" v-if="timeRemaining > 0">
                  <p class="text-white font-black md:text-3xl">{{ weeks }} Weeks</p>
                  <p class="text-white font-black md:text-3xl">{{ days }} Days</p>
                  <p class="text-white font-black md:text-3xl">{{ hours }} Hours</p>
                  <p class="text-white font-black md:text-3xl">{{ minutes }} Minutes</p>
                  <p class="text-white font-black md:text-3xl">{{ seconds }} Seconds</p>
                </div>
                <div v-else>
                  <p>Countdown has ended! </p>
                </div>
              </div>
            </div>
          </section>
        </ssr-carousel>
      </div>
      <div class="flex flex-col col-span-12 text-gray-900 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-700">
        <div class="pt-6 pb-4 space-y-2" v-for="(itm, idx) in events" :key="idx">
          <span>{{ itm.date }}</span>
          <h1 class="text-3xl font-bold">{{ itm.title }}</h1>
          <p>{{ itm.desc }}</p>
          <a rel="noopener noreferrer" href="#"
            class="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
            <span>Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
export default {
  components: {
    SsrCarousel,
  },
  data() {
    return {
      startDate: new Date(),
      endDate: new Date('2023-12-22'),
      timeRemaining: 0,
      events: [
        {
          title: 'LIFE’S A BEACH 2.0 🌊🎊',
          desc: 'Alied Medicals Freshers party',
          date: 'coming soon...'
        },
        {
          title: 'Freshers Orientation',
          desc: 'NIMELSSA Freshers Orientation programme',
          date: 'coming soon...'
        },
        {
          title: 'Novelty match',
          desc: 'NIMELSSA Novelity Match',
          date: 'coming soon...'
        },
        {
          title: 'Games night',
          desc: 'NIMELSSA Ganes Night',
          date: 'coming soon...'
        }
      ],
      carousels: [
        {
          img: 'add70.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add71.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add72.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add73.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add74.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add75.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add76.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add77.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add78.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add79.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add80.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add81.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add82.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add83.jpg',
          title: '',
          description: ''
        },
        {
          img: 'add84.jpg',
          title: '',
          description: ''
        },
      ]
    };
  },
  computed: {
    weeks() {
      return Math.floor(this.timeRemaining / (7 * 24 * 60 * 60));
    },
    days() {
      return Math.floor((this.timeRemaining % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    },
    hours() {
      return Math.floor((this.timeRemaining % (24 * 60 * 60)) / 3600);
    },
    minutes() {
      return Math.floor((this.timeRemaining % 3600) / 60);
    },
    seconds() {
      return this.timeRemaining % 60;
    },
  },
  methods: {
    updateTimer() {
      const now = new Date();
      this.timeRemaining = Math.max(0, Math.floor((this.endDate - now) / 1000));
    },
  },
  mounted() {
    // Update the timer every second
    this.updateTimer();
    this.timerInterval = setInterval(this.updateTimer, 1000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.timerInterval);
  },
};
</script>

<style scoped>
/* Add your component styles here if needed */
</style>
