<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <!-- Left Section - Hero Image (Sticky on desktop) -->
      <section
        class="relative hidden lg:flex h-48 items-end bg-gradient-to-br from-gray-900 to-blue-900 lg:col-span-5 lg:h-screen xl:col-span-6 lg:sticky lg:top-0 overflow-hidden"
      >
        <img
          alt="NIMELSSA Background"
          src="@/assets/images/add18.jpg"
          class="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        
        <!-- Animated background elements -->
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
        
        <div class="hidden lg:relative lg:block lg:p-12 z-10">
          <nuxt-link to="/" class="inline-block group">
            <div class="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-3 transition-all duration-300 group-hover:bg-white/20">
              <img
                alt="NIMELSSA Logo"
                src="@/assets/images/logo.png"
                class="h-14 w-14 rounded-xl"
              />
              <span class="text-white font-bold text-lg hidden xl:block">NIMELSSA</span>
            </div>
          </nuxt-link>

          <div class="mt-16 space-y-6">
            <div class="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-300/30 mb-4">
              <span class="text-blue-200 text-sm font-semibold">#NIMELSSADECIDES{{ new Date().getFullYear() }}</span>
            </div>

            <h2 class="text-4xl font-bold text-white leading-tight xl:text-5xl">
              Welcome to <span class="text-blue-300">NIMELSSA</span> Elections
            </h2>

            <p class="text-lg leading-relaxed text-white/90 max-w-lg">
              The Nigerian Medical Laboratory Science Students Association (NIMELSSA) is the student body Association of the department of Medical Laboratory Science, University of Lagos (UNILAG) under the College of Medicine.
            </p>

            <div class="flex items-center space-x-2 text-blue-200 pt-4">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Your vote is secure and anonymous</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Right Section - Voting Form -->
      <main class="lg:col-span-7 xl:col-span-6 overflow-y-auto h-screen">
        <div class="px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
          <!-- Mobile Header -->
          <div class="lg:hidden mb-8 flex justify-center">
            <nuxt-link to="/" class="inline-block">
              <div class="flex items-center justify-center h-16 w-16 bg-white rounded-2xl shadow-xl border-4 border-white">
                <img
                  alt="NIMELSSA Logo"
                  src="@/assets/images/logo.png"
                  class="h-12 w-12"
                />
              </div>
            </nuxt-link>
          </div>

          <!-- Sticky Header -->
          <div class="sticky top-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 z-20 pb-6 mb-8">
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div class="text-center">
                <div class="inline-block px-4 py-2 bg-blue-100 rounded-full mb-3">
                  <span class="text-blue-700 text-xs font-bold uppercase tracking-wide">Electoral Candidates</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  #NIMELSSADECIDES{{ new Date().getFullYear() }}
                </h2>
                <p class="text-sm text-gray-600">
                  Select your preferred candidates for each position
                </p>
              </div>
            </div>
          </div>

          <form @submit.prevent="submitVotes" class="max-w-4xl mx-auto">
            <!-- Loading State -->
            <div v-if="processing" class="flex flex-col items-center justify-center py-20">
              <svg class="animate-spin h-12 w-12 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p class="text-gray-600 font-medium">Loading candidates...</p>
            </div>

            <!-- Candidates List -->
            <div v-if="!processing && candidatesList.length" class="space-y-8">
              <div v-for="role in candidatesList" :key="role.key">
                <div v-if="role.candidates.length" class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl">
                  <!-- Role Header -->
                  <div class="mb-6 pb-4 border-b border-gray-200">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      {{ role.name }}
                    </h3>
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                      <p class="text-sm text-gray-600 font-medium">
                        {{ role.key.startsWith('senate') ? 'Select up to 3 candidates' : 'Select one candidate' }} or withhold your vote
                      </p>
                    </div>
                  </div>

                  <!-- Senate Positions (Multiple Selection) -->
                  <div v-if="role.key.startsWith('senate')" class="space-y-3">
                    <label
                      v-for="candidate in role.candidates"
                      :key="candidate.id"
                      :for="candidate.id"
                      @click="toggleSenateSelection(role.key, candidate.id)"
                      class="group flex items-center gap-4 w-full rounded-xl border-2 transition-all duration-300 cursor-pointer p-4"
                      :class="votes[role.key].includes(candidate.id) 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'"
                    >
                      <input
                        type="checkbox"
                        :name="role.key"
                        :value="candidate.id"
                        :checked="votes[role.key].includes(candidate.id)"
                        :id="candidate.id"
                        class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <img 
                        :src="candidate.image" 
                        alt="Candidate" 
                        class="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all"
                      />
                      <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-gray-900 truncate">{{ candidate.name }}</h4>
                        <p class="text-sm text-gray-600">{{ candidate.level }} Level</p>
                      </div>
                      <div v-if="votes[role.key].includes(candidate.id)" class="text-blue-600">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </label>

                    <!-- Withhold Vote Option for Senate -->
                    <label
                      :for="role.key + '-withhold'"
                      @click="withholdSenateVote(role.key)"
                      class="group flex items-center gap-4 w-full rounded-xl border-2 transition-all duration-300 cursor-pointer p-4"
                      :class="votes[role.key].length === 0 && votes[role.key].toString() === ''
                        ? 'border-gray-500 bg-gray-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-md'"
                    >
                      <input
                        type="radio"
                        :name="role.key"
                        value=""
                        v-model="votes[role.key]"
                        :id="role.key + '-withhold'"
                        class="h-5 w-5 border-gray-300 text-gray-600 focus:ring-gray-500 focus:ring-offset-0"
                      />
                      <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900">Withhold Vote</h4>
                        <p class="text-sm text-gray-600">
                          Skip voting for this category
                        </p>
                      </div>
                    </label>
                  </div>

                  <!-- Regular Positions (Single Selection) -->
                  <div v-if="!role.key.startsWith('senate')" class="space-y-3">
                    <label
                      v-for="candidate in role.candidates"
                      :key="candidate.id"
                      :for="candidate.id"
                      @click="votes[role.key] = candidate.id"
                      class="group flex items-center gap-4 w-full rounded-xl border-2 transition-all duration-300 cursor-pointer p-4"
                      :class="votes[role.key] === candidate.id 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'"
                    >
                      <input
                        type="radio"
                        :name="role.key"
                        :value="candidate.id"
                        v-model="votes[role.key]"
                        :id="candidate.id"
                        class="h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <img 
                        :src="candidate.image" 
                        alt="Candidate" 
                        class="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all"
                      />
                      <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-gray-900 truncate">{{ candidate.name }}</h4>
                        <p class="text-sm text-gray-600">{{ candidate.level }} Level</p>
                      </div>
                      <div v-if="votes[role.key] === candidate.id" class="text-blue-600">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </label>

                    <!-- Withhold Vote Option -->
                    <label
                      :for="role.key + '-withhold'"
                      @click="votes[role.key] = ''"
                      class="group flex items-center gap-4 w-full rounded-xl border-2 transition-all duration-300 cursor-pointer p-4"
                      :class="votes[role.key] === '' 
                        ? 'border-gray-500 bg-gray-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-gray-400 hover:shadow-md'"
                    >
                      <input
                        type="radio"
                        :name="role.key"
                        value=""
                        v-model="votes[role.key]"
                        :id="role.key + '-withhold'"
                        class="h-5 w-5 border-gray-300 text-gray-600 focus:ring-gray-500 focus:ring-offset-0"
                      />
                      <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900">Withhold Vote</h4>
                        <p class="text-sm text-gray-600">
                          Skip voting for this category
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="mt-10 mb-8 sticky bottom-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-6">
              <button
                type="submit"
                :disabled="submitting"
                class="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span v-if="!submitting" class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Submit Your Vote</span>
                </span>
                <span v-else class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </span>
                <div class="absolute inset-0 -z-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <!-- Security Notice -->
              <div class="mt-4 flex items-center justify-center space-x-2 text-gray-600">
                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-xs">Your vote is encrypted and anonymous</span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>

    <!-- Success Modal -->
    <SuccessModal :show="showSuccessModal" @close="showSuccessModal = false" />
  </main>
