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
              <!-- <p class="mt-1 text-sm lg:text-lg font-extrabold leading-8 text-gray-900">
                Voting Begins: t
              </p> -->
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
                    class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
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
                    class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
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
                  class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
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
                  class="flex cursor-pointer justify-between gap-4 w-full rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200"
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

     
          <div class="flex justify-center items-center mt-10">
            <button
              type="submit"
              :disabled="submitting"
              class="text-white disabled:cursor-not-allowed disabled:opacity-25 bg-black rounded-lg px-6 py-3 w-full"
            >
              {{ submitting ? "Processing" : "Submit" }}
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
          // this.showSuccessModal = true;
          this.$toastr.s(response?.data?.message || 'Your vote was submitted successfully.');
          this.$router.push('/election/voting-categories')
          this.submitting = false;
        })
        .catch((error) => {
          this.$toastr.e(error?.response?.data?.error || 'Something went wrong!');
        }).finally(() => {
          this.submitting = false;
        })
    },
    fetchCandidates() {
      this.processing = true;
       // Get the user's level from local storage
      const userLevel = JSON.parse(localStorage.getItem('user'))
      userLevel
      console.log(userLevel, 'Level here') // Adjust the key based on how you store it
      this.$axios
        .get(
          // `https://nimelssa-elections-backend.onrender.com/api/candidate/all-candidates`
          `https://nimelssa-elections-backend.onrender.com/api/candidate/level-candidates?level=${String(userLevel.level)}`
        )
        .then((res) => {
          console.log(res.data, 'here')
          const backendCandidates = res.data; // Assuming the candidates data is within `data`
          this.rawCandidates = res.data
          this.candidatesList = this.mapCandidatesToRoles(res.data);
        })
        .catch((error) => {
          // this.$toastr.e(error.response.data.message);
        })
        .finally(() => {
          this.processing = false;
        });
    },
    mapCandidatesToRoles(candidates) {
      console.log(candidates, 'form map fnx')
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

  const userLevel = JSON.parse(localStorage.getItem('user'))
  // Log the user's level
  console.log('User Level:', userLevel.level);

  // Initialize roles with empty candidates array, conditionally excluding some for level 200
  Object.keys(rolesMap).forEach((position) => {
    // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' for level 200 users
    if (userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
      console.log(`Excluding position: ${position} for level 200 user`);
      return; // Skip adding these roles if user is level 200
    }
    
    roles.push({
      name: position.replace("_", " "), // Format the position name for display
      key: rolesMap[position],
      candidates: [],
    });
  });

  // Log the initialized roles
  console.log('Initialized Roles:', roles);

  // Assign candidates to their corresponding role
  candidates.forEach((candidate) => {
    // Log each candidate's details
    console.log('Processing Candidate:', candidate);

    // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' candidates if user level is "200"
    if (this.userLevel.level === "200" && 
        (candidate.position === "WELFARE_SECRETARY" || candidate.position === "FINANCIAL_SECRETARY")) {
      console.log(`Excluding candidate: ${candidate.name} for position: ${candidate.position} at level 200`);
      return; // Skip adding this candidate if they meet the exclusion criteria
    }

    const role = roles.find(
      (role) => role.key === rolesMap[candidate.position]
    );

    if (role) {
      role.candidates.push({
        id: candidate._id, // Include the '_id' from the backend response
        name: candidate.name,
        image: candidate.image,
        level: candidate.level,
        quote: candidate.quote, // Include the 'quote' if needed
        cloudinary_id: candidate.cloudinary_id, // Include 'cloudinary_id' if needed
      });
      console.log(`Added candidate: ${candidate.name} to role: ${role.name}`);
    } else {
      console.log(`No matching role found for candidate: ${candidate.name} with position: ${candidate.position}`);
    }
  });

  // Log the final roles with assigned candidates
  console.log('Final Roles with Candidates:', roles);

  return roles;
},

//     mapCandidatesToRoles(candidates) {
//   const rolesMap = {
//     PRESIDENT: "president",
//     VICE_PRESIDENT: "vice_president",
//     SPORT_SECRETARY: "sport_secretary",
//     ACADEMIC_SECRETARY: "academic_secretary",
//     GENERAL_SECRETARY: "general_secretary",
//     ASSISTANT_GENERAL_SECRETARY: "assistant_general_secretary",
//     PUBLIC_RELATIONS_OFFICER: "public_relations_officer",
//     SOCIAL_SECRETARY: "social_secretary",
//     SENATE_200: "senate_200",
//     SENATE_300: "senate_300",
//     SENATE_400: "senate_400",
//     SENATE_500: "senate_500",
//     FINANCIAL_SECRETARY: "financial_secretary",
//     WELFARE_SECRETARY: "welfare_secretary",
//     TREASURER: "treasurer",
//   };

