<template>
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
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
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
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Electoral Candidates (#NIMELSSADECIDES2024)
            </h2>
            <p class="mt-1 text-lg font-extrabold leading-8 text-gray-900">
              Voting Begins: 4 days 14hrs 11mins 52seconds
            </p>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 overflow-y-auto h-[700px] hide-scrollbar"
          >
            <article
              @click="selectCandidate(itm)"
              v-for="itm in candidates"
              :key="itm.name"
              class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                :src="require(`@/assets/images/candidates/${itm.image}`)"
                alt=""
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
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
          <div class="flex justify-center items-center mt-10">
            <button @click="$router.push('/election/vote')" class="text-white bg-black rounded-lg px-6 py-3.5 w-full">Proceed To Vote</button>
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
          :src="
            require(`@/assets/images/candidates/${selectedCandidate.image}`)
          "
          :alt="selectedCandidate.name"
          class="w-full h-72 object-center object-cover rounded-lg mb-4"
        />
        <p><strong>Name:</strong> {{ selectedCandidate.name }}</p>
        <p><strong>Level:</strong> {{ selectedCandidate.level }}</p>
        <p><strong>Party:</strong> {{ selectedCandidate.party }}</p>
        <p><strong>Role:</strong> {{ selectedCandidate.role }}</p>
        <p><strong>Hash Tag:</strong> {{ selectedCandidate.hashTag }}</p>
      </div>
    </Modal>
  </main>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      showModal: false,
      selectedCandidate: null,
      candidates: [
        {
          id: 1,
          name: "Odiete Daniel",
          age: 45,
          party: "Nobilis",
          bio: "A brief bio of candidate one.",
          image: "candidate1.jpg",
          role: "Presidential Candidate",
          hashTag: "#Tevence4President",
        },
        {
          id: 2,
          name: "Tivence",
          age: 50,
          party: "Phronesis",
          bio: "A brief bio of candidate two.",
          image: "candidate2.jpg",
          role: "Presidential Candidate",
          hashTag: "#Tevence4Change",
        },
        {
          id: 3,
          name: "Fiyin",
          age: 45,
          party: "Xantrons",
          bio: "A brief bio of candidate one.",
          image: "candidate1.jpg",
          role: "Presidential Candidate",
          hashTag: "#Fiyin4Change",
        },
        {
          id: 4,
          name: "Kelvin",
          age: 50,
          party: "Xantrons",
          bio: "A brief bio of candidate two.",
          image: "candidate2.jpg",
          role: "Presidential Candidate",
          hashTag: "#Kelvin4Change",
        },
      ],
    };
  },
  methods: {
    selectCandidate(candidate) {
      this.selectedCandidate = candidate;
      this.showModal = true;
    },
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
