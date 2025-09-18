<template>
  <div class="min-h-screen relative overflow-hidden font-openSans login-page openSans">
    <!-- Gradient Background -->
    

    <!-- Login Card -->
    <div class="relative flex items-center justify-center min-h-screen px-4 ">
      <div class="bg-white rounded-lg flex flex-col justify-between shadow-2xl px-12 py-10 min-h-[660px] max-h-[95vh] w-full md:w-[490px]">
        <!-- Logo and Title -->
        <div >
          <div class="flex items-center mb-[18px] border-b border-gray-300 pb-5">
            <img src="/assets/SEP_logo.svg" alt="Shiji" />
          </div>
          
          

          

          <!-- Selected Tenant -->
          <div class="mb-3">
            <h2 class="text-base font-semibold font-openSans text-gray-800 mb-6 pt-1.5">
            Log in Using External Identity Provider
          </h2>
            <p class=" text-[11px] font-[400]  mb-0.5 mt-2">Selected Tenant</p>
            <div class="flex items-end gap-2 ">
              <span class=" text-[16px] font-[600] text-gray-900 "
                >FLETCHERHOTELS</span
              >
              <a
                class="text-blue-800 hover:text-blue-600 text-[11px]  transition-colors cursor-pointer pb-0.5"
               :href="defaultLink"
              >
                Clear selection
              </a>
            </div>
          </div>

          <!-- Log In Button -->
          <button
            @click="handleLogin"
            class="h-8 w-[52px] text-[13px] bg-blue-800 hover:bg-blue-300 text-white font-[400] rounded-md transition-colors duration-300 mb-3 mt-1 cursor-pointer pt-0.5"
          >
            Log In
          </button>

          <!-- Local Account Link -->
          <div>
            <a
              class="text-[13px] text-blue-800 hover:text-blue-600  transition-colors "
              :href="defaultLink"
            >
              Log in using local account
            </a>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="border-t border-gray-200 pt-4 mt-8">
          <div
            class="flex items-center   gap-2 text-[13px] text-blue-800 hover:text-blue-600"
          >
            <a :href="defaultLink" class="transition-colors"> Privacy policy </a>
            <span class="text-blue-800 text-[15px] font-extrabold -mt-0.5">•</span>
            <a :href="defaultLink" class="transition-colors"> Legal notice </a>
            <span class="text-blue-800 text-[15px] font-extrabold -mt-0.5">•</span>
            <a :href="defaultLink" class="transition-colors"> Contact support </a>
          </div>

          <p class="text-[11px]  mt-4">
            © 2025 Shiji Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


useHead({
  title: 'Login - Fletcher Hotels',
  meta: [
    { name: 'description', content: 'Login to your Fletcher Hotels account' }
  ]
})

const defaultLink = ref('https://eu1.identity.ep.shiji.world/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DSEP-Frontend%26scope%3Dopenid%2520API%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Feu1.web.ep.shiji.world%252Flogin%26state%3D15179099%26nonce%3DN1229616415%26code_challenge_method%3DS256%26code_challenge%3DV1NYDXKVx05lCThpkl3q1cnoVChQJvnUbiw2DU4bWJY');


const loginMethod = ref('external');
const isLoggingIn = ref(false);



const handleLogin = () => {
    navigateTo('/shiji/signIn');    
  isLoggingIn.value = true;
  loginMethod.value = 'external';
  console.log('Logging in with external identity provider');
};


</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
