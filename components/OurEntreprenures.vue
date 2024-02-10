<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-10" data-aos="zoom-out-up">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Business Corner</h1>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <div class="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 -m-4 px-4">
        <div class="p-4 border-[0.6px] rounded-md bg-white shadow-md border-dotted border-green-600" data-aos="flip-left"
          data-aos-easing="ease-out-cubic" data-aos-duration="2000" v-for="(itm, idx) in shuffledArray" :key="idx">
          <div class="h-full flex flex-col items-center text-center">
            <div v-if="itm.imgUrl" class="w-full">
              <enlargeable-image :src="require(`@/assets/images/business/${itm.imgUrl}`)" class="z-50"
                animation_duration="700">
                <img alt="team" loading="lazy"
                  class="flex-shrink-0 rounded-lg h-56 object-cover w-full object-center mb-4"
                  :src="require(`@/assets/images/business/${itm.imgUrl}`)">
              </enlargeable-image>
            </div>
            <div v-else>
              <img class="" src="https://dummyimage.com/720x400" alt="blog">
            </div>
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">{{ itm.brandName }}</h2>
              <p class="mb-4">{{ itm.desc }}</p>
              <span class="inline-flex gap-x-3">
                <a v-if="itm.socials[0].facebook" :href="itm.socials[0].facebook" class="text-gray-500">
                  <img src="@/assets/icons/facebook.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].email" :href="generateMailtoLink(itm.socials[0].email, itm)">
                  <img src="@/assets/icons/gmail.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].instagram" :href="itm.socials[0].instagram" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/instagram.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].tiktok" :href="itm.socials[0].tiktok" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/tiktok.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].twitter" :href="itm.socials[0].twitter" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/twitter.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].website" :href="itm.socials[0].website" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/website.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].whatapp" :href="itm.socials[0].whatapp" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/whatsapp.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].youtube" :href="itm.socials[0].youtube" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/youtube.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 -m-4 px-4">
        <div class="p-4 border-[0.6px] rounded-md bg-white shadow-md border-dotted border-green-600"
          v-for="(itm, idx) in shuffledArray" :key="idx">
          <div class="h-full flex flex-col items-center text-center">
            <div v-if="itm.imgUrl" class="w-full">
              <enlargeable-image :src="require(`@/assets/images/business/${itm.imgUrl}`)" class="z-50"
                animation_duration="700">
                <img alt="team" loading="lazy"
                  class="flex-shrink-0 rounded-lg h-56 object-cover w-full object-center mb-4"
                  :src="require(`@/assets/images/business/${itm.imgUrl}`)">
              </enlargeable-image>
            </div>
            <div v-else>
              <img class="" src="https://dummyimage.com/720x400" alt="blog">
            </div>
            <div class="w-full">
              <h2 class="title-font font-medium text-lg text-gray-900">{{ itm.brandName }}</h2>
              <p class="mb-4">{{ itm.desc }}</p>
              <span class="inline-flex gap-x-3">
                <a v-if="itm.socials[0].facebook" :href="itm.socials[0].facebook" class="text-gray-500">
                  <img src="@/assets/icons/facebook.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].email" :href="generateMailtoLink(itm.socials[0].email, itm)">
                  <img src="@/assets/icons/gmail.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].instagram" :href="itm.socials[0].instagram" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/instagram.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].tiktok" :href="itm.socials[0].tiktok" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/tiktok.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].twitter" :href="itm.socials[0].twitter" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/twitter.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].website" :href="itm.socials[0].website" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/website.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
                <a v-if="itm.socials[0].whatapp" :href="itm.socials[0].whatapp" class="ml-2 text-gray-500">
                  <img src="@/assets/icons/whatsapp.svg" alt="" class="h-10 w-10 rounded-md border border-gray-800" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import EnlargeableImage from '@diracleo/vue-enlargeable-image'
