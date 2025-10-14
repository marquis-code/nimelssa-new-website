<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12 pt-20 lg:pt-0">
      <!-- Left Section - Hero Image -->
      <section
        class="relative hidden lg:flex h-48 items-end bg-gradient-to-br from-gray-900 to-blue-900 lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden"
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
            <div
              class="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl p-3 transition-all duration-300 group-hover:bg-white/20"
            >
              <img
                alt="NIMELSSA Logo"
                src="@/assets/images/logo.png"
                class="h-14 w-14 rounded-xl"
              />
              <span class="text-white font-bold text-lg hidden xl:block"
                >NIMELSSA</span
              >
            </div>
          </nuxt-link>

          <div class="mt-16 space-y-6">
            <h2 class="text-4xl font-bold text-white leading-tight xl:text-5xl">
              Reset Your
              <span class="text-blue-300">Password</span>
            </h2>

            <p class="text-lg leading-relaxed text-white/90 max-w-lg">
              Secure your account by creating a new password. Make sure it's
              strong and different from your previous passwords.
            </p>

            <div class="flex items-center space-x-2 text-blue-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">Secure Password Reset</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Right Section - Form -->
      <main
        class="flex items-center justify-center px-4 py-8 sm:px-6 lg:col-span-7 lg:px-12 lg:py-12 xl:col-span-6"
      >
        <div class="w-full max-w-md lg:max-w-lg">
          <!-- Mobile Logo -->
          <div class="flex justify-center lg:hidden -mt-20 mb-8">
            <nuxt-link to="/" class="inline-block">
              <div
                class="flex items-center justify-center h-20 w-20 bg-white rounded-2xl shadow-xl border-4 border-white"
              >
                <img
                  alt="NIMELSSA Logo"
                  src="@/assets/images/logo.png"
                  class="h-16 w-16"
                />
              </div>
            </nuxt-link>
          </div>

          <!-- Step Progress Indicator -->
          <div class="mb-8 flex items-center justify-center space-x-2">
            <div
              :class="[
                'flex items-center justify-center h-10 w-10 rounded-full font-semibold text-sm transition-all',
                currentStep === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-green-500 text-white',
              ]"
            >
              1
            </div>
            <div
              :class="[
                'h-1 w-12 transition-all',
                currentStep === 2 ? 'bg-blue-600' : 'bg-gray-300',
              ]"
            ></div>
            <div
              :class="[
                'flex items-center justify-center h-10 w-10 rounded-full font-semibold text-sm transition-all',
                currentStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600',
              ]"
            >
              2
            </div>
          </div>

          <!-- STEP 1: OTP Verification -->
          <div v-if="currentStep === 1" class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div class="mb-6">
              <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Verify Your Identity
              </h1>
              <p class="text-sm text-gray-600">
                Enter the verification code sent to your registered email
              </p>
            </div>

            <form @submit.prevent="handleOtpVerification" class="space-y-5">
              <!-- Matric Number Display -->
              <div class="hidden">
                <label for="matric" class="block text-sm font-semibold text-gray-700 mb-2">
                  Matric Number
                </label>
                <div class="relative">
                  <input
                    id="matric"
                    v-model="form.matric"
                    type="text"
                    name="matric"
                    readonly
                    disabled
                    class="w-full rounded-xl border-2 border-gray-300 py-3.5 pl-4 pr-12 bg-gray-50 text-sm text-gray-900 shadow-sm cursor-not-allowed opacity-75"
                  />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      class="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- OTP Section -->
              <div>
                <label for="otp" class="block text-sm font-semibold text-gray-700 mb-3">
                  Verification Code
                </label>
                <p class="text-xs text-gray-500 mb-3">
                  Enter the 4-digit code sent to your registered email
                </p>
                <div class="flex gap-3 justify-center">
                  <input
                    v-for="(digit, index) in otpDigits"
                    :key="index"
                    :ref="`otpInput${index}`"
                    v-model="otpDigits[index]"
                    @input="handleOtpInput(index, $event)"
                    @keydown="handleOtpKeydown(index, $event)"
                    @paste="handleOtpPaste"
                    type="text"
                    inputmode="numeric"
                    maxlength="1"
                    :disabled="processing"
                    class="h-16 w-16 rounded-2xl border-2 border-gray-200 text-center text-2xl font-bold text-gray-900 shadow-sm transition-all duration-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none disabled:cursor-not-allowed disabled:opacity-60 placeholder-gray-300"
                    placeholder="0"
                  />
                </div>
                <transition name="fade">
                  <p
                    v-if="otpError"
                    class="mt-3 text-xs text-red-600 flex items-center justify-center space-x-1"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>{{ otpError }}</span>
                  </p>
                </transition>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!isOtpFormValid || processing"
                class="w-full mt-7 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg group"
              >
                <span v-if="!processing" class="relative z-10">
                  Continue
                </span>
                <span v-else class="relative z-10 flex items-center justify-center space-x-2">
                  <svg
                    class="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </span>
                <div
                  class="absolute inset-0 -z-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>

              <!-- Back to Login Link -->
              <p class="text-center text-sm text-gray-600 pt-4">
                Remember your password?
                <nuxt-link
                  to="/auth/login"
                  class="font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                >
                  Sign in here
                </nuxt-link>
              </p>
            </form>
          </div>

          <!-- STEP 2: Password Reset -->
          <div v-if="currentStep === 2" class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div class="mb-6">
              <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Create New Password
              </h1>
              <p class="text-sm text-gray-600">
                Your new password must be different from previously used
                passwords
              </p>
            </div>

            <form @submit.prevent="handleReset" class="space-y-5">
              <!-- Matric Number Display -->
              <div class="hidden">
                <label for="matric-step2" class="block text-sm font-semibold text-gray-700 mb-2">
                  Matric Number
                </label>
                <div class="relative">
                  <input
                    id="matric-step2"
                    v-model="form.matric"
                    type="text"
                    name="matric"
                    readonly
                    disabled
                    class="w-full rounded-xl border-2 border-gray-300 py-3.5 pl-4 pr-12 bg-gray-50 text-sm text-gray-900 shadow-sm cursor-not-allowed opacity-75"
                  />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      class="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- New Password Input -->
              <div>
                <label
                  for="password"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  New Password
                </label>
                <div class="relative">
                  <input
                    id="password"
                    v-model="form.newPassword"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    :disabled="processing"
                    placeholder="Enter your new password"
                    class="w-full rounded-xl border-2 border-gray-200 py-3.5 pl-4 pr-12 bg-white text-sm text-gray-900 shadow-sm transition-all duration-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <img
                      :src="require(`@/assets/icons/${eye}`)"
                      alt="Toggle password visibility"
                      class="h-5 w-5"
                    />
                  </button>
                </div>
              </div>

              <!-- Confirm Password Input -->
              <div>
                <label
                  for="confirmPassword"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div class="relative">
                  <input
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    name="confirmPassword"
                    :disabled="processing"
                    placeholder="Re-enter your new password"
                    class="w-full rounded-xl border-2 border-gray-200 py-3.5 pl-4 pr-12 bg-white text-sm text-gray-900 shadow-sm transition-all duration-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <img
                      :src="require(`@/assets/icons/${eyeConfirm}`)"
                      alt="Toggle password visibility"
                      class="h-5 w-5"
                    />
                  </button>
                </div>
              </div>

              <!-- Password Mismatch Error -->
              <transition name="fade">
                <p
                  v-if="passwordError"
                  class="text-xs text-red-600 flex items-center space-x-1"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ passwordError }}</span>
                </p>
              </transition>

              <!-- Action Buttons -->
              <div class="flex gap-3 mt-7">
                <button
                  type="button"
                  @click="goBackToOtp"
                  :disabled="processing"
                  class="flex-1 py-3.5 px-6 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="submit"
                  :disabled="!isPasswordFormValid || processing"
                  class="flex-1 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg group"
                >
                  <span v-if="!processing" class="relative z-10">
                    Reset Password
                  </span>
                  <span v-else class="relative z-10 flex items-center justify-center space-x-2">
                    <svg
                      class="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Processing...</span>
                  </span>
                  <div
                    class="absolute inset-0 -z-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>

    <!-- Success Modal -->
    <SuccessModal
      :showCloseButton="false"
      :showActionButton="false"
      :resetPassword="true"
      title="Congratulations!!!"
      desc="Your password has been updated successfully. Proceed To Login"
      :show="showSuccessModal"
      @close="handleSuccessModalClose"
    />
  </main>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      processing: false,
      showSuccessModal: false,
      showPassword: false,
      showConfirmPassword: false,
      currentStep: 1,
      isTyping: false,
      otpError: '',
      passwordError: '',
      form: {
        matric: '',
        newPassword: '',
        confirmPassword: '',
        otp: '',
      },
      otpDigits: ['', '', '', ''],
    }
  },
  computed: {
    isOtpFormValid() {
      return !!this.form.matric && this.form.otp.length === 4
    },
    isPasswordFormValid() {
      return (
        !!this.form.newPassword &&
        !!this.form.confirmPassword &&
        this.form.newPassword === this.form.confirmPassword &&
        this.form.newPassword.length > 0
      )
    },
    eye() {
      return !this.showPassword ? 'eye-close.svg' : 'eye-open.svg'
    },
    eyeConfirm() {
      return !this.showConfirmPassword ? 'eye-close.svg' : 'eye-open.svg'
    },
  },
  methods: {
    handleOtpInput(index, event) {
      const value = event.target.value

      // Only allow digits
      if (!/^\d*$/.test(value)) {
        this.$set(this.otpDigits, index, '')
        return
      }

      // Update the digit
      this.$set(this.otpDigits, index, value)
      this.form.otp = this.otpDigits.join('')
      this.otpError = ''

      // Move to next input if value is entered
      if (value && index < 3) {
        this.$nextTick(() => {
          const nextInput = this.$refs[`otpInput${index + 1}`]
          if (nextInput && nextInput[0]) {
            nextInput[0].focus()
          }
        })
      }
    },
    handleOtpKeydown(index, event) {
      // Handle backspace
      if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
        this.$nextTick(() => {
          const prevInput = this.$refs[`otpInput${index - 1}`]
          if (prevInput && prevInput[0]) {
            prevInput[0].focus()
          }
        })
      }

      // Handle arrow keys
      if (event.key === 'ArrowLeft' && index > 0) {
        this.$nextTick(() => {
          const prevInput = this.$refs[`otpInput${index - 1}`]
          if (prevInput && prevInput[0]) {
            prevInput[0].focus()
          }
        })
      }
      if (event.key === 'ArrowRight' && index < 3) {
        this.$nextTick(() => {
          const nextInput = this.$refs[`otpInput${index + 1}`]
          if (nextInput && nextInput[0]) {
            nextInput[0].focus()
          }
        })
      }
    },
    handleOtpPaste(event) {
      event.preventDefault()
      const pastedData = (event.clipboardData || window.clipboardData)
        .getData('text')
        .trim()

      // Only process if it's 4 digits
      if (/^\d{4}$/.test(pastedData)) {
        for (let i = 0; i < 4; i++) {
          this.$set(this.otpDigits, i, pastedData[i])
        }
        this.form.otp = pastedData
        this.otpError = ''

        // Focus the last input
        this.$nextTick(() => {
          const lastInput = this.$refs['otpInput3']
          if (lastInput && lastInput[0]) {
            lastInput[0].focus()
          }
        })
      } else {
        this.otpError = 'Please paste a valid 4-digit code'
      }
    },
    handleOtpVerification() {
      // Just move to step 2 without API call
      this.currentStep = 2
      // Save OTP data to session storage for step 2
      sessionStorage.setItem('resetPasswordData', JSON.stringify({
        matric: this.form.matric,
        otp: this.form.otp,
      }))
    },
    handleReset() {
      this.passwordError = ''

      if (this.form.newPassword !== this.form.confirmPassword) {
        this.passwordError = 'Passwords do not match'
        return
      }

      this.processing = true
      const payload = {
        matric: this.form.matric,
        newPassword: this.form.newPassword,
        otp: this.form.otp,
      }

      // FINAL API CALL - when user submits the new password
      this.$axios
        .post(
          'https://nimelssa-elections-backend.onrender.com/api/auth/reset-password',
          payload
        )
        .then((res) => {
          this.showSuccessModal = true
          sessionStorage.removeItem('matric')
          sessionStorage.removeItem('resetPasswordData')
        })
        .catch((error) => {
          console.error(error.response)
          const errorMessage =
            error.response?.data?.message ||
            'Password reset failed. Please try again.'
          this.$toastr.e(errorMessage)
        })
        .finally(() => {
          this.processing = false
        })
    },
    handleSuccessModalClose() {
      this.showSuccessModal = false
      this.$router.push('/auth/login')
    },
    goBackToOtp() {
      this.currentStep = 1
      this.passwordError = ''
    },
    fetchMatricFromStorage() {
      const matricFromStorage = sessionStorage.getItem('matric')
      if (matricFromStorage) {
        this.form.matric = matricFromStorage
      }

      // Check if user was previously on step 2
      const resetPasswordData = sessionStorage.getItem('resetPasswordData')
      if (resetPasswordData) {
        try {
          const data = JSON.parse(resetPasswordData)
          this.form.matric = data.matric
          this.form.otp = data.otp
          // Populate OTP digits from stored OTP
          if (data.otp.length === 4) {
            for (let i = 0; i < 4; i++) {
              this.$set(this.otpDigits, i, data.otp[i])
            }
            this.currentStep = 2
          }
        } catch (e) {
          console.error('Error parsing reset password data', e)
        }
      }
    },
  },
  mounted() {
    this.fetchMatricFromStorage()
    // Auto-focus first OTP input on step 1
    this.$nextTick(() => {
      if (this.currentStep === 1) {
        const firstInput = this.$refs.otpInput0
        if (firstInput && firstInput[0]) {
          firstInput[0].focus()
        }
      }
    })
  },
}
</script>

<style scoped>
/* Hide number input arrows */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
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