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
              <img
                alt="Night"
                src="@/assets/images/logo.png"
                class="h-16 w-16"
              />
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
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full"
        >
          <div class="max-w-xl lg:max-w-2xl w-full">
            <div class="relative -mt-16 block lg:hidden">
              <a
                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span class="sr-only">Home</span>
                <img
                  alt="Night"
                  src="@/assets/images/logo.png"
                  class="h-16 w-16"
                />
              </a>
            </div>

            <form class="mt-8 w-full space-y-6" @submit.prevent="handleReset">
              <div>
                <h1 class="font-semibold text-2xl">Reset Password</h1>
                <p class="text-sm text-gray-600">
                  Your new password must be different from previously used
                  password
                </p>
              </div>
              <div class="col-span-6 w-full">
                <label
                  for="Matric"
                  class="block text-sm font-medium text-gray-700"
                >
                  Matric
                </label>

                <input
                  id="Matric"
                  v-model="form.matric"
                  @input="validateMatricNumber"
                  :class="{
                    'border-red-500': !isMatricValid && isTyping,
                    'border-gray-300': isMatricValid || !isTyping,
                  }"
                  type="number"
                  name="matric"
                  :disabled="processing"
                  class="mt-1 w-full rounded-md disabled:cursor-not-allowed border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm"
                />
                <p
                  v-if="!isMatricValid && isTyping"
                  class="mt-1 text-sm text-red-500"
                >
                  Invalid matric number
                </p>
              </div>

              <div class="col-span-6 w-full relative">
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label
                  >
                </div>

                <input
                  id="Password"
                  v-model="form.newPassword"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  :disabled="processing"
                  class="mt-1 w-full rounded-md disabled:cursor-not-allowed border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm"
                />
                <img
                  @click="showPassword = !showPassword"
                  :src="require(`@/assets/icons/${eye}`)"
                  alt=""
                  class="absolute cursor-pointer top-9 right-4 h-6 w-6"
                />
              </div>

              <div class="col-span-6 w-full">
                <label
                  for="otp"
                  class="block text-sm font-medium text-gray-700"
                >
                  OTP
                </label>
                <div class="flex gap-4 mt-2">
                  <input
                    v-for="(digit, index) in otpDigits"
                    :key="index"
                    :ref="`otpInput${index}`"
                    v-model="otpDigits[index]"
                    @input="handleOtpInput(index, $event)"
                    @keydown="handleOtpKeydown(index, $event)"
                    @paste="handleOtpPaste"
                    type="text"
                    maxlength="1"
                    :disabled="processing"
                    class="h-16 w-16 rounded-full border border-gray-300 text-center text-3xl text-gray-500 focus:border-green-400 focus:shadow outline-none disabled:cursor-not-allowed"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="w-full">
                <button
                  :disabled="!isFormValid || processing"
                  class="w-full shrink-0 disabled:opacity-25 disabled:cursor-not-allowed rounded-md border bg-black px-12 py-3 text-sm font-medium text-white transition"
                >
                  {{ processing ? "processing..." : "Submit" }}
                </button>

                <p
                  class="pt-4 text-sm text-gray-500 sm:mt-0 text-center font-semibold"
                >
                  Don't have an account?
                  <nuxt-link to="/auth/signup" class="text-gray-700 underline">
                    Sign up </nuxt-link
                  >.
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
    <SuccessModal
      :showCloseButton="false"
      :showActionButton="false"
      :resetPassword="true"
      title="Congratulations!!!"
      desc="Your password has been updated successfully. Proceed To Login"
      :show="showSuccessModal"
      @close="showSuccessModal = false"
    />
  </main>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      processing: false,
      showSuccessModal: false,
      showPassword: false,
      form: {
        matric: "",
        newPassword: "",
        otp: "",
      },
      otpDigits: ["", "", "", ""],
      isTyping: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        !!this.form.matric &&
        !!this.form.newPassword &&
        !!this.form.otp &&
        this.isMatricValid
      );
    },
    eye() {
      return !this.showPassword ? "eye-close.svg" : "eye-open.svg";
    },
    isMatricValid() {
      return /^\d{9}$/.test(this.form.matric);
    },
  },
  methods: {
    validateMatricNumber() {
      this.isTyping = true;
    },
    handleOtpInput(index, event) {
      const value = event.target.value;
      
      // Only allow digits
      if (!/^\d*$/.test(value)) {
        this.otpDigits[index] = "";
        return;
      }

      // Update the digit
      this.otpDigits[index] = value;
      
      // Update form.otp
      this.form.otp = this.otpDigits.join("");

      // Move to next input if value is entered
      if (value && index < 3) {
        const nextInput = this.$refs[`otpInput${index + 1}`];
        if (nextInput && nextInput[0]) {
          nextInput[0].focus();
        }
      }
    },
    handleOtpKeydown(index, event) {
      // Handle backspace
      if (event.key === "Backspace" && !this.otpDigits[index] && index > 0) {
        const prevInput = this.$refs[`otpInput${index - 1}`];
        if (prevInput && prevInput[0]) {
          prevInput[0].focus();
        }
      }
      
      // Handle arrow keys
      if (event.key === "ArrowLeft" && index > 0) {
        const prevInput = this.$refs[`otpInput${index - 1}`];
        if (prevInput && prevInput[0]) {
          prevInput[0].focus();
        }
      }
      if (event.key === "ArrowRight" && index < 3) {
        const nextInput = this.$refs[`otpInput${index + 1}`];
        if (nextInput && nextInput[0]) {
          nextInput[0].focus();
        }
      }
    },
    handleOtpPaste(event) {
      event.preventDefault();
      const pastedData = event.clipboardData.getData("text").trim();
      
      // Only process if it's 4 digits
      if (/^\d{4}$/.test(pastedData)) {
        for (let i = 0; i < 4; i++) {
          this.otpDigits[i] = pastedData[i];
        }
        this.form.otp = pastedData;
        
        // Focus the last input
        const lastInput = this.$refs[`otpInput3`];
        if (lastInput && lastInput[0]) {
          lastInput[0].focus();
        }
      }
    },
    handleReset() {
      this.processing = true;
      this.$axios
        .post(
          "https://nimelssa-elections-backend.onrender.com/api/auth/reset-password",
          this.form
        )
        .then((res) => {
          this.showSuccessModal = true;
          sessionStorage.removeItem('matric')
        })
        .catch((error) => {
          console.error(error.response);
          this.$toastr.e(error.response.data.message);
        })
        .finally(() => {
          this.processing = false;
        });
    },
    fetchMatric() {
      const userMatric = sessionStorage.getItem("matric");
      this.form.matric = userMatric;
    },
  },
  mounted() {
    this.fetchMatric();
    // Auto-focus first OTP input
    const firstInput = this.$refs.otpInput0;
    if (firstInput && firstInput[0]) {
      firstInput[0].focus();
    }
  },
};
</script>

<style>
/* Custom CSS to hide the arrows */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Hides the arrows in Firefox */
}
</style>