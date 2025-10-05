<template>
  <main class="">
             <SketchBoard />

    <!-- Association Intro Banner -->
    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-20">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="relative z-10 max-w-6xl mx-auto">
        <p class="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white text-center lg:text-left animate-fade-in">
          <span class="font-bold text-blue-100">The Nigerian Medical Laboratory Science Students Association (NIMELSSA)</span>
          is the student body Association of the department of Medical Laboratory Science and is one of the departments of the University of Lagos (UNILAG) under the College of Medicine.
        </p>
      </div>
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Activities Carousel Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
          <div class="flex justify-center">
            <div class="w-20 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          </div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">Explore the vibrant community life and activities at NIMELSSA</p>
        </div>

        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
          <ssr-carousel loop :slides-per-page="1" :autoplay-delay="3">
            <section
              v-for="(itm, idx) in carousels"
              :key="idx"
              class="relative h-96 sm:h-[500px] lg:h-[600px]"
            >
              <img
                :src="require(`@/assets/images/${itm.img}`)"
                alt="NIMELSSA Activity"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </section>
          </ssr-carousel>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-16 bg-white">
      <upcoming-events />
    </section>

    <!-- Classes Section -->
    <section class="py-16 bg-gray-50">
      <our-classes />
    </section>

    <!-- Build Skills Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/extra3.jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight" data-aos="fade-up">
          BUILD THE <span class="text-blue-400">SKILLS</span>
        </h2>
        
        <p class="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Building skills as a medical laboratory science student involves mastering technical procedures, honing analytical thinking, and developing strong attention to detail. Effective communication, time management, and adherence to safety protocols are crucial. Continuous learning and staying updated on advancements in the field are essential, along with fostering interpersonal and teamwork skills.
        </p>

        <button
          class="group inline-flex items-center space-x-3 bg-white text-gray-900 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span>How We Do It</span>
          <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Build Yourself Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/shapes.jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-l from-purple-900/80 via-blue-900/60 to-purple-900/80"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight" data-aos="zoom-in">
          BUILD <span class="text-purple-300">YOURSELF</span>
        </h2>

        <p class="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mb-12 leading-relaxed" data-aos="fade-up">
          Embark on the journey of self-building with unwavering determination and a positive mindset. Embrace challenges as stepping stones, learn from failures as lessons, and celebrate successes as milestones. Cultivate resilience, set ambitious goals, and continuously strive for personal growth. Your potential knows no bounds – build the resilient, empowered, and remarkable individual you aspire to be.
        </p>

        <button
          class="group inline-flex items-center space-x-3 bg-white text-gray-900 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          data-aos="zoom-in"
        >
          <span>How We Do It</span>
          <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Build the World Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/shape2.jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-green-900/80 via-teal-900/60 to-green-900/80"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight" data-aos="zoom-in">
          BUILD THE <span class="text-green-300">WORLD</span>
        </h2>

        <p class="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mb-12 leading-relaxed" data-aos="fade-up">
          Building a world in the context of a medical laboratory science student involves mastering technical skills, enhancing analytical thinking, and developing attention to detail. This comprehensive skill set not only ensures personal success but also contributes to the broader goal of providing accurate and timely diagnostic results, ultimately making a meaningful difference in patient care.
        </p>

        <button
          class="group inline-flex items-center space-x-3 bg-white text-gray-900 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          data-aos="zoom-in"
        >
          <span>How We Do It</span>
          <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- This Could Be You Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <div class="h-1 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-8"></div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-right">
            THIS COULD BE <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">YOU</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl" data-aos="fade-right" data-aos-delay="200">
            NIMELSSA Unilag is an association which plans and arranges academic, social, non-academic activities, career fairs, representing a vibrant Department in the University of Lagos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          <div class="group">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="@/assets/images/user1.jpg"
                alt="Alumni"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-gray-900">Paul Sobers</h3>
              <p class="text-blue-600 font-semibold">Associate Software Engineer</p>
              <p class="text-gray-600">Interswitch</p>
            </div>
          </div>

          <div class="group">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="@/assets/images/user2.jpg"
                alt="Alumni"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-gray-900">Stephanie Smith</h3>
              <p class="text-blue-600 font-semibold">Senior Software Engineer</p>
              <p class="text-gray-600">Google</p>
            </div>
          </div>

          <div class="group">
            <div class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="@/assets/images/user3.jpg"
                alt="Alumni"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-gray-900">Mark Griffith</h3>
              <p class="text-blue-600 font-semibold">Mobile Engineer</p>
              <p class="text-gray-600">Amazon</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"></div>
      <div class="absolute inset-0 bg-black/10"></div>
      
      <div class="relative z-10 max-w-5xl mx-auto">
        <blockquote class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed text-center italic" data-aos="fade-up">
          "An unknown profession to some and not so important to many. It's because we just remain quiet and unseen but we see things beyond the capacity of the naked eye and we know the condition of patients without seeing them. We are proud Medical Laboratory Scientists."
        </blockquote>
        <p class="mt-8 text-center text-lg font-bold text-gray-800" data-aos="fade-up" data-aos-delay="200">
          — NIMELSSA Unilag
        </p>
      </div>
    </section>

    <!-- Hero Image Section -->
    <section class="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src="@/assets/images/outreach.jpg"
        alt="NIMELSSA Outreach"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center px-4" data-aos="zoom-in">
          Making A Difference
        </h2>
      </div>
    </section>

    <!-- NIMELSSA in the Media -->
    <section class="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <div class="h-1 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-8"></div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-right">
            NIMELSSA IN THE MEDIA
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl" data-aos="fade-right" data-aos-delay="200">
            Stay updated with our latest news, achievements, and community impact stories.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="@/assets/images/user1.jpg"
                alt="News"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                Documentary offers empowered approach to dementia and Alzheimer's disease
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                "Why" is a documentary created that puts forth a positive perspective on the lives of people living with cognitive decline.
              </p>
              <p class="text-xs font-semibold text-blue-600">November 21, 2023</p>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="@/assets/images/user2.jpg"
                alt="News"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                KU undergraduate nursing program rises to No. 17 in the nation
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                KU's Bachelor of Science in Nursing program ranked 23rd among all schools in the 2024 rankings.
              </p>
              <p class="text-xs font-semibold text-blue-600">September 19, 2023</p>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="@/assets/images/user3.jpg"
                alt="News"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                Heartland Consortium advances precision medicine research
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                Part of the National Institutes of Health working to collect data for advanced medical research.
              </p>
              <p class="text-xs font-semibold text-blue-600">September 13, 2023</p>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div class="relative h-64 overflow-hidden">
              <img
                src="@/assets/images/outreach.jpg"
                alt="News"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                Rural Kansas Photo Contest accepting entries
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                Invites entries to highlight the unique beauty of Kansas and its people through photography.
              </p>
              <p class="text-xs font-semibold text-blue-600">September 11, 2023</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Entrepreneurs Section -->
    <section class="py-16 bg-white">
      <our-entreprenures />
    </section>

    <!-- Sponsors Section -->
    <section class="py-16 bg-gray-50">
      <SponsorSection />
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
      <OutGoingTestimonials />
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <FrequentlyAskedQuestions />
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Map -->
          <div class="relative h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=University%20of%20Lagos+(NIMELSSA)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style="filter: grayscale(0.3)"
            ></iframe>
            
            <div class="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lg p-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Address</h3>
                  <p class="text-sm text-gray-700">College of Medicine, University of Lagos, Lagos, Nigeria</p>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:nimelssaunilag@email.com" class="text-sm text-blue-600 hover:underline">nimelssaunilag@email.com</a>
                  <h3 class="font-bold text-gray-900 text-xs uppercase tracking-wider mt-3 mb-2">Phone</h3>
                  <p class="text-sm text-gray-700">123-456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feedback Form -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Send Us Feedback</h2>
            <p class="text-gray-600 mb-8">Let us know what you think about NIMELSSA</p>

            <form @submit.prevent="handleFeedback" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  name="name"
                  class="w-full rounded-xl border-2 border-gray-200 py-3 px-4 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label for="matric" class="block text-sm font-semibold text-gray-700 mb-2">Matric Number</label>
                <input
                  v-model="form.matric"
                  type="number"
                  id="matric"
                  name="matric"
                  class="w-full rounded-xl border-2 border-gray-200 py-3 px-4 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Enter your matric number"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  name="message"
                  rows="5"
                  class="w-full rounded-xl border-2 border-gray-200 py-3 px-4 bg-white text-gray-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="!isFormEmpty || loading"
                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ loading ? "Sending..." : "Submit Feedback" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>   

    <footer class="bg-gray-100">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center text-teal-600">
          <img src="@/assets/images/logo.png" class="h-20 w-20" alt="" />
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"
        >
          My NIMELSSA. Your NIMELSSA. Our NIMELSSA
        </p>

        <ul
          class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
        >
          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              About
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              Alumni
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              NIMELSSA Quiz
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              NIMELSSA Records
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
              href="https://nimelssaunilag.wordpress.com/"
            >
              Blog
            </nuxt-link>
          </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/nimelssaunilageb/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </main>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import OurClasses from "@/components/OurClasses.vue";
