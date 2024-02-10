<template>
  <section class="text-gray-600 body-font md:py-10">
    <div class="text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Levels</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="container px-5 pt-6 pb-20 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="(itm, idx) in levels" :key="idx">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center"  :src="require(`@/assets/images/${itm.imgUrl}`)"
              alt="blog">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ itm.name }}</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ itm.title }}</h1>
              <p class="leading-relaxed mb-3">{{ itm.descs }}</p>
            </div>
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
      levels: [
        {
          name: '200 LEVEL',
          imgUrl: 'xantrons.jpeg',
          title: 'Xanthrons Class',
          desc: 'The Xanthrons Class'
        },
        {
          name: '300 LEVEL',
          imgUrl: '200.jpeg',
          title: 'Phronesis Class',
          desc: 'The Phronesis Class'
        },
        {
          name: '400 LEVEL',
          imgUrl: 'sue.jpg',
          title: 'Nobilis Class',
          desc: 'The Nobilis Class'
        },
        {
          name: '500 LEVEL',
          imgUrl: 'generis.jpeg',
          title: ' Sui Generis Class',
          desc: 'The  Sui Generis Class'
        }
      ]
    }
  }
}
</script>

<style></style>
