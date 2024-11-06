<!-- <template>
  <main>
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
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

        <main
          class="px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full overflow-x-scroll hide-scrollbar"
        >
          <div class="mx-auto max-w-2xl text-center">
            <h2
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Electoral Candidates (#NIMELSSADECIDES2024)
          </h2>
          <div>
          </div>
          <p class="mt-1 text-sm lg:text-lg font-extrabold leading-8 text-gray-900">
            Voting Begins: 4 days 14hrs 11mins 52seconds
          </p>
          </div>
          <div v-if="!processing && candidates.length"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 overflow-y-auto  hide-scrollbar"
          >
            <article
              @click="selectCandidate(itm)"
              v-for="itm in candidates"
              :key="itm.id"
              class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                :src="itm.image"
                alt="Candidate Image"
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
              ></div>
              <div
                class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
              ></div>

              <div
                class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
              >
                <time datetime="2020-03-16" class="mr-8">{{
                  itm.hashTag
                }}</time>
                <div class="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="flex gap-x-2.5">
                    <img
                      :src="itm.image"
                      alt=""
                      class="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {{ itm.name }}
                  </div>
                </div>
              </div>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {{ itm.role }}
                </a>
              </h3>
            </article>
          </div>
          <div v-else-if="processing" class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>
          <div class="text-center border rounded-xl py-6 mt-6" v-else>
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 class="mt-2 text-sm font-semibold text-gray-900">No candidates available</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new candidate.</p>
          </div>
          <div class="flex justify-center items-center mt-10">

            <div class="flex flex-col items-center justify-center h-screen">
    <button
      :disabled="!isVotingWindow"
      @click="$router.push('/election/vote')"
      class="text-white bg-black rounded-lg px-6 py-3.5 w-full"
      :class="{ 'opacity-50 cursor-not-allowed': !isVotingWindow }"
    >
      Proceed To Vote
    </button>
    <p v-if="!isVotingWindow" class="mt-4 text-red-500">Voting is only open on Wednesday, 6th November 2024, between 9 AM and 5 PM.</p>
  </div>
          </div>
        </main>
      </div>
    </section>
    <Modal
      :show="showModal"
      :title="selectedCandidate?.name"
      @close="showModal = false"
    >
      <div v-if="selectedCandidate" class="space-y-6">
        <img
          :src="selectedCandidate.image"
          :alt="selectedCandidate.name"
          class="w-full h-72 object-center object-cover rounded-lg mb-4"
        />
        <p><strong>Name:</strong> {{ selectedCandidate.name }}</p>
        <p><strong>Level:</strong> {{ selectedCandidate.level }}</p>
        <p><strong>Party:</strong> {{ selectedCandidate.party }}</p>
        <p><strong>Role:</strong> {{ selectedCandidate.role }}</p>
      </div>
    </Modal>
  </main>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      candidates: [],
      processing: false,
      selectedCandidate: null,
      showModal: false,
      votingDate: new Date('2024-11-06'),
      startHour: 9,  // Voting opens at 9 AM
      endHour: 17,   // Voting closes at 5 PM
    };
  },
  methods: {
    proceedToVote() {
      this.$router.push('/election/vote');
    },
    selectCandidate(candidate) {
      this.selectedCandidate = candidate;
      this.showModal = true;
    },
    async fetchCandidates() {
      this.processing = true;
      try {
        const response = await this.$axios.get('https://nimelssa-elections-backend.onrender.com/api/candidate/all-candidates');
        const backendCandidates = response.data;
        this.candidates = this.transformCandidatesData(backendCandidates);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      } finally {
        this.processing = false;
      }
    },
    transformCandidatesData(backendCandidates) {
      return backendCandidates.map(candidate => {
        return {
          id: candidate._id,
          name: candidate.name,
          level: candidate.level,
          age: null, // Assuming age is not provided
          party: this.mapLevelToParty(candidate.level), // Assuming party is not provided
          bio: candidate.quote, // Mapping 'quote' to 'bio'
          image: candidate.image,
          role: this.mapRoleToRoleName(candidate.position),
          hashTag: null, // Assuming hashtag is not provided
        };
      });
    },
    mapRoleToRoleName(position) {
      const roleMap = {
        'PRESIDENT': 'President',
        'TREASURER': 'Treasurer',
        'VICE_PRESIDENT': 'Vice President',
        'ACADEMIC_SECRETARY': 'Academic Secretary',
        'GENERAL_SECRETARY': 'General Secretary',
        'WELFARE_SECRETARY': 'Welfare Secretary',
        'FINANCIAL_SECRETARY': 'Financial Secretary',
        'ASSISTANT_GENERAL_SECRETARY': 'Assistant General Secretary',
        'PUBLIC_RELATIONS_OFFICER': 'Public Relations Officer',
        'SPORT_SECRETARY': 'Sport Secretary',
        'SENATE_200': 'Senate 200 Level',
        'SENATE_300': 'Senate 300 Level',
        'SENATE_400': 'Senate 400 Level',
        'SENATE_500': 'Senate 500 Level',
        // Add more mappings as necessary
      };
      return roleMap[position] || position;
    },
    mapLevelToParty(level){
      const levelMap = {
        "200": 'Xanthrons Clan',
        "300": 'Phronesis Clan',
        "400": 'Nobilis Clan',
        "500": 'Sui Generis Clan'
      }
      return levelMap[level] || level
    }
  },
  mounted() {
    this.fetchCandidates();
  },
  computed: {
    isVotingWindow() {
      const now = new Date();

      // Check if today is the voting date
      if (
        now.getFullYear() === this.votingDate.getFullYear() &&
        now.getMonth() === this.votingDate.getMonth() &&
        now.getDate() === this.votingDate.getDate()
      ) {
        // Check if the current time is within the 9 AM to 5 PM window
        const currentHour = now.getHours();
        return currentHour >= this.startHour && currentHour < this.endHour;
      }
      return false;
    }
  },
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style> -->

