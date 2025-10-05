<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Navigation Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <!-- Logo -->
        <div class="flex lg:flex-1">
          <nuxt-link to="/" class="group -m-1.5 p-1.5">
            <span class="sr-only">NIMELSSA</span>
            <div class="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
              <img class="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg" src="@/assets/images/logo.png" alt="NIMELSSA Logo" />
              <span class="hidden sm:block text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NIMELSSA</span>
            </div>
          </nuxt-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:gap-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- Login Button -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <nuxt-link
            to="/auth/login"
            class="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            <span>Log in</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </nuxt-link>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-50 lg:hidden"
          @click.self="mobileMenuOpen = false"
        >
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div class="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
              <nuxt-link to="/" class="flex items-center space-x-2" @click.native="mobileMenuOpen = false">
                <img class="h-10 w-10 rounded-xl" src="@/assets/images/logo.png" alt="NIMELSSA Logo" />
                <span class="text-lg font-bold text-gray-900">NIMELSSA</span>
              </nuxt-link>
              <button
                type="button"
                class="rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="p-6 space-y-2">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                @click="mobileMenuOpen = false"
              >
                {{ item.name }}
              </a>
              <div class="pt-4 border-t border-gray-200">
                <nuxt-link
                  to="/auth/login"
                  class="flex items-center justify-center space-x-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  @click.native="mobileMenuOpen = false"
                >
                  <span>Log in</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="relative isolate">
      <!-- Background Pattern -->
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-blue-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#grid-pattern)" />
      </svg>

      <!-- Gradient Blob -->
      <div
        class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 animate-pulse-slow"
          style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
        />
      </div>

      <!-- Hero Section -->
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <!-- Text Content -->
            <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <!-- Badge -->
              <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-8 animate-fade-in">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-semibold text-blue-900">#NIMELSSADECIDES{{ new Date().getFullYear() }}</span>
              </div>

              <!-- Main Heading -->
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up">
                Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">NIMELSSA</span> E-Voting Platform {{ new Date().getFullYear() }}
              </h1>

              <!-- Description -->
              <p class="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 sm:max-w-md lg:max-w-none animate-slide-up-delay">
                Empowering Your Voice and Shaping Our Future, The NIMELSSA'n Way! Cast your vote securely and be part of the change.
              </p>

              <!-- Features List -->
              <div class="mt-8 space-y-3 animate-slide-up-delay-2">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700">Secure and encrypted voting</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700">Easy candidate review</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700">Real-time results</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-slide-up-delay-3">
                <nuxt-link
                  to="/auth/login"
                  class="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  <span>Get Started</span>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </nuxt-link>
                <nuxt-link
                  to="/auth/signup"
                  class="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-300"
                >
                  <span>Create Account</span>
                </nuxt-link>
              </div>
            </div>

            <!-- Image Gallery -->
            <div class="mt-14 flex justify-end gap-4 sm:gap-6 lg:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <!-- Column 1 -->
              <div class="w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 pt-32 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="@/assets/images/add23.jpg"
                    alt="NIMELSSA Event"
                    class="aspect-[2/3] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>
              </div>

              <!-- Column 2 -->
              <div class="w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 sm:pt-52 lg:pt-36">
                <div class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="@/assets/images/add14.jpg"
                    alt="NIMELSSA Event"
                    class="aspect-[2/3] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="@/assets/images/add31.jpg"
                    alt="NIMELSSA Event"
                    class="aspect-[2/3] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>
              </div>

              <!-- Column 3 -->
              <div class="w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 pt-32 sm:pt-0">
                <div class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="@/assets/images/add9.jpg"
                    alt="NIMELSSA Event"
                    class="aspect-[2/3] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src="@/assets/images/add13.jpg"
                    alt="NIMELSSA Event"
                    class="aspect-[2/3] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div class="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                500+
              </div>
              <div class="text-sm font-medium text-gray-600">Registered Students</div>
            </div>
            <div class="text-center border-x border-gray-200">
              <div class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                15+
              </div>
              <div class="text-sm font-medium text-gray-600">Electoral Positions</div>
            </div>
            <div class="text-center">
              <div class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                100%
              </div>
              <div class="text-sm font-medium text-gray-600">Secure Voting</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: `NIMELSSA E-Voting Platform ${new Date().getFullYear() }`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'NIMELSSA E-Voting Platform - Empowering Your Voice and Shaping Our Future'
      }
    ]
  },
  data() {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: 'About', href: '#about' },
        { name: 'Candidates', href: '#candidates' },
        { name: 'How to Vote', href: '#how-to-vote' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  }
}
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter .bg-white,
.slide-leave-to .bg-white {
  transform: translateX(100%);
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animate-slide-up-delay {
  animation: slide-up 0.8s ease-out 0.2s both;
}

.animate-slide-up-delay-2 {
  animation: slide-up 0.8s ease-out 0.4s both;
}

.animate-slide-up-delay-3 {
  animation: slide-up 0.8s ease-out 0.6s both;
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>