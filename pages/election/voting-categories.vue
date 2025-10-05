<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <!-- Left Section - Hero (Sticky on Desktop) -->
      <section
        class="relative flex h-64 items-end bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 lg:col-span-5 lg:h-screen xl:col-span-6 lg:sticky lg:top-0 overflow-hidden"
      >
        <img
          alt="NIMELSSA Background"
          src="@/assets/images/add18.jpg"
          class="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        
        <!-- Animated gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-pink-600/30 animate-pulse-slow"></div>
        
        <!-- Decorative circles -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div class="hidden lg:relative lg:block lg:p-12 z-10 w-full">
          <nuxt-link to="/" class="inline-block group">
            <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
              <img
                alt="NIMELSSA Logo"
                src="@/assets/images/logo.png"
                class="h-12 w-12 rounded-xl"
              />
              <span class="text-white font-bold text-xl hidden xl:block">NIMELSSA</span>
            </div>
          </nuxt-link>

          <div class="mt-16 space-y-6">
            <div class="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-300/30 mb-4">
              <span class="text-blue-200 text-sm font-semibold">#NIMELSSADECIDES{{ new Date().getFullYear() }}</span>
            </div>
            
            <h2 class="text-4xl font-bold text-white leading-tight xl:text-5xl">
              Meet Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Electoral Candidates</span>
            </h2>

            <p class="text-lg leading-relaxed text-white/90 max-w-lg">
              The Nigerian Medical Laboratory Science Students Association presents the candidates for the {{ new Date().getFullYear() }} elections. Review their profiles and make your informed choice.
            </p>

            <div class="space-y-3 pt-4">
              <div class="flex items-center space-x-3 text-blue-200">
                <div class="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium">Voting Date</p>
                  <p class="text-xs text-blue-300">6th November {{ new Date().getFullYear() }}</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3 text-purple-200">
                <div class="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-medium">Voting Hours</p>
                  <p class="text-xs text-purple-300">11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Header -->
        <div class="lg:hidden absolute inset-0 flex items-center justify-center z-10">
          <div class="text-center px-4">
            <nuxt-link to="/" class="inline-block mb-4">
              <img
                alt="NIMELSSA Logo"
                src="@/assets/images/logo.png"
                class="h-16 w-16 mx-auto rounded-xl shadow-xl"
              />
            </nuxt-link>
            <h1 class="text-2xl font-bold text-white mb-2">#NIMELSSADECIDES{{ new Date().getFullYear() }}</h1>
            <p class="text-blue-200 text-sm">Meet Your Electoral Candidates</p>
          </div>
        </div>
      </section>

      <!-- Right Section - Candidates (Scrollable) -->
      <main class="lg:col-span-7 xl:col-span-6 bg-white lg:h-screen lg:overflow-y-auto">
        <!-- Sticky Header with Voting Info -->
        <div class="sticky top-0 bg-gradient-to-r from-white via-blue-50 to-purple-50 z-20 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <div class="px-4 sm:px-8 lg:px-12 py-6">
            <div class="text-center space-y-2">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Electoral Candidates
              </h2>
              <div class="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
                <svg class="w-4 h-4 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <p class="text-sm font-bold text-gray-900">
                  Voting: 6th November {{ new Date().getFullYear() }}, 11 AM - 7 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 sm:px-8 lg:px-12 py-8">
          <!-- Candidates Grid -->
          <div v-if="!processing && candidates.length" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article
                v-for="itm in candidates"
                :key="itm.id"
                @click="selectCandidate(itm)"
                class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <!-- Image Container -->
                <div class="relative h-80 overflow-hidden">
                  <img
                    :src="itm.image"
                    :alt="itm.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  
                  <!-- Hover Overlay -->
                  <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300"></div>
                  
                  <!-- Ring Effect -->
                  <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>

                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <!-- Party Badge -->
                  <div v-if="itm.party" class="inline-block">
                    <span class="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-blue-300/50">
                      {{ itm.party }}
                    </span>
                  </div>

                  <!-- Name and Avatar -->
                  <div class="flex items-center space-x-3">
                    <img
                      :src="itm.image"
                      :alt="itm.name"
                      class="h-10 w-10 rounded-full ring-2 ring-white/50 object-cover"
                    />
                    <div class="flex-1">
                      <p class="text-white font-bold text-lg leading-tight">{{ itm.name }}</p>
                      <p class="text-gray-300 text-sm">{{ itm.level }} Level</p>
                    </div>
                  </div>

                  <!-- Role Badge -->
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                      {{ itm.role }}
                    </h3>
                    <svg class="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>

                <!-- Click indicator -->
                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- Loading State -->
          <div v-else-if="processing" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="i in 4" :key="i" class="h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse"></div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">No Candidates Available</h3>
            <p class="text-gray-600 mb-6">Candidates will appear here once they are registered.</p>
          </div>

          <!-- Voting Action Section -->
          <div class="mt-12 mb-8">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg">
              <div class="text-center space-y-6">
                <!-- Warning or Info Message -->
                <div v-if="!isVotingWindow" class="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <div class="flex-1 text-left">
                      <h4 class="text-sm font-bold text-red-900 mb-1">Voting Window Closed</h4>
                      <p class="text-sm text-red-700">
                        Voting is only open on <strong>Wednesday, 6th November {{ new Date().getFullYear() }}</strong>, between <strong>11:00 AM and 7:00 PM</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else class="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <div class="flex-1 text-left">
                      <h4 class="text-sm font-bold text-green-900 mb-1">Voting is Now Open!</h4>
                      <p class="text-sm text-green-700">
                        Cast your vote now. Voting closes at <strong>7:00 PM</strong> today.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Vote Button -->
                <button
                  @click="proceedToVote"
                  :disabled="!isVotingWindow"
                  class="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg overflow-hidden"
                >
                  <span class="relative z-10">Proceed To Vote</span>
                  <svg class="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <!-- Additional Info -->
                <p class="text-sm text-gray-600">
                  Review all candidates before proceeding to cast your vote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Enhanced Modal for Selected Candidate -->
    <transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="showModal = false"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Modal Header with Image -->
          <div v-if="selectedCandidate" class="relative">
            <div class="relative h-80 overflow-hidden rounded-t-2xl">
              <img
                :src="selectedCandidate.image"
                :alt="selectedCandidate.name"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <!-- Close Button -->
              <button
                @click="showModal = false"
                class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group"
              >
                <svg class="w-6 h-6 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <!-- Candidate Name Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h2 class="text-3xl font-bold text-white mb-2">{{ selectedCandidate.name }}</h2>
                <div class="flex items-center space-x-2">
                  <span class="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                    {{ selectedCandidate.level }} Level
                  </span>
                  <span v-if="selectedCandidate.party" class="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                    {{ selectedCandidate.party }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6 space-y-6">
              <!-- Role -->
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                <div class="flex items-center space-x-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-600 font-medium">Running For</p>
                    <p class="text-xl font-bold text-gray-900">{{ selectedCandidate.role }}</p>
                  </div>
                </div>
              </div>

              <!-- Bio/Quote -->
              <div v-if="selectedCandidate.bio" class="space-y-2">
                <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wide">Candidate Statement</h3>
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p class="text-gray-700 italic leading-relaxed">"{{ selectedCandidate.bio }}"</p>
                </div>
              </div>

              <!-- Additional Info Grid -->
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p class="text-xs text-gray-600 font-medium mb-1">Academic Level</p>
                  <p class="text-lg font-bold text-gray-900">{{ selectedCandidate.level }} Level</p>
                </div>
                <div v-if="selectedCandidate.party" class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <p class="text-xs text-gray-600 font-medium mb-1">Party/Clan</p>
                  <p class="text-lg font-bold text-gray-900">{{ selectedCandidate.party }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
export default {
  data() {
    return {
      candidates: [],
      processing: false,
      selectedCandidate: null,
      showModal: false,
      votingDate: new Date('2025-11-06'),
      startHour: 11,
      endHour: 19,
    };
  },
  computed: {
    isVotingWindow() {
      const now = new Date();
      return (
        now.getFullYear() === this.votingDate.getFullYear() &&
        now.getMonth() === this.votingDate.getMonth() &&
        now.getDate() === this.votingDate.getDate() &&
        now.getHours() >= this.startHour &&
        now.getHours() < this.endHour
      );
    },
  },
  methods: {
    proceedToVote() {
      if (this.isVotingWindow) {
        this.$router.push('/election/vote');
      }
    },
    selectCandidate(candidate) {
      this.selectedCandidate = candidate;
      this.showModal = true;
    },
    async fetchCandidates() {
      this.processing = true;
      try {
        const response = await this.$axios.get('https://nimelssa-elections-backend.onrender.com/api/candidate/all-candidates');
        this.candidates = this.transformCandidatesData(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
        this.$toastr.e('Failed to load candidates. Please try again.');
      } finally {
        this.processing = false;
      }
    },
    transformCandidatesData(backendCandidates) {
      return backendCandidates.map(candidate => ({
        id: candidate._id,
        name: candidate.name,
        level: candidate.level,
        party: this.mapLevelToParty(candidate.level),
        bio: candidate.quote,
        image: candidate.image,
        role: this.mapRoleToRoleName(candidate.position),
        hashTag: null,
      }));
    },
    mapRoleToRoleName(position) {
      const roleMap = {
        PRESIDENT: "President",
        VICE_PRESIDENT: "Vice President",
        SPORT_SECRETARY: "Sport Secretary",
        ACADEMIC_SECRETARY: "Academic Secretary",
        GENERAL_SECRETARY: "General Secretary",
        ASSISTANT_GENERAL_SECRETARY: "Assistant General Secretary",
        PUBLIC_RELATIONS_OFFICER: "Public Relations Officer",
        SOCIAL_SECRETARY: "Social Secretary",
        SENATE_200: "Senate 200",
        SENATE_300: "Senate 300",
        SENATE_400: "Senate 400",
        SENATE_500: "Senate 500",
        FINANCIAL_SECRETARY: "Financial Secretary",
        WELFARE_SECRETARY: "Welfare Secretary",
        TREASURER: "Treasurer"
      };
      return roleMap[position] || position;
    },
    mapLevelToParty(level) {
      const levelMap = {
        "200": 'Sentinels Clan',
        "300": 'Xanthrons Clan',
        "400": 'Phronesis Clan',
        "500": 'Nobilis Clan'
      };
      return levelMap[level] || level;
    },
  },
  mounted() {
    this.fetchCandidates();
  },
};
</script>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality */
.lg\:overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.lg\:overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.lg\:overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 10px;
}

.lg\:overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Modal animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9) translateY(20px);
}

/* Slow pulse animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>