<template>
  <main>
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <!-- Left Section (Sticky) -->
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
              <!-- SVG logo here -->
              <svg
                class="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- SVG Path here -->
              </svg>
            </a>

            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
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

        <!-- Right Section (Scrollable) -->
        <main
          class="px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 bg-white lg:py-12 xl:col-span-6 h-screen overflow-y-auto"
        >
          <!-- Sticky Header for Electoral Candidates Text -->
          <!-- <div class="sticky top-0 bg-white z-50 pt-4 pb-4">
            <div class="mx-auto max-w-2xl text-center">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Electoral Candidates (#NIMELSSADECIDES2024)
              </h2>
              <p class="mt-1 text-sm lg:text-lg font-extrabold leading-8 text-gray-900">
                Voting Begins: 4 days 14hrs 11mins 52seconds
              </p>
            </div>
          </div> -->
          <div class="sticky top-0 bg-white z-20 pt-4 pb-4 shadow-md">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Electoral Candidates (#NIMELSSADECIDES2024)
    </h2>
    <p class="mt-1 text-sm lg:text-lg font-extrabold leading-8 text-gray-900">
      Voting Begins:6th November 2024, between 9 AM and 5 PM.
    </p>
  </div>
</div>

          <!-- Candidates List -->
          <div
            v-if="!processing && candidates.length"
            class="grid grid-cols-1 lg:grid-cols-2 z- gap-6 pt-6"
          >
            <article
              v-for="itm in candidates"
              :key="itm.id"
              @click="selectCandidate(itm)"
              class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                :src="itm.image"
                alt="Candidate Image"
                class="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div
                class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
              ></div>

              <div
                class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
              >
                <time datetime="2020-03-16" class="mr-8">{{ itm.hashTag }}</time>
                <div class="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="flex gap-x-2.5">
                    <img
                      :src="itm.image"
                      alt=""
                      class="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {{ itm.name }}
                  </div>
                </div>
              </div>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {{ itm.role }}
                </a>
              </h3>
            </article>
          </div>

          <!-- Loading and No Candidates Message -->
          <div v-else-if="processing" class="h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"></div>
          <div class="text-center border rounded-xl py-6 mt-6" v-else>
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vector-effect="non-scaling-stroke"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 class="mt-2 text-sm font-semibold text-gray-900">No candidates available</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new candidate.</p>
          </div>

          <!-- Proceed to Vote Button -->
          <!-- <div class="flex justify-center items-center flex-col mt-10">
            <button
              :disabled="!isVotingWindow"
              @click="proceedToVote"
              class="text-white bg-black rounded-lg px-6 py-3.5 w-full"
              :class="{ 'opacity-50 cursor-not-allowed': !isVotingWindow }"
            >
              Proceed To Vote
            </button>
            <p v-if="!isVotingWindow" class="mt-4 text-red-500">
              Voting is only open on Wednesday, 6th November 2024, between 9 AM and 5 PM.
            </p>
          </div> -->
          <div class="flex justify-center items-center flex-col mt-10">
            <button
              @click="proceedToVote"
              class="text-white bg-black rounded-lg px-6 py-3.5 w-full"
            >
              Proceed To Vote
            </button>
            <p v-if="!isVotingWindow" class="mt-4 text-red-500">
              Voting is only open on Wednesday, 6th November 2024, between 9 AM and 5 PM.
            </p>
          </div>
        </main>
      </div>
    </section>

    <!-- Modal for Selected Candidate -->
    <Modal
      :show="showModal"
      :title="selectedCandidate?.name"
      @close="showModal = false"
    >
      <div v-if="selectedCandidate" class="space-y-6">
        <img
          :src="selectedCandidate.image"
          :alt="selectedCandidate.name"
          class="w-full h-72 object-center object-cover rounded-lg mb-4"
        />
        <p><strong>Name:</strong> {{ selectedCandidate.name }}</p>
        <p><strong>Level:</strong> {{ selectedCandidate.level }}</p>
        <p><strong>Party:</strong> {{ selectedCandidate.party }}</p>
        <p><strong>Role:</strong> {{ selectedCandidate.role }}</p>
      </div>
    </Modal>
  </main>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      candidates: [],
      processing: false,
      selectedCandidate: null,
      showModal: false,
      votingDate: new Date('2024-11-06'),
      startHour: 9,  // Voting opens at 9 AM
      endHour: 17,   // Voting closes at 5 PM
    };
  },
  methods: {
    proceedToVote() {
      this.$router.push('/election/vote');
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
</style>