export default {
  components: {
    EnlargeableImage,
    SsrCarousel
  },
  data() {
    return {
      shuffledArray: [],
      shuffleInterval: null,
      business: [
        {
          brandName: 'Crochet Style Serv',
          desc: 'Crochet style serv is a brand that specializes in making crochet wears without any restrictions on gender or age',
          imgUrl: 'crochet.JPG',
          socials: [
            {
              instagram: 'https://instagram.com/crochetstyleserv?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
              facebook: '',
              twitter: '',
              whatapp: '',
              tiktok: ' https://www.tiktok.com/@crochetstyleserv?_t=8hrqW0CoNIU&_r=1'
            }
          ]
        },
        {
          brandName: 'TDY ENTERPRISE ',
          desc: 'Sales of / Gym wears and gym accessories , I also sell crocs(all types of crocs), and corporate shirts and trousers. I also do personal shopping for people(most especially guys).',
          imgUrl: 'toyo.png',
          socials: [
            {
              instagram: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'yettysbeautyhub',
          desc: 'I\'m a makeup artist  A skincare consultant and a brand partner with ORIFLAME COMPANY ( a company that deals with skincare and wellness products) I\'m your go-to girl when it comes to getting the best naturally sourced skincare products',
          imgUrl: 'yetty.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/yettyz_touch?igshid=OGY3MTU3OGY1Mw==',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'J.G Davies footwears ',
          desc: 'Embrace timeless elegance and modern sensibilities with our handcrafted footwear from J.G Davies.',
          imgUrl: 'davies.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/jgd_footwears?igshid=OGQ5ZDc2ODk2ZA==',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Tote by Chara',
          desc: 'At Tote by Chara we sell Tote bag, Drawstring bag and Labcoat',
          imgUrl: 'chara.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/chara_totes?igshid=OGQ5ZDc2ODk2ZA==',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Nelle designs',
          desc: 'A fashion designer in lagos',
          imgUrl: 'nelle.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/nelledesigns.co?igshid=NzZlODBkYWE4Ng==',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'DT Creations',
          desc: 'Hi beautiful people, trust you\'re doing great😊 This is DT Creations, a graphic design brand that specializes in making topnotch flyers and logos for your brand.🤩 We also make beautiful flyers to celebrate your love ones in their big day🥳',
          imgUrl: 'nelle.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/nelledesigns.co?igshid=NzZlODBkYWE4Ng==',
              website: 'https://dtola.disha.page',
              facebook: '',
              twitter: '',
              whatapp: 'https://wa.me/message/FO4G3UZ557EEO1'
            }
          ]
        },
        {
          brandName: 'Tamar Kulture',
          desc: 'A bespoke fashion business catering to the fashion needs of the modern woman.',
          imgUrl: 'tamar.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/tamar_kulture?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Xel Beauty',
          desc: 'I sell lipglosses, lip balms, lip scrubs... Basically lip care items in cute packages',
          imgUrl: 'xel.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/_.xelbeauty?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Bola_Bola',
          desc: 'women clothing brand',
          imgUrl: 'bola.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/bola_bolacouture?igshid=OGQ5ZDc2ODk2ZA==',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'CLASSIC CONFECTIONERY',
          desc: ' Classic confectionery is your to go place when you want to satisfy your cravings We cook mouth watering meals , crunchy and tasty small chops , snacks , chin chin ,bento cake , cake parfait and so much more We also take bulk orders and cater for large events ',
          imgUrl: 'confectionaries.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/classic247_confectionery_?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: 'https://wa.me/message/VPMV7NXIENGFB1'
            }
          ]
        },
        {
          brandName: 'Purpose Driven Newsletter',
          desc: `In life's chaotic journey, maintaining focus can be challenging. This community is your haven, a space where both you and I can not only survive but thrive.`,
          imgUrl: 'purpose.png',
          socials: [
            {
              instagram: '',
              website: 'https://purposedrivenletters.substack.com',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Escentrique.ng',
          desc: 'Escentrique.ng is all about helping people evoke nostalgia and build confidence by helping them smell good',
          imgUrl: 'escentric.jpeg',
          socials: [
            {
              instagram: 'https://www.instagram.com/Escentrique.ng/',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Abbiescorner',
          desc: 'Abbiescorner is a  Unisex Creative Fashion Brand that sells fashionable items  like Plain Tees, Plain Caps , Turtleneck Tops and many more at affordable prices .',
          imgUrl: 'abbies.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/abbies.corner?igshid=MzNlNGNkZWQ4Mg==',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'CHICMANIA.NG',
          desc: 'CHICMANIA.NG is a brand that deals with facilitating Feminine confidence and eliciting sensuality with comfortable underwears and fashion accessories',
          imgUrl: 'chicmania.jpeg',
          socials: [
            {
              instagram: 'https://www.instagram.com/CHICMANIA.NG/',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Sleek Snip',
          desc: 'I offer haircut services within the school hostel',
          imgUrl: 'sleeksnip.jpg',
          socials: [
            {
              instagram: '',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: 'https://wa.me/+2348127608224'
            }
          ]
        },
        {
          brandName: 'Nails by Lola ',
          desc: 'Always ready to make peoples nails look peng',
          imgUrl: 'nailsByLola.png',
          socials: [
            {
              instagram: 'https://www.instagram.com/_nails_by_lola/',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: ''
            }
          ]
        },
        {
          brandName: 'Kim Goo Bol',
          desc: 'A Tiktoker and aspiring model',
          imgUrl: 'kim.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/bolu_babie?igshid=MTk0NTkyODZkYg==',
              website: '',
              facebook: '',
              twitter: '',
              whatapp: '',
              tiktok: 'https://www.tiktok.com/@bolu_babie?_t=8hqSeMD6rgb&_r=1'
            }
          ]
        },
        {
          brandName: 'Fine People Only',
          desc: 'Custom Made Clothing, Car Rentals, Car Sales, Car Haulage, Car Tracking, Private Jet Rental',
          imgUrl: 'finepeopleonly.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/ayoolanation?igshid=M2RkZGJiMzhjOQ%3D%3D&utm_source=qr',
              website: '',
              facebook: '',
              twitter: 'https://x.com/ayoolanation?s=11&t=p-GZw2BprFwLRZSiLFEt0A',
              whatapp: '',
              tiktok: 'https://www.tiktok.com/@ayoolanation?_t=8hqViU2Tc61&_r=1'
            }
          ]
        },
        {
          brandName: 'Jojotalksmed (medical blog)',
          desc: `Jojotalksmed is a medical blog that showcases the unlimited beauty of human medicine.
It offers information, ideas, revolutions, intricacies as well as features of the medical field, while offering the perk of a front seat outlook into the life of a medical student.`,
          imgUrl: 'jojo.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/jojo_sparkles25?igshid=OGQ5ZDc2ODk2ZA==',
              website: 'https://jojotalksmed.wixsite.com/jojotalksmed',
              facebook: '',
              email: 'Jojotalksmed@gmail.com',
              twitter: '',
              whatapp: '',
              tiktok: ''
            }
          ]
        },
        {
          brandName: 'IBK DEKO',
          desc: `IBK DEKO is a creative portrait, event and fashion photographer based in Lagos Nigeria. `,
          imgUrl: 'ibk.jpg',
          socials: [
            {
              instagram: 'https://instagram.com/ibk_deko?igshid=YmMyMTA2M2Y=',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: '',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `Teshy's assessories`,
          desc: `Hey guys 🤩🤩🤩
Less is more when it comes with your accessories
Here at Teshy accessories we offer you the best deal of jewelry and perfumes on a budget🫠`,
          imgUrl: 'teshy.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/ibk_deko?igshid=YmMyMTA2M2Y=',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: 'https://wa.me/c/2349033501456',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `Diamonds Tasty treats`,
          desc: `Diamonds tasty treat is concerned with production and distribution of home made snacks.`,
          imgUrl: 'diamond.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/diamonds_chinchin?igshid=NGVhN2U2NjQ0Yg==',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: 'https://wa.me/+2349012319605',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `Mitchel. Ly`,
          desc: `on my YouTube channel, I make vlogs, Q and A and everything relating to lifestyle as a Nigerian teenager. The goal is to create a visual diary for memories of events in my life, which includes the ups and downs. `,
          imgUrl: 'mitchel.jpeg',
          socials: [
            {
              instagram: '',
              website: 'https://youtube.com/@_mitchelLY?si=cf3FYPmzlBJEi3Wx',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: '',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `Demkins Print `,
          desc: `I deliver quality print service for students needs such as assignment, projects or proposals.`,
          imgUrl: 'print.jpeg',
          socials: [
            {
              instagram: '',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: 'https://wa.me/c/2349034821764',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `FK Bonnets`,
          desc: `I sell various designs and sizes of satin bonnets, sleep masks, and scrunchies`,
          imgUrl: 'funke.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/funke__ayinde?igshid=NGVhN2U2NjQ0Yg==',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: 'https://wa.me/c/2349034821764',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `Praizcodes Studio`,
          desc: `Graphic design and branding`,
          imgUrl: 'seyi.jpeg',
          socials: [
            {
              instagram: 'www.instagram.com/praizcodes',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: '',
              tiktok: ''
            }
          ]
        },
        {
          brandName: `JayWise Creations`,
          desc: `we are fashion designing company we deal with Senator wears, office shirts, plain trouser, joggers pants,suits, casual wears etc`,
          imgUrl: 'jay.jpeg',
          socials: [
            {
              instagram: 'https://instagram.com/jaywise_creations?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr',
              website: '',
              facebook: '',
              email: '',
              twitter: '',
              whatapp: 'https://wa.me/message/BIHHOLJQRKV5P1',
              tiktok: '',
              youtube: 'https://youtube.com/@obinnajoseph320?si=zYD0l2fDv2LXskd5'
            }
          ]
        },
      ]
    }
  },
  methods: {
    shuffleArray() {
      // Copy the original array to avoid modifying it directly
      const newArray = [...this.business];

      // Shuffle the array using Fisher-Yates algorithm
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }

      // Update the shuffled array in the data
      this.shuffledArray = newArray;
    },
    generateMailtoLink(email, itm) {
      const subject = `Welcomne to ${itm?.brandName}`;
      const body = `Our services; ${itm?.desc}`;

      // Encode special characters in the email, subject, and body
      const encodedEmail = encodeURIComponent(email);
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // Construct the mailto link
      return `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    }
  },
  mounted() {
    // Shuffle the array initially
    this.shuffleArray();

    // Set an interval to shuffle the array every 5 seconds (adjust as needed)
    this.shuffleInterval = setInterval(this.shuffleArray, 70000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    clearInterval(this.shuffleInterval);
  },
}
</script>

<style></style>
