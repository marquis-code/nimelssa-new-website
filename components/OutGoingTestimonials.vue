<template>
  <section class="text-gray-600 body-font py-10">
    <div class="text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4" data-aos="zoom-in">Farewell messages from
        departing members
        of NIMELSSA (SURGE).</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="zoom-out-down"it>
          <div class="h-full text-center">
            <img alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="@/assets/images/samuel.jpeg">
            <div v-if="showShortText1" class="leading-relaxed space-y-3 tracking-wider">{{ shortText1 }}
              <button @click="toggleText1" class="font-bold">Read more</button>
            </div>
            <div v-else class="leading-relaxed space-y-3 tracking-wider">
              {{ fullText1 }}
              <button @click="toggleText1" class="font-bold">Read less</button>
            </div>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">EKUMA Samuel</h2>
            <p class="text-gray-500">Ex Financial Secretary and Senate Member</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="zoom-out-down">
          <div class="h-full text-center">
            <img alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="@/assets/images/bisola.jpeg">
            <p class="leading-relaxed">After all the shege, there is truly light at the end of a tunnel. My 6 + years
              journey as a nimelssaite wasn’t so smooth, but I’m grateful for amazing people I met. In one way or the
              other you guys kept me going. To every Nimelssaite, keep pressing and enjoy yourselves while at it , you’ve
              got this 🫶💪</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Akomolafe Abiola</h2>
            <p class="text-gray-500"></p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4" data-aos="zoom-out-down">
          <div class="h-full text-center">
            <img alt="testimonial"
              class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="@/assets/images/kelvin.jpeg">
            <div v-if="showShortText" class="leading-relaxed space-y-3 tracking-wider">
              {{ shortText }}
              <button @click="toggleText" class="font-bold">Read more</button>
            </div>
            <div v-else class="leading-relaxed space-y-3 tracking-wider">
              {{ fullText }}
              <button @click="toggleText" class="font-bold">Read less</button>
            </div>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Omue Kelvin</h2>
            <p class="text-gray-500">Ex President</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      shortText1: `NIMELSSA is a community of vibrant individuals pursuing
              several interests. In this
              diverse group one subject holds us together; the study of medical laboratory science. `,
      fullText1: `>NIMELSSA is a community of vibrant individuals pursuing
              several interests. In this
              diverse group one subject holds us together; the study of medical laboratory science. NIMELSSA provided me with opportunities to test several theories I've learned from
              my culture and books. It allowed me to network and to develop new interests. I'm glad I didn't just walk
              through the community but I also served the her through volunteerism, leadership capacity, and supports for
              other students.  I love NIMELSSA and I hope it continually grow and provides a dynamic incubation
              zone for her students.`,
      shortText: `Dear NIMELSSAITES, it's an honour to have served as the President of this great
                association, and I've never for once regreted serving you. Thanks for your love, support, advices, and constructive criticism, without this,.`,
      fullText: `Dear NIMELSSAITES, it's an honour to have served as the President of this great
                association, and I've never for once regreted serving you. Thanks for your love, support, advices, and constructive criticism, without this,
                I wouldn't be able to
                build myself to become a better version of who I am today. Now I have millions of reasons not to live for
                myself alone,but to live a life that will positively influence people around me.  My advice to the coming tenure is to set SMART ( Specific, Measurable,
                Attainable, Reliable, and
                Time-bound)
                goals.  My advice to Nimelssaites in general is to always think of how to give back to
                Nimelssa not what to
                always
                benefit from the association. Lastly, don't forget your primary objective in school. Study hard and make good
                grades.
`,
      showShortText: true,
      showShortText1: true
    };
  },
  methods: {
    toggleText() {
      // Toggle between short and full text
      this.showShortText = !this.showShortText;
    },
    toggleText1() {
      // Toggle between short and full text
      this.showShortText1 = !this.showShortText1;
    }
  }
};
</script>
