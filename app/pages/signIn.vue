<template>
  <div class="min-h-screen relative flex flex-col overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-200 via-white to-blue-200">
      <div class="absolute inset-0 bg-gradient-radial from-orange-300  to-cyan-300" style="background-position: 30% 50%;"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-300  to-green-300" style="background-position: 70% 50%;"></div>
    </div>
    
    <!-- Main content -->
    <div class="flex-1 flex flex-col items-center justify-center relative z-10 p-8">
      <!-- Sign in card -->
      <div class="bg-white  shadow-xl w-full max-w-md p-11">
        <!-- Logo -->
        <div class="mb-8">
          
           <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-jpovwvvayzv0hnajnl6tvxjm2bjh-zzxu7hor0l0aim/logintenantbranding/0/bannerlogo?ts=637982257895387061" alt="Fletcher Hotels" class=" w-[156px] h-[22px] ">
          
        </div>
        <!-- Sliding forms -->
        <Transition :name="transitionName" mode="out-in">
          <!-- Email step -->
          <div v-if="!isPasswordStep" key="email-step" class="w-full">
            <h1 class="text-2xl font-semibold text-gray-900 mb-6">Sign in</h1>
            <form @submit.prevent="handleNext">
              <div class="mb-4">
                <input
                  v-model="email"
                  type="email"
                  placeholder="someone@example.com"
                  class="w-full pb-2 border-0 border-b border-gray-500 text-gray-700 placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div class="mb-8">
                <a 
                  href="#" 
                  @click.prevent="handleForgotAccount"
                  class="text-blue-600 text-sm hover:underline"
                >
                  Can't access your account?
                </a>
              </div>
              <div class="flex justify-end">
                <button 
                  type="submit" 
                  class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 active:bg-blue-800 transition-colors font-normal"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <!-- Password step -->
          <div v-else key="password-step" class="w-full">
            <div class="mb-6">
              <button 
                @click="handleBack"
                class="flex items-center text-gray-600 hover:text-gray-800 mb-4 -ml-2 p-1"
              >
                <svg class="w-6 h-6 hover:bg-gray-200 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span class="ml-2 text-sm">{{ email }}</span>
              </button>
            </div>
            <h1 class="text-2xl font-semibold text-gray-900 mb-6">Enter password</h1>
            <form @submit.prevent="handlePasswordSignIn">
              <div class="mb-4">
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  class="w-full pb-2 border-0 border-b border-gray-500 text-gray-700 placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors bg-transparent"
                  required
                  autofocus
                />
              </div>
              <div class="mb-8">
                <a 
                  href="#" 
                  @click.prevent="handleForgotPassword"
                  class="text-blue-600 text-sm hover:underline"
                >
                  Forgot my password
                </a>
              </div>
              <div class="flex justify-end">
                <button 
                  type="submit" 
                  class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 active:bg-blue-800 transition-colors font-normal"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>

      <!-- Sign-in options -->
      <div v-if="!isPasswordStep" class="mt-4 w-full max-w-md">
        <button 
          @click="toggleOptions"
          class="w-full p-3 bg-white border border-gray-200 rounded-sm flex items-center space-x-3 hover:bg-gray-50 transition-colors"
        >
          <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          <span class="text-gray-700 text-sm">Sign-in options</span>
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer class="absolute bottom-0 right-0 flex items-center space-x-6 p-3 pr-6 z-10">
      <a href="#" class="text-xs text-gray-700 hover:underline">Terms of use</a>
      <a href="#" class="text-xs text-gray-700 hover:underline">Privacy & cookies</a>
      <button 
        @click="toggleMore"
        class="p-1 hover:bg-gray-200 rounded transition-colors"
      >
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2"/>
          <circle cx="12" cy="12" r="2"/>
          <circle cx="19" cy="12" r="2"/>
        </svg>
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const email = ref('swijnreder@fletcher.nl')
const password = ref('')
const isPasswordStep = ref(true)
const transitionName = ref('slide-left')

// Methods
const handleNext = () => {
  transitionName.value = 'slide-left'
  isPasswordStep.value = true
  console.log('Proceeding with email:', email.value)
}

const handleBack = () => {
  transitionName.value = 'slide-right'
  isPasswordStep.value = false
}

const handlePasswordSignIn = () => {
  console.log('Signing in with:', email.value, 'password:', password.value)
  // Add your sign-in logic here
  // Example: await $fetch('/api/auth/signin', { method: 'POST', body: { email: email.value, password: password.value } })
}

const handleForgotAccount = () => {
  console.log('Forgot account clicked')
  // Navigate to forgot password page
  // navigateTo('/forgot-password')
}

const handleForgotPassword = () => {
  console.log('Forgot password clicked')
  // Navigate to forgot password page
  // navigateTo('/forgot-password')
}

const toggleOptions = () => {
  console.log('Sign-in options clicked')
  // Show additional sign-in options modal or dropdown
}

const toggleMore = () => {
  console.log('More options clicked')
  // Show more footer options
}

// Page meta
useHead({
  title: 'Sign in - Fletcher Hotels',
  meta: [
    { name: 'description', content: 'Sign in to your Fletcher Hotels account' }
  ]
})
</script>

<style scoped>
/* Custom gradient styles that Tailwind doesn't provide out of the box */
.bg-gradient-radial {
  background-image: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Ensure input doesn't show default browser styles */
input[type="email"]:focus {
  outline: none;
  box-shadow: none;
}

/* Optional: Add smooth transitions for interactive elements */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Slide transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
              opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  footer {
    position: relative;
    justify-content: center;
    padding: 0.75rem;
  }
}
</style>