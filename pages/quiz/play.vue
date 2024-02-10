<template>
  <div class="bg-gray-100 2xl:h-screen md:bg-gray-500 space-y-3 md:space-y-0">
    <p
      class="text-center text-gray-900 md:text-white md:pt-20 font-semibold text-sm md:text-2xl pt-6"
    >
      NIMELSSA QUIZ
    </p>
    <div
      class="fixed inset-x-0 bottom-0 p-4 flex justify-end bg-gray-200 z-50 md:hidden"
    >
      <nuxt-link
        to="/quiz"
        class="bg-black text-white text-sm rounded-md font-bold py-3 px-4"
      >
        Return to dashboard
      </nuxt-link>
    </div>
    <main
      class="mx-auto 2xl:pt-14 lg:flex items-start container max-w-screen-2xl gap-x-6 space-y-6 lg:space-y-0"
      v-if="!quizOver"
    >
      <div class="lg:w-6/12 space-y-2 md:space">
        <div
          class="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-11/12 mx-auto md:w-full"
        >
          <div
            class="bg-blue-600 h-2.5 rounded-full"
            :style="{ width: progressBarWidth }"
          ></div>
        </div>
        <div
          class="pt-6 border-gray-300 md:rounded-tr-md md:border-[0.6px] md:rounded-tl-md bg-white md:shadow px-2"
        >
          <div class="sm:hidden">
            <label for="Tab" class="sr-only">Tab</label>

            <select
              id="Tab"
              disabled
              class="w-full rounded-md border-gray-200 outline-none border-none pb-3"
            >
              <option select>LOGICAL SECTION</option>
              <option>APTITUDE SECTION</option>
              <option>REASONING SECTION</option>
            </select>
          </div>

          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px flex gap-6" aria-label="Tabs">
                <a
                  href="#"
                  :class="[
                    activeTab === 'mcq'
                      ? 'border-sky-500 border-b-2 font-bold text-gray-900'
                      : 'border-transparent',
                  ]"
                  class="border-b-2 px-1 pb-3 text-sm text-gray-400 flex items-center gap-x-3"
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                  </svg>

                  MCQ SECTION
                </a>

                <a
                  href="#"
                  :class="[
                    activeTab === 'spot'
                      ? 'border-sky-500 border-b-2 font-bold text-gray-900'
                      : 'border-transparent',
                  ]"
                  class="border-b-2 px-1 pb-3 text-sm text-gray-400 flex items-center gap-x-3"
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>

                  SPOT SECTION
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div
          class="bg-white p-3 md:shadow md:border-[0.6px] rounded-b-lg space-y-6"
        >
          <div
            class="md:flex justify-between items-center space-y-3 md:space-y-0"
          >
            <h1 class="font-semibold text-gray-900 text-sm">
              Question {{ currentQuestion + 1 }} / {{ questions.length }}
            </h1>
            <div class="md:flex items-center gap-x-3">
              <p class="font-semibold text-gray-900 text-sm">
                Time left for this question: {{ questionTimeLeft }} seconds
              </p>
              <span class="hidden lg:block">|</span>
              <p class="font-semibold text-gray-900 text-sm">
                Total Time Left: {{ totalTimeLeft }} seconds
              </p>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <div v-if="activeTab === 'spot'">
                <img
                  :src="
                    require(`@/assets/images/test/${questions[currentQuestion].imgUrl}`)
                  "
                  class="w-full h-36 object-cover object-center pb-3"
                  alt="question image"
                />
              </div>
              <h1 class="font-bold text-gray-900">
                {{ questions[currentQuestion].question }}
              </h1>
            </div>
            <div>
              <button
                v-for="option in optionKeys"
                :key="option"
                @click="selectRadio(option)"
                :class="{
                  '': true,
                  'bg-green-500 text-white': selectedRadio === option,
                }"
                class="flex items-center gap-x-3 hover:text-white hover:bg-gray-400 py-6 px-3 border-y-[0.6px] border-gray-300 w-full"
              >
                <input
                  type="radio"
                  :id="option"
                  :value="option"
                  v-model="selectedRadio"
                  :checked="true"
                  class="hidden"
                  name="options"
                />
                <label
                  :for="option"
                  :class="{
                    'w-6 h-6 border border-gray-300 rounded-full p-1 flex justify-center items-center': true,
                    'bg-green-500': selectedRadio === option,
                  }"
                >
                  <svg
                    v-if="selectedRadio === option"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4a90e2"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </label>
                <span class="ml-2 text-sm md:text-base text-left">{{
                  questions[currentQuestion][option]
                }}</span>
              </button>
            </div>

            <div class="flex justify-between items-center pb-24 md:pb-3">
              <button
                :disabled="currentQuestion === 0"
                @click="previousQuestion"
                class="shadow rounded-full text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-25 border bg-gray-500 text-gray-900 px-6 py-2.5"
              >
                Previous Question
              </button>
              <button
                :disabled="
                  currentQuestion + 1 === questions.length ||
                  selectedRadio === null
                "
                @click="nextQuestion"
                class="shadow rounded-full text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-25 border bg-blue-600 text-white font-medium px-6 py-2.5"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white md:shadow md:border-[0.6px] rounded-lg space-y-6 pb-32 lg:w-6/12 hidden lg:block"
      >
        <p class="font-semibold text-gray-800 px-6 pt-4">
          Questions in {{ activeTab === "mcq" ? "MCQ" : "SPOT" }} section
        </p>
        <div class="flex items-center flex-wrap m-3">
          <p
            v-for="i in questions.length"
            :key="i"
            :class="{
              'text-green-500': i === submittedInfo.length,
            }"
            class="rounded-full md:shadow p-2.5 h-10 m-3 w-10 flex justify-center items-center border-[0.7px]"
          >
            {{ i }}
          </p>
        </div>
      </div>
    </main>
    <div v-else class="w-11/12 mx-auto space-y-3 md:space-y-0 pb-4">
      <div class="flex justify-between items-center">
        <h1 class="text-center md:text-white text-gray-800 text-sm md:text-2xl">
          Thanks For Participating
        </h1>
        <button
          class="bg-black text-white rounded-lg px-3 py-2.5 text-sm hidden lg:block"
        >
          Return Home
        </button>
      </div>
      <div class="lg:flex gap-x-4 pt-4">
        <div class="space-y-2 lg:w-6/12 h-[800px] overflow-y-auto">
          <div class="flex items-center gap-x-6">
            <p class="text-sm font-semibold text-gray-700">
              Total Questions: {{ finalResult.total }}
            </p>
            <p class="text-sm font-semibold text-gray-700 flex items-center gap-x-3">
              Correct Answers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4a90e2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline></svg
              >: {{ finalResult.correct }}
            </p>
            <p class="text-sm font-semibold text-gray-700 flex items-center gap-x-3">
              Wrong Answers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d0021b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line></svg
              >: {{ finalResult.wrong }}
            </p>
            <p class="text-sm font-semibold text-gray-700">
              Overall performance: {{ finalResult.percent }}
            </p>
          </div>
          <div
            v-for="(itm, idx) in submittedInfo"
            :key="idx"
            class="bg-white rounded-md border px-3 py-2.5 space-y-2"
          >
            <p class="text-sm font-semibold">(Q) {{ itm.question }}</p>
            <p class="text-sm">(Selected Answer) {{ itm.answer }}</p>
            <p class="text-sm">(Correct Answer) {{ itm.correctAnswer }}</p>
            <p
              class="text-sm font-medium"
              :class="
                itm.status === 'wrong' ? 'text-red-500' : 'text-green-500'
              "
            >
              {{ itm.status }}
            </p>
          </div>
        </div>
        <div
          class="lg:w-6/12 hidden lg:block inset-y-0 bg-black backdrop-blur-sm relative"
        >
          <img
            src="@/assets/images/quiz/bg1.jpg"
            alt=""
            class="h-[800px] object-cover object-center rounded-lg w-full"
          />
          <div
            class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      selectedRadio: null,
      audioContext: null,
      oscillator: null,
      activeTab: "mcq",
      optionKeys: ["optionA", "optionB", "optionC", "optionD"],
      questions: [
        {
          question: "Which is not the aim of fixation?",
          optionA: "To prevent putrefaction",
          optionB: "Remove excess water from the tissue",
          optionC: "Prevent osmotic swelling",
          optionD: "Render the tissue suitable for subsequent staining",
          answer: "optionD",
        },
        {
          question: "Which statement about Formaldehyde is false?",
          optionA: "It is a water soluble gas (sat. approx. 40%)",
          optionB: "The best fixative for nucleic acids",
          optionC: "Concentrated formaldehyde is 40%",
          optionD: "Penetrates tissue rapidly",
          answer: "optionB",
        },
        {
          question: `Why isn't microwave fixation suitable for large specimens (of tissues/organs)?`,
          optionA:
            "Microwave fixation is best suited on tissue blocks 10-12mm thick",
          optionB: "The microwave radiation can damage fine tissue structures",
          optionC:
            "It is unable to heat the center of the tissue/organ sufficiently without overheating the outside",
          optionD: "Using microwaves accelerates the rate of putrefaction",
          answer: "optionC",
        },
        {
          imgUrl: "alcian.png",
          question: "Identify what tissue is demonstrated above",
          optionA: "connective and epithelial tissue tumors",
          optionB: "Kidney and bony tissues",
          optionC: "Liver",
          optionD: "Tissues of the GIT",
          answer: "optionA",
        },
        {
          imgUrl: "gordon.jpeg",
          question: "Identify the staining technique demonstrated above",
          optionA: "Hematoxylin and Eosin",
          optionB: "Periodic Acid Schiff",
          optionC: "Perls Prusian Blue",
          optionD: "None of the above",
          answer: "optionD",
        },
        {
          imgUrl: "pap.jpeg",
          question: "Identify the staining technique",
          optionA: "Hematoxylin and Eosin",
          optionB: "Periodic Acid Schiff",
          optionC: "Papanicolaou staining technique",
          optionD: "None of the above",
          answer: "optionC",
        },
        {
          imgUrl: "pas.png",
          question: "Identify the staining technique",
          optionA: "Hematoxylin and Eosin",
          optionB: "Periodic Acid Schiff",
          optionC: "Perls Prusian Blue",
          optionD: "None of the above",
          answer: "optionC",
        },
        {
          imgUrl: "hande.png",
          question: "Identify the staining technique",
          optionA: "Hematoxylin and Eosin",
          optionB: "Periodic Acid Schiff",
          optionC: "Perls Prusian Blue",
          optionD: "None of the above",
          answer: "optionA",
        },
      ],
      currentQuestion: 0,
      score: 0,
      questionTimer: null,
      totalTimer: null,
      questionTimeLeft: 15,
      totalTimeLeft: 300,
      quizOver: false,
      submittedInfo: [],
    };
  },
  computed: {
    progressBarWidth() {
      return `${(this.currentQuestion / this.questions.length) * 100}%`;
    },
    finalResult() {
      const rightAnswers = [];
      const wrongAnswers = [];
      this.submittedInfo.map((itm) => {
        if (itm.status === "correct") {
          rightAnswers.push(itm);
        }

        if (itm.status === "wrong") {
          wrongAnswers.push(itm);
        }
      });
      return {
        correct: rightAnswers.length,
        total: this.questions.length,
        wrong: wrongAnswers.length,
        percent: `${(rightAnswers.length / this.questions.length) * 100}%`,
      };
    },
  },
  mounted() {
    this.handleStartQuizPrompt();
  },
  methods: {
    handleStartQuizPrompt() {
      Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to start quiz",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, continue!",
      }).then((result) => {
        if (result.value) {
          this.init();
        } else {
          this.$router.push("/quiz");
        }
      });
    },
    init() {
      this.startTimers();
      this.initAudioContext();
    },
    handleBeforeUnload(event) {
      const message =
        "Are you sure you want to leave? Your progress might be lost.";
      alert(message);
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    },
    resetQuestionTimeLeft() {
      this.questionTimeLeft = 15;
    },
    startTimers() {
      this.questionTimer = setInterval(this.decrementQuestionTime, 1000);
      this.totalTimer = setInterval(this.decrementTotalTime, 1000);
    },
    decrementQuestionTime() {
      if (this.questionTimeLeft > 0) {
        this.questionTimeLeft -= 1;
      } else {
        const payload = {
          question: this.questions[this.currentQuestion].question,
          optionA: this.questions[this.currentQuestion].optionA,
          optionB: this.questions[this.currentQuestion].optionB,
          optionC: this.questions[this.currentQuestion].optionC,
          optionD: this.questions[this.currentQuestion].optionD,
          correctAnswer: this.questions[this.currentQuestion].answer,
          answer: "",
          status: "wrong",
        };
        this.submittedInfo.push(payload);
        this.currentQuestion += 1;
        if (!this.quizOver) {
          this.playSound();
        }
        this.selectedRadio = null;
        this.submitAnswer(null); // Submit no answer if time runs out
      }
    },
    selectedOption(value) {
      this.selectedRadio = value;
    },
    decrementTotalTime() {
      if (this.totalTimeLeft > 0) {
        this.totalTimeLeft -= 1;
      } else {
        this.endQuiz();
      }
    },
    submitAnswer(option) {
      // if (option === this.questions[this.currentQuestion].answer) {
      //   this.score += 1;
      // } else if (option !== null) {
      //   this.score -= 1;
      // }
      this.resetQuestionTimeLeft();
      // this.nextQuestion();
    },
    nextQuestion() {
      if (this.questions[this.currentQuestion].answer === this.selectedRadio) {
        const payload = {
          question: this.questions[this.currentQuestion].question,
          optionA: this.questions[this.currentQuestion].optionA,
          optionB: this.questions[this.currentQuestion].optionB,
          optionC: this.questions[this.currentQuestion].optionC,
          optionD: this.questions[this.currentQuestion].optionD,
          answer: this.selectedRadio,
          correctAnswer: this.questions[this.currentQuestion].answer,
          status: "correct",
        };
        this.submittedInfo.push(payload);
        this.score++;
      } else {
        const payload = {
          question: this.questions[this.currentQuestion].question,
          optionA: this.questions[this.currentQuestion].optionA,
          optionB: this.questions[this.currentQuestion].optionB,
          optionC: this.questions[this.currentQuestion].optionC,
          optionD: this.questions[this.currentQuestion].optionD,
          answer: this.selectedRadio,
          correctAnswer: this.questions[this.currentQuestion].answer,
          status: "wrong",
        };
        this.submittedInfo.push(payload);
      }
      this.currentQuestion += 1;
      this.selectedRadio = null;
      if (this.currentQuestion > 2) {
        this.activeTab = "spot";
      } else {
        this.activeTab = "mcq";
      }
      if (this.currentQuestion + 1 === this.questions.length) {
        this.endQuiz();
      } else {
        this.questionTimeLeft = 15;
      }
    },
    previousQuestion() {
      this.currentQuestion -= 1;
      if (this.currentQuestion > 0) {
        this.currentQuestion -= 1;
      } else {
        this.$toastr.w("There is no previous question");
      }
    },
    endQuiz() {
      clearInterval(this.questionTimer);
      clearInterval(this.totalTimer);
      this.quizOver = true;
      this.$toastr.s("Thanks for participating!");
    },
    selectRadio(itm) {
      this.selectedRadio = itm;
    },
    initAudioContext() {
      if (!window.AudioContext) {
        alert("Your browser does not support the Web Audio API");
        return;
      }
      this.audioContext = new AudioContext();
    },
    playSound() {
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.connect(this.audioContext.destination);
      this.oscillator.type = "sine"; // Type of the oscillator
      this.oscillator.frequency.setValueAtTime(
        440,
        this.audioContext.currentTime
      ); // Frequency in hertz (A4 note)
      this.oscillator.start();
      setTimeout(() => {
        this.oscillator.stop();
        this.oscillator.disconnect();
      }, 1000); // Stop after 1 second
    },
  },
  beforeDestroy() {
    clearInterval(this.questionTimer);
    clearInterval(this.totalTimer);
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  watch: {
    currentQuestion(val) {
      if (this.currentQuestion > 2) {
        this.activeTab = "spot";
      } else {
        this.activeTab = "mcq";
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/images/quiz/bg1.jpg");
  background-color: #cccccc;
}
</style>
