<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <!-- Left Section - Hero Image -->
      <section
        class="relative flex h-48 items-end bg-gradient-to-br from-gray-900 to-blue-900 lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden"
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
            <div class="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-300/30 mb-4">
              <span class="text-yellow-200 text-sm font-semibold">Password Recovery</span>
            </div>

            <h2 class="text-4xl font-bold text-white leading-tight xl:text-5xl">
              Need Help Accessing Your Account?
            </h2>

            <p class="text-lg leading-relaxed text-white/90 max-w-lg">
              Don't worry! Enter your matric number and we'll send you password reset instructions to help you get back into your NIMELSSA account.
            </p>

            <div class="flex items-center space-x-2 text-blue-200 pt-4">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Secure Password Recovery</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Right Section - Form -->
      <main class="flex items-center justify-center px-4 py-8 sm:px-6 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6">
        <div class="w-full max-w-md lg:max-w-lg">
          <!-- Mobile Logo -->
          <div class="flex justify-center lg:hidden -mt-20 mb-8">
            <nuxt-link to="/" class="inline-block">
              <div class="flex items-center justify-center h-20 w-20 bg-white rounded-2xl shadow-xl border-4 border-white">
                <img
                  alt="NIMELSSA Logo"
                  src="@/assets/images/logo.png"
                  class="h-16 w-16"
                />
              </div>
            </nuxt-link>
          </div>

          <!-- Forgot Password Card -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <!-- Header with Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                </svg>
              </div>
            </div>

            <div class="text-center mb-6">
              <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
              <p class="text-sm text-gray-600">
                No worries! We'll send password reset information to your registered email.
              </p>
            </div>

            <form @submit.prevent="handleForgotPassword" class="space-y-5">
              <!-- Matric Number Input -->
              <div>
                <label for="matric" class="block text-sm font-semibold text-gray-700 mb-2">
                  Matric Number
                </label>
                <div class="relative">
                  <input
                    id="matric"
                    v-model="form.matric"
                    @input="validateMatricNumber"
                    type="number"
                    name="matric"
                    :disabled="processing"
                    placeholder="Enter your 9-digit matric number"
                    :class="[
                      'w-full rounded-xl border-2 py-3.5 pl-4 pr-12 bg-white text-sm text-gray-900 shadow-sm transition-all duration-200 focus:ring-4 focus:ring-blue-100 outline-none',
                      !isMatricValid && isTyping
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-gray-200 focus:border-blue-500',
                      processing ? 'cursor-not-allowed opacity-60' : ''
                    ]"
                  />
                  <div v-if="isMatricValid" class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <transition name="fade">
                  <p v-if="!isMatricValid && isTyping" class="mt-2 text-xs text-red-600 flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <span>Matric number must be exactly 9 digits</span>
                  </p>
                </transition>
              </div>

              <!-- Info Box -->
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div class="flex-1">
                    <h4 class="text-sm font-semibold text-blue-900 mb-1">What happens next?</h4>
                    <p class="text-xs text-blue-700">
                      We'll send a 4-digit OTP to your registered email address. Use this code to reset your password securely.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!isFormValid || processing"
                class="w-full mt-6 relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg group"
              >
                <span v-if="!processing" class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>Send Reset Instructions</span>
                </span>
                <span v-else class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </span>
                <div class="absolute inset-0 -z-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <!-- Back to Login -->
              <div class="text-center pt-4">
                <nuxt-link
                  to="/auth/login"
                  class="inline-flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  <span>Back to Login</span>
                </nuxt-link>
              </div>

              <!-- Sign Up Link -->
              <div class="pt-4 border-t border-gray-200">
                <p class="text-center text-sm text-gray-600">
                  Don't have an account?
                  <nuxt-link 
                    to="/auth/signup" 
                    class="font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                  >
                    Sign up here
                  </nuxt-link>
                </p>
              </div>
            </form>
          </div>

          <!-- Security Badge -->
          <div class="mt-6 flex items-center justify-center space-x-2 text-gray-600">
            <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">Your data is secure and encrypted</span>
          </div>
        </div>
      </main>
    </div>

    <!-- Success Modal -->
    <SuccessModal
      :showCloseButton="false"
      :showActionButton="false"
      title="Check Your Email!"
      desc="We are processing your password reset request. Please copy the 4-digit PIN below to reset your password."
      :show="showSuccessModal"
      actionPath="/auth/reset"
      :extra="otp"
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
      otp: '',
      form: {
        matric: "",
      },
      isTyping: false,
    };
  },
  computed: {
    isFormValid() {
      return !!this.form.matric && this.isMatricValid;
    },
    isMatricValid() {
      return /^\d{9}$/.test(this.form.matric);
    },
  },
  methods: {
    validateMatricNumber() {
      this.isTyping = true;
    },
    handleForgotPassword() {
      this.processing = true;
      this.$axios
        .post(
          "https://nimelssa-elections-backend.onrender.com/api/auth/forgot-password",
          this.form
        )
        .then((res) => {
          this.otp = res.data.otp;
          this.showSuccessModal = true;
          sessionStorage.setItem('matric', this.form.matric);
        })
        .catch((error) => {
          console.error(error.response);
          const errorMessage =
            error.response?.data?.message || "Failed to process request. Please try again.";
          this.$toastr.e(errorMessage);
        })
        .finally(() => {
          this.processing = false;
        });
    },
  },
};
</script>

<style scoped>
/* Hide number input arrows */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>