import OutGoingTestimonials from "@/components/OutGoingTestimonials.vue";
import OurEntreprenures from "@/components/OurEntreprenures.vue";
import AboutUs from "@/components/AboutUs.vue";
import SponsorSection from "@/components/SponsorSection.vue";
// import LatestProducts from '@/components/LatestProducts.vue'
import SketchBoard from "@/components/SketchBoard.vue";
export default {
  layout: "landing",
  components: {
    SsrCarousel,
    UpcomingEvents,
    OurClasses,
    OutGoingTestimonials,
    OurEntreprenures,
    AboutUs,
    SketchBoard,
    SponsorSection,
    // LatestProducts
  },
  data() {
    return {
      loading: false,
      startDate: new Date(),
      endDate: new Date("2023-12-22"),
      timeRemaining: 0,
      form: {
        name: "",
        matric: "",
        message: "",
      },
      carousels: [
        {
          img: "add18.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero1.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero2.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero3.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero4.jpg",
          title: "",
          description: "",
        },
        {
          img: "add1.jpg",
          title: "",
          description: "",
        },
        {
          img: "add2.jpg",
          title: "",
          description: "",
        },
        {
          img: "add3.jpg",
          title: "",
          description: "",
        },
        {
          img: "add4.jpg",
          title: "",
          description: "",
        },
        {
          img: "add5.jpg",
          title: "",
          description: "",
        },
        {
          img: "add6.jpg",
          title: "",
          description: "",
        },
        {
          img: "add7.jpg",
          title: "",
          description: "",
        },
        {
          img: "add8.jpg",
          title: "",
          description: "",
        },
        {
          img: "add8.jpg",
          title: "",
          description: "",
        },
        {
          img: "add9.jpg",
          title: "",
          description: "",
        },
        {
          img: "add10.jpg",
          title: "",
          description: "",
        },
        {
          img: "add11.jpg",
          title: "",
          description: "",
        },
        {
          img: "add12.jpg",
          title: "",
          description: "",
        },
        {
          img: "add13.jpg",
          title: "",
          description: "",
        },
        {
          img: "add14.jpg",
          title: "",
          description: "",
        },
        {
          img: "add15.jpg",
          title: "",
          description: "",
        },
        {
          img: "add16.jpg",
          title: "",
          description: "",
        },
        {
          img: "add17.jpg",
          title: "",
          description: "",
        },
        {
          img: "add19.jpg",
          title: "",
          description: "",
        },
        {
          img: "add20.jpg",
          title: "",
          description: "",
        },
        {
          img: "add21.jpg",
          title: "",
          description: "",
        },
        {
          img: "add22.jpg",
          title: "",
          description: "",
        },
        {
          img: "add23.jpg",
          title: "",
          description: "",
        },
        {
          img: "add24.jpg",
          title: "",
          description: "",
        },
        {
          img: "add25.jpg",
          title: "",
          description: "",
        },
        {
          img: "add26.jpg",
          title: "",
          description: "",
        },
        {
          img: "add27.jpg",
          title: "",
          description: "",
        },
        {
          img: "add28.jpg",
          title: "",
          description: "",
        },
        {
          img: "add29.jpg",
          title: "",
          description: "",
        },
        {
          img: "add30.jpg",
          title: "",
          description: "",
        },
        {
          img: "add31.jpg",
          title: "",
          description: "",
        },
        {
          img: "add32.jpg",
          title: "",
          description: "",
        },
        {
          img: "add33.jpg",
          title: "",
          description: "",
        },
        {
          img: "add34.jpg",
          title: "",
          description: "",
        },
        {
          img: "add35.jpg",
          title: "",
          description: "",
        },
        {
          img: "add36.jpg",
          title: "",
          description: "",
        },
        {
          img: "add37.jpg",
          title: "",
          description: "",
        },
        {
          img: "add38.jpg",
          title: "",
          description: "",
        },
        {
          img: "add39.jpg",
          title: "",
          description: "",
        },
        {
          img: "add40.jpg",
          title: "",
          description: "",
        },
        {
          img: "add41.jpg",
          title: "",
          description: "",
        },
        {
          img: "add42.jpg",
          title: "",
          description: "",
        },
        {
          img: "add43.jpg",
          title: "",
          description: "",
        },
        {
          img: "add44.jpg",
          title: "",
          description: "",
        },
        {
          img: "add45.jpg",
          title: "",
          description: "",
        },
        {
          img: "add46.jpg",
          title: "",
          description: "",
        },
        {
          img: "add47.jpg",
          title: "",
          description: "",
        },
        {
          img: "add48.jpg",
          title: "",
          description: "",
        },
        {
          img: "add49.jpg",
          title: "",
          description: "",
        },
        {
          img: "add50.jpg",
          title: "",
          description: "",
        },
        {
          img: "add51.jpg",
          title: "",
          description: "",
        },
        {
          img: "add52.jpg",
          title: "",
          description: "",
        },
        {
          img: "add53.jpg",
          title: "",
          description: "",
        },
        {
          img: "add54.jpg",
          title: "",
          description: "",
        },
        {
          img: "add55.jpg",
          title: "",
          description: "",
        },
        {
          img: "add56.jpg",
          title: "",
          description: "",
        },
        {
          img: "add57.jpg",
          title: "",
          description: "",
        },
        {
          img: "add58.jpg",
          title: "",
          description: "",
        },
        {
          img: "add59.jpg",
          title: "",
          description: "",
        },
        {
          img: "add60.jpg",
          title: "",
          description: "",
        },
        {
          img: "add61.jpg",
          title: "",
          description: "",
        },
        {
          img: "add62.jpg",
          title: "",
          description: "",
        },
        {
          img: "add63.jpg",
          title: "",
          description: "",
        },
        {
          img: "add64.jpg",
          title: "",
          description: "",
        },
        {
          img: "add51.jpg",
          title: "",
          description: "",
        },
        {
          img: "add65.jpg",
          title: "",
          description: "",
        },
        {
          img: "add66.jpg",
          title: "",
          description: "",
        },
        {
          img: "add67.jpg",
          title: "",
          description: "",
        },
        {
          img: "add68.jpg",
          title: "",
          description: "",
        },
        {
          img: "add69.jpg",
          title: "",
          description: "",
        },
        {
          img: "add70.jpg",
          title: "",
          description: "",
        },
        {
          img: "add71.jpg",
          title: "",
          description: "",
        },
        {
          img: "add72.jpg",
          title: "",
          description: "",
        },
        {
          img: "add73.jpg",
          title: "",
          description: "",
        },
        {
          img: "add74.jpg",
          title: "",
          description: "",
        },
        {
          img: "add75.jpg",
          title: "",
          description: "",
        },
        {
          img: "add76.jpg",
          title: "",
          description: "",
        },
        {
          img: "add77.jpg",
          title: "",
          description: "",
        },
        {
          img: "add78.jpg",
          title: "",
          description: "",
        },
        {
          img: "add79.jpg",
          title: "",
          description: "",
        },
        {
          img: "add80.jpg",
          title: "",
          description: "",
        },
        {
          img: "add81.jpg",
          title: "",
          description: "",
        },
        {
          img: "add82.jpg",
          title: "",
          description: "",
        },
        {
          img: "add83.jpg",
          title: "",
          description: "",
        },
        {
          img: "add84.jpg",
          title: "",
          description: "",
        },
      ],
    };
  },
  head: {
    title: "NIMELSSA Unilag Official website",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "NIMELSSA Unilag Official website",
      },
    ],
  },
  methods: {
    setArrayLength(newLength) {
      if (newLength >= 0) {
        this.myArray.length = newLength;
      } else {
        console.error("Invalid array length");
      }
    },
    handleFeedback() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$toastr.s("Thanks for your feedback!");
        this.form.matric = "";
        this.form.name = "";
        this.form.message = "";
      }, 2000);
    },
    updateTimer() {
      const now = new Date();
      this.timeRemaining = Math.max(0, Math.floor((this.endDate - now) / 1000));
    },
    shuffleImages() {
      for (let i = this.carousels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.carousels[i], this.carousels[j]] = [
          this.carousels[j],
          this.carousels[i],
        ];
      }
    },
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.name && this.form.matric && this.form.message);
    },
    weeks() {
      return Math.floor(this.timeRemaining / (7 * 24 * 60 * 60));
    },
    days() {
      return Math.floor(
        (this.timeRemaining % (7 * 24 * 60 * 60)) / (24 * 60 * 60)
      );
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
  mounted() {
    this.shuffleImages();
    this.updateTimer();
    this.timerInterval = setInterval(this.updateTimer, 1000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.timerInterval);
  },
};
</script>

<style></style>