//   const roles = [];

//   // Determine if the user is at the 200 level
//   const isLevel200 = this.userLevel.level === "200";

//   // Initialize roles with empty candidates array, conditionally excluding some for level 200
//   Object.keys(rolesMap).forEach((position) => {
//     // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' for level 200 users
//     if (
//       isLevel200 &&
//       (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")
//     ) {
//       return; // Skip adding these roles if user is level 200
//     }

//     roles.push({
//       name: position.replace(/_/g, " "), // Format the position name for display
//       key: rolesMap[position],
//       candidates: [],
//     });
//   });

//   // Assign candidates to their corresponding role
//   candidates.forEach((candidate) => {
//     // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' candidates if user is level 200
//     if (
//       isLevel200 &&
//       (candidate.position === "WELFARE_SECRETARY" ||
//         candidate.position === "FINANCIAL_SECRETARY")
//     ) {
//       return; // Skip adding this candidate if they meet the exclusion criteria
//     }

//     const role = roles.find(
//       (role) => role.key === rolesMap[candidate.position]
//     );

//     if (role) {
//       role.candidates.push({
//         id: candidate._id, // Include the '_id' from the backend response
//         name: candidate.name,
//         image: candidate.image,
//         level: candidate.level,
//         quote: candidate.quote, // Include the 'quote' if needed
//         cloudinary_id: candidate.cloudinary_id, // Include 'cloudinary_id' if needed
//       });
//     }
//   });

//   return roles;
// },
//     mapCandidatesToRoles(candidates) {
//       const rolesMap = {
//         PRESIDENT: "president",
//         VICE_PRESIDENT: "vice_president",
//         SPORT_SECRETARY: "sport_secretary",
//         ACADEMIC_SECRETARY: "academic_secretary",
//         GENERAL_SECRETARY: "general_secretary",
//         ASSISTANT_GENERAL_SECRETARY: "assistant_general_secretary",
//         PUBLIC_RELATIONS_OFFICER: "public_relations_officer",
//         SOCIAL_SECRETARY: "social_secretary",
//         SENATE_200: "senate_200",
//         SENATE_300: "senate_300",
//         SENATE_400: "senate_400",
//         SENATE_500: "senate_500",
//         FINANCIAL_SECRETARY: "financial_secretary",
//         WELFARE_SECRETARY: "welfare_secretary",
//         TREASURER: "treasurer",
//       };

//   const roles = [];

//   // Initialize roles with empty candidates array, conditionally excluding some for level 200
//   Object.keys(rolesMap).forEach((position) => {
//     // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' for level 200 users
//     if (this.userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
//       return; // Skip adding these roles if user is level 200
//     }
    
//     roles.push({
//       name: position.replace("_", " "), // Format the position name for display
//       key: rolesMap[position],
//       candidates: [],
//     });
//   });

//   // Assign candidates to their corresponding role
//   candidates.forEach((candidate) => {
//     // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' candidates if their level is "200"
//     if (candidate.level === "200" && 
//         (candidate.position === "WELFARE_SECRETARY" || candidate.position === "FINANCIAL_SECRETARY")) {
//       return; // Skip adding this candidate if they meet the exclusion criteria
//     }

//     const role = roles.find(
//       (role) => role.key === rolesMap[candidate.position]
//     );

//     if (role) {
//       role.candidates.push({
//         id: candidate._id, // Include the '_id' from the backend response
//         name: candidate.name,
//         image: candidate.image,
//         level: candidate.level,
//         quote: candidate.quote, // Include the 'quote' if needed
//         cloudinary_id: candidate.cloudinary_id, // Include 'cloudinary_id' if needed
//       });
//     }
//   });

//   return roles;
// },

//     mapCandidatesToRoles(candidates) {
//   const rolesMap = {
//     PRESIDENT: "president",
//     VICE_PRESIDENT: "vice_president",
//     SPORT_SECRETARY: "sport_secretary",
//     ACADEMIC_SECRETARY: "academic_secretary",
//     GENERAL_SECRETARY: "general_secretary",
//     ASSISTANT_GENERAL_SECRETARY: "assistant_general_secretary",
//     PUBLIC_RELATIONS_OFFICER: "public_relations_officer",
//     SOCIAL_SECRETARY: "social_secretary",
//     SENATE_200: "senate_200",
//     SENATE_300: "senate_300",
//     SENATE_400: "senate_400",
//     SENATE_500: "senate_500",
//     FINANCIAL_SECRETARY: "financial_secretary",
//     WELFARE_SECRETARY: "welfare_secretary",
//     TREASURER: "treasurer",
//   };