</template>

<script>
import SuccessModal from "@/components/SuccessModal.vue";

export default {
  layout: "auth",
  components: {
    SuccessModal,
  },
  data() {
    return {
      processing: false,
      showSuccessModal: false,
      submitting: false,
      deviceId: "",
      candidatesList: [],
      rawCandidates: [],
      userLevel: {},
      votes: {
        president: "",
        vice_president: "",
        academic_secretary: "",
        general_secretary: "",
        assistant_general_secretary: "",
        public_relations_officer: "",
        sport_secretary: "",
        financial_secretary: "",
        welfare_secretary: "",
        treasurer: "",
        senate_200: [],
        senate_300: [],
        senate_400: [],
        senate_500: [],
      },
      matricNumber: "",
    };
  },
  computed: {
    isFormValid() {
      return (
        this.votes.president ||
        this.votes.vice_president ||
        this.votes.academic_secretary ||
        this.votes.general_secretary ||
        this.votes.financial_secretary ||
        this.votes.welfare_secretary ||
        this.votes.treasurer ||
        this.votes.assistant_general_secretary ||
        this.votes.public_relations_officer ||
        this.votes.sport_secretary ||
        (this.votes.senate_200.length === 3 || this.votes.senate_200.length === 0) ||
        (this.votes.senate_300.length === 3 || this.votes.senate_300.length === 0) ||
        (this.votes.senate_400.length === 3 || this.votes.senate_400.length === 0) ||
        (this.votes.senate_500.length === 3 || this.votes.senate_500.length === 0)
      );
    },
  },
  methods: {
    submitVotes() {
      const payload = {
        deviceId: this.deviceId,
        votes: this.votes,
      };
      this.submitting = true;
      this.$axios
        .post(
          "https://nimelssa-elections-backend.onrender.com/api/election/submitVote",
          payload
        )
        .then((response) => {
          this.$toastr.s(response?.data?.message || 'Your vote was submitted successfully.');
          this.$router.push('/election/voting-categories');
          this.submitting = false;
        })
        .catch((error) => {
          this.$toastr.e(error?.response?.data?.error || 'Something went wrong!');
        }).finally(() => {
          this.submitting = false;
        });
    },
    fetchCandidates() {
      this.processing = true;
      const userLevel = JSON.parse(localStorage.getItem('user'));
      this.userLevel = userLevel;

      this.$axios
        .get(
          `https://nimelssa-elections-backend.onrender.com/api/candidate/level-candidates?level=${String(userLevel.level)}`
        )
        .then((res) => {
          this.rawCandidates = res.data;
          this.candidatesList = this.mapCandidatesToRoles(res.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.processing = false;
        });
    },
    mapCandidatesToRoles(candidates) {
      const rolesMap = {
        PRESIDENT: "president",
        VICE_PRESIDENT: "vice_president",
        SPORT_SECRETARY: "sport_secretary",
        ACADEMIC_SECRETARY: "academic_secretary",
        GENERAL_SECRETARY: "general_secretary",
        ASSISTANT_GENERAL_SECRETARY: "assistant_general_secretary",
        PUBLIC_RELATIONS_OFFICER: "public_relations_officer",
        SOCIAL_SECRETARY: "social_secretary",
        SENATE_200: "senate_200",
        SENATE_300: "senate_300",
        SENATE_400: "senate_400",
        SENATE_500: "senate_500",
        FINANCIAL_SECRETARY: "financial_secretary",
        WELFARE_SECRETARY: "welfare_secretary",
        TREASURER: "treasurer",
      };

      const roles = [];
      const userLevel = JSON.parse(localStorage.getItem('user'));

      Object.keys(rolesMap).forEach((position) => {
        if (userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
          return;
        }
        
        roles.push({
          name: position.replace(/_/g, " "),
          key: rolesMap[position],
          candidates: [],
        });
      });

      candidates.forEach((candidate) => {
        if (this.userLevel.level === "200" && 
            (candidate.position === "WELFARE_SECRETARY" || candidate.position === "FINANCIAL_SECRETARY")) {
          return;
        }

        const role = roles.find(
          (role) => role.key === rolesMap[candidate.position]
        );

        if (role) {
          role.candidates.push({
            id: candidate._id,
            name: candidate.name,
            image: candidate.image,
            level: candidate.level,
            quote: candidate.quote,
            cloudinary_id: candidate.cloudinary_id,
          });
        }
      });

      return roles;
    },
    toggleSenateSelection(roleKey, candidateId) {
      if (this.votes[roleKey].length === 0) {
        this.votes[roleKey] = [];
      }
      const selectedCandidates = this.votes[roleKey];
      const index = selectedCandidates.indexOf(candidateId);

      if (index > -1) {
        selectedCandidates.splice(index, 1);
      } else if (selectedCandidates.length < 3) {
        selectedCandidates.push(candidateId);
      }
    },
    withholdSenateVote(roleKey) {
      this.votes[roleKey] = [];
    },
  },
  async mounted() {
    this.fetchCandidates();
    this.deviceId = await this.$getDeviceId();
  },
};
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Smooth transitions */
* {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
