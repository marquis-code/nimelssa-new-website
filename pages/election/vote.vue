<template>
  <main>
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">

        <section
          class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 lg:sticky lg:top-0"
        >
          <img
            alt="Night"
            src="@/assets/images/add18.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div class="hidden lg:relative lg:block lg:p-12">
            <a class="block text-white" href="/">
              <span class="sr-only">Home</span>
      
              <svg
                class="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
     
              </svg>
            </a>

            <h2
              class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            >
              Welcome to The Nigerian Medical Laboratory Science Students
              Association (NIMELSSA)
            </h2>

            <p class="mt-4 leading-relaxed text-white/90">
              The Nigerian Medical Laboratory Science Students Association
              (NIMELSSA) is the student body Association of the department of
              Medical Laboratory Science and is one of the departments of the
              University of Lagos (UNILAG) under the College of Medicine.
            </p>
          </div>
        </section>


        <form
          @submit.prevent="submitVotes"
          class="px-4 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 h-screen overflow-y-auto w-full"
        >

          <div class="sticky top-0 bg-white z-20 pt-4 pb-4 shadow-md">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Electoral Candidates (#NIMELSSADECIDES{{ new Date().getFullYear() }})
              </h2>
              <div class="mt-3 flex items-center justify-center gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p class="text-sm lg:text-base font-bold text-green-600">
                  VOTING IS NOW LIVE
                </p>
              </div>
              <p class="mt-1 text-xs lg:text-sm text-gray-600">
                Cast your vote now for the {{ new Date().getFullYear() }} NIMELSSA executives
              </p>
            </div>
          </div>



          <div v-if="!processing && candidatesList.length" class="">
            <div v-for="role in candidatesList" :key="role.key" class="mb-8">
              <h2 v-if="role.candidates.length" class="text-base lg:text-lg text-gray-900 font-bold">
                {{ role.name }}
              </h2>
              <p v-if="role.candidates.length" class="mb-4 text-sm">
                Select {{ role.key.startsWith('senate') ? 'up to 3' : 'only one' }} candidate or withhold your vote
              </p>

        
              <div v-if="role.key.startsWith('senate') && role.candidates.length">
                <div v-for="candidate in role.candidates" :key="candidate.id" class="flex items-center mb-4">
                  <label
                    :for="candidate.id"
                    class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 transition-all"
                    @click="toggleSenateSelection(role.key, candidate.id)"
                  >
                    <input
                      type="checkbox"
                      :name="role.key"
                      :value="candidate.id"
                      :checked="votes[role.key].includes(candidate.id)"
                      :id="candidate.id"
                      class="mr-4 h-5 w-5"
                    />
                    <img :src="candidate.image" alt="Candidate Image" class="w-16 rounded-lg h-16 object-cover mr-4" />
                    <div>
                      <h3 class="font-semibold">{{ candidate.name }}</h3>
                      <p class="text-sm font-medium text-gray-700">{{ candidate.level }} Level</p>
                    </div>
                  </label>
                </div>

          
                <div class="flex items-center mb-4">
                  <label
                    :for="role.key + '-withhold'"
                    class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 transition-all"
                    @click="withholdSenateVote(role.key)"
                  >
                    <input
                      type="radio"
                      :name="role.key"
                      value=""
                      v-model="votes[role.key]"
                      :id="role.key + '-withhold'"
                      class="mr-4 h-8 w-8"
                    />
                    <div>
                      <h3 class="font-semibold">Withhold Vote</h3>
                      <p class="text-sm font-medium text-gray-700">
                        Choose this option if you do not want to vote for any candidate in this category.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

   
              <div v-if="!role.key.startsWith('senate') && role.candidates.length" v-for="candidate in role.candidates" :key="candidate.id" class="flex items-center mb-4">
                <label
                  :for="candidate.id"
                  class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 transition-all"
                  @click="votes[role.key] = candidate.id"
                >
                  <input
                    type="radio"
                    :name="role.key"
                    :value="candidate.id"
                    v-model="votes[role.key]"
                    :id="candidate.id"
                    class="mr-4 h-5 w-5"
                  />
                  <img :src="candidate.image" alt="Candidate Image" class="w-16 rounded-lg h-16 object-cover mr-4" />
                  <div>
                    <h3 class="font-semibold">{{ candidate.name }}</h3>
                    <p class="text-sm font-medium text-gray-700">{{ candidate.level }} Level</p>
                  </div>
                </label>
              </div>


              <div v-if="!role.key.startsWith('senate') && role.candidates.length" class="flex items-center mb-4">
                <label
                  :for="role.key + '-withhold'"
                  class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 transition-all"
                  @click="votes[role.key] = ''"
                >
                  <input
                    type="radio"
                    :name="role.key"
                    value=""
                    v-model="votes[role.key]"
                    :id="role.key + '-withhold'"
                    class="mr-4 h-8 w-8"
                  />
                  <div>
                    <h3 class="font-semibold">Withhold Vote</h3>
                    <p class="text-sm font-medium text-gray-700">
                      Choose this option if you do not want to vote for any candidate in this category.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div v-if="processing" class="flex justify-center items-center py-12">
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p class="mt-4 text-gray-600">Loading candidates...</p>
            </div>
          </div>

          <div v-if="!processing && !candidatesList.length" class="flex justify-center items-center py-12">
            <div class="text-center">
              <p class="text-gray-600">No candidates available at the moment.</p>
            </div>
          </div>

     
          <div class="flex justify-center items-center mt-10">
            <button
              type="submit"
              :disabled="submitting"
              class="text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black hover:bg-gray-800 rounded-lg px-6 py-3 w-full font-semibold transition-all"
            >
              {{ submitting ? "Submitting Your Vote..." : "Submit Vote" }}
            </button>
          </div>
        </form>
      </div>
    </section>


    <SuccessModal :show="showSuccessModal" @close="showSuccessModal = false" />
  </main>
</template>


<script>
import SuccessModal from "@/components/SuccessModal.vue";
export default {
  layout: "auth",
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
          this.$router.push('/election/voting-categories')
          this.submitting = false;
        })
        .catch((error) => {
          this.$toastr.e(error?.response?.data?.error || 'Something went wrong!');
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
          this.$toastr.e(error?.response?.data?.message || 'Failed to load candidates');
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

      Object.keys(rolesMap).forEach((position) => {
        if (this.userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
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
  components: {
    SuccessModal,
  },
  async mounted() {
    this.fetchCandidates();
    this.deviceId = await this.$getDeviceId();
  },
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.candidates-container {
  display: flex;
  overflow-x: auto;
}
</style>