//   const roles = [];

//   // Initialize roles with empty candidates array, conditionally excluding some for level 200
//   Object.keys(rolesMap).forEach((position) => {
//     // Exclude 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' for level 200 users
//     if (this.userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
//       return; // Skip adding these roles if user is level 200
//     }
    
//     roles.push({
//       name: position.replace("_", " "), // Format the position name for display
//       key: rolesMap[position],
//       candidates: [],
//     });
//   });

//   // Assign candidates to their corresponding role
//   candidates.forEach((candidate) => {
//     const role = roles.find(
//       (role) => role.key === rolesMap[candidate.position]
//     );
//     if (role) {
//       role.candidates.push({
//         id: candidate._id, // Include the '_id' from the backend response
//         name: candidate.name,
//         image: candidate.image,
//         level: candidate.level,
//         quote: candidate.quote, // Include the 'quote' if needed
//         cloudinary_id: candidate.cloudinary_id, // Include 'cloudinary_id' if needed
//       });
//     }
//   });

//   return roles;
// },

    // mapCandidatesToRoles(candidates) {
    //   const rolesMap = {
    //     PRESIDENT: "president",
    //     VICE_PRESIDENT: "vice_president",
    //     SPORT_SECRETARY: "sport_secretary",
    //     ACADEMIC_SECRETARY: "academic_secretary",
    //     GENERAL_SECRETARY: "general_secretary",
    //     ASSISTANT_GENERAL_SECRETARY: "assistant_general_secretary",
    //     PUBLIC_RELATIONS_OFFICER: "public_relations_officer",
    //     SOCIAL_SECRETARY: "social_secretary",
    //     SENATE_200: "senate_200",
    //     SENATE_300: "senate_300",
    //     SENATE_400: "senate_400",
    //     SENATE_500: "senate_500",
    //     FINANCIAL_SECRETARY: "financial_secretary",
    //     WELFARE_SECRETARY: "welfare_secretary",
    //     TREASURER: "treasurer",
    //     // Add other positions if necessary
    //   };

    //   const roles = [];

    //   // // Initialize roles with empty candidates array
    //   // Object.keys(rolesMap).forEach((position) => {
    //   //   roles.push({
    //   //     name: position.replace("_", " "), // Format the position name for display
    //   //     key: rolesMap[position],
    //   //     candidates: [],
    //   //   });
    //   // });

    //     // Initialize roles with empty candidates array
    //     Object.keys(rolesMap).forEach((position) => {
    //   // Skip adding 'WELFARE_SECRETARY' and 'FINANCIAL_SECRETARY' for level "200" users
    //   if (this.userLevel.level === "200" && (position === "WELFARE_SECRETARY" || position === "FINANCIAL_SECRETARY")) {
    //     return;
    //   }
      
    //   roles.push({
    //     name: position.replace("_", " "), // Format the position name for display
    //     key: rolesMap[position],
    //     candidates: [],
    //   });
    // });


    //   // Assign candidates to their corresponding role
    //   candidates.forEach((candidate) => {
    //     const role = roles.find(
    //       (role) => role.key === rolesMap[candidate.position]
    //     );
    //     if (role) {
    //       role.candidates.push({
    //         id: candidate._id, // Include the '_id' from the backend response
    //         name: candidate.name,
    //         image: candidate.image,
    //         level: candidate.level,
    //         quote: candidate.quote, // Include the 'quote' if needed
    //         cloudinary_id: candidate.cloudinary_id, // Include 'cloudinary_id' if needed
    //       });
    //     }
    //   });

    //   return roles;
    // },
    toggleSenateSelection(roleKey, candidateId) {
      if (this.votes[roleKey].length === 0) {
        this.votes[roleKey] = []; // Clear the array if the user previously withheld the vote
      }
      const selectedCandidates = this.votes[roleKey];
      const index = selectedCandidates.indexOf(candidateId);

      if (index > -1) {
        // If the candidate is already selected, remove them
        selectedCandidates.splice(index, 1);
      } else if (selectedCandidates.length < 3) {
        // If less than 3 candidates are selected, add the new candidate
        selectedCandidates.push(candidateId);
      }
    },
    withholdSenateVote(roleKey) {
      this.votes[roleKey] = []; // Clear the array to indicate vote withholding
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.candidates-container {
  display: flex;
  overflow-x: auto;
}
</style>
