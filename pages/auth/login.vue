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
            <h2 class="text-4xl font-bold text-white leading-tight xl:text-5xl">
              Welcome to <span class="text-blue-300">NIMELSSA</span> Elections
            </h2>

            <p class="text-lg leading-relaxed text-white/90 max-w-lg">
              The Nigerian Medical Laboratory Science Students Association is the official student body of the Department of Medical Laboratory Science, University of Lagos.
            </p>

            <div class="flex items-center space-x-2 text-blue-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">Secure & Verified Elections</span>
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

          <!-- Info Banner for Returning Students -->
          <!-- <div class="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-blue-900 mb-1">Returning Students Notice</h3>
                <p class="text-xs text-blue-700 mb-2">Please update your matric number and current level before logging in.</p>
                <button
                  @click="showUpdateModal = true"
                  class="text-xs font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                >
                  Update Matric Number →
                </button>
              </div>
            </div>
          </div> -->

          <!-- Login Form Card -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div class="mb-6">
              <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
              <p class="text-sm text-gray-600">Enter your credentials to access the election portal</p>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-5">
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
                    placeholder="Enter 9-digit matric number"
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

              <!-- Password Input -->
              <div>
                <div class="flex items-center justify-between mb-2">
                  <label for="password" class="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <nuxt-link 
                    to="/auth/forgot" 
                    class="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Forgot password?
                  </nuxt-link>
                </div>
                <div class="relative">
                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    :disabled="processing"
                    placeholder="Enter your password"
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

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="!isFormValid || processing"
                class="w-full mt-6 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg group"
              >
                <span v-if="!processing" class="relative z-10">Sign In</span>
                <span v-else class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </span>
                <div class="absolute inset-0 -z-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <!-- Sign Up Link -->
              <p class="text-center text-sm text-gray-600 pt-4">
                Don't have an account?
                <nuxt-link 
                  to="/auth/signup" 
                  class="font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                >
                  Sign up here
                </nuxt-link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>

    <!-- Matric Update Modal -->
    <transition name="modal">
      <div
        v-if="showUpdateModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="showUpdateModal = false"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-white">Update Matric Number</h2>
              <button
                @click="showUpdateModal = false"
                class="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <p class="text-blue-100 text-sm mt-2">Update your information for the new academic session</p>
          </div>

          <form @submit.prevent="handleMatricUpdate" class="p-6 space-y-5">
            <!-- Matric Number -->
            <div>
              <label for="matricNumber" class="block text-sm font-semibold text-gray-700 mb-2">
                Matric Number
              </label>
              <input
                id="matricNumber"
                v-model="updateForm.newMatric"
                type="number"
                :disabled="updatingMatric"
                placeholder="Enter your matric number"
                class="w-full rounded-xl border-2 border-gray-200 py-3 px-4 bg-white text-sm text-gray-900 shadow-sm transition-all focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none disabled:opacity-60"
              />
            </div>

            <!-- Academic Level -->
            <div>
              <label for="level" class="block text-sm font-semibold text-gray-700 mb-2">
                Current Academic Level
              </label>
              <select
                id="level"
                v-model="updateForm.level"
                :disabled="updatingMatric"
                class="w-full rounded-xl border-2 border-gray-200 py-3 px-4 bg-white text-sm text-gray-900 shadow-sm transition-all focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none disabled:opacity-60"
              >
                <option value="" disabled>Select your level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
              </select>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-3 pt-2">
              <button
                type="button"
                @click="showUpdateModal = false"
                :disabled="updatingMatric"
                class="flex-1 py-3 px-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="!isUpdateFormValid || updatingMatric"
                class="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!updatingMatric">Update</span>
                <span v-else class="flex items-center justify-center space-x-2">
                  <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Updating...</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>

    <!-- Success Modal -->
    <SuccessModal
      :showCloseButton="false"
      :showActionButton="true"
      title="Congratulations!!!"
      desc="Thanks For Signing up. Your Matric Number would undergo approval before voting commences."
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
      showUpdateModal: false,
      updatingMatric: false,
      form: {
        matric: "",
        password: "",
      },
      updateForm: {
        // oldMatric: "",
        newMatric: "",
        level: "",
      },
      isTyping: false,
    };
  },
  computed: {
    isFormValid() {
      return !!this.form.matric && !!this.form.password && this.isMatricValid;
    },
    isUpdateFormValid() {
      return (
        // this.updateForm.oldMatric.length === 9 &&
        this.updateForm.newMatric.length === 9 &&
        this.updateForm.level !== ""
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
    handleLogin() {
      this.processing = true;
      this.$axios
        .post(
          "https://nimelssa-elections-backend.onrender.com/api/auth/login",
          this.form
        )
        .then((res) => {
          console.log(res?.data, "data");
          this.$toastr.s("Login was successful");
          localStorage.setItem("accessToken", JSON.stringify(res.data.token));
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push("/election/voting-categories");
        })
        .catch((error) => {
          console.error(error.response);
          const errorMessage =
            error.response?.data?.message || "Login failed. Please try again.";
          this.$toastr.e(errorMessage);
        })
        .finally(() => {
          this.processing = false;
        });
    },
    handleMatricUpdate() {
      this.updatingMatric = true;
      this.$axios
        .post(
          "https://nimelssa-elections-backend.onrender.com/api/auth/update-academic-level",
          {
            // matric: this.updateForm.oldMatric,
            matricNumbers: [this.updateForm.newMatric],
            level: this.updateForm.level,
          }
        )
        .then((res) => {
          this.$toastr.s("Matric number updated successfully!");
          this.showUpdateModal = false;
          // Reset form
          this.updateForm = {
            // oldMatric: "",
            newMatric: "",
            level: "",
          };
        })
        .catch((error) => {
          console.error(error.response);
          const errorMessage =
            error.response?.data?.message ||
            "Update failed. Please try again.";
          this.$toastr.e(errorMessage);
        })
        .finally(() => {
          this.updatingMatric = false;
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

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: all 0.3s ease;
}

.modal-enter .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}
</style>