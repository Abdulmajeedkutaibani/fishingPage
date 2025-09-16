<template>
  <div class="min-h-screen relative flex flex-col overflow-hidden signIn-page">
    <!-- Main content -->
    <div
      class="flex-1 flex flex-col items-center justify-center relative z-10 p-8"
    >
      <!-- Sign in card -->
      <div
        class="bg-white shadow-lg w-full max-w-[440px] min-w-[320px] min-h-[338px] -mt-6 mb-5 p-11"
      >
        <!-- Logo -->
        <div>
          <img
            src="https://aadcdn.msftauthimages.net/c1c6b6c8-jpovwvvayzv0hnajnl6tvxjm2bjh-zzxu7hor0l0aim/logintenantbranding/0/bannerlogo?ts=637982257895387061"
            alt="Fletcher Hotels"
            class="w-[156px] h-[22px]"
          />
        </div>
        <Transition :name="transitionName" mode="out-in">
          <!-- Email step -->
          <div v-if="!isPasswordStep" key="email-step" class="w-full">
            <h1 class="text-2xl font-semibold text-gray-900 mb-3 mt-4 h-7">
              Sign in
            </h1>
            <form @submit.prevent="handleNext">
              <div class="mb-4">
                <input
                  v-model="email"
                  type="email"
                  placeholder="someone@example.com"
                  class="w-full text-[15px] py-1.5 pr-2.5 border-0 border-b text-gray-700 placeholder-gray-500 focus:border-[#0067b8] focus:outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div class="mb-9 min-h-16">
                <a
                  :href="defaultLink"
                  class="text-[#0067b8] text-[13px] hover:underline hover:text-gray-400"
                >
                  Can't access your account?
                </a>
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="px-9 py-1 bg-[#0067b8] text-white hover:bg-[#005a9e] transition-colors font-normal"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <!-- Password step -->
          <div v-else key="password-step" class="w-full">
            <div class="">
              <button
                @click="handleBack"
                class="flex items-center text-gray-600 hover:text-gray-800 -mb-1 mt-4"
              >
                <img
                  src="/assets/arrow_left.svg"
                  alt="Back"
                  class="w-6 h-6 mt-0.5"
                />
                <span class="text-sm">{{ email }}</span>
              </button>
            </div>
            <h1 class="text-2xl font-semibold text-gray-900 mt-4 mb-3">
              Enter password
            </h1>
            <form @submit.prevent="handleSignIn">
              <div class="mb-4">
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  class="w-full text-[15px] border-0 border-b border-gray-500 text-gray-700 placeholder-gray-500 focus:border-[#0067b8] focus:outline-none transition-colors bg-transparent py-1.5 pr-2.5"
                  required
                  autofocus
                />
              </div>
              <div class="mb-8">
                <a
                  :href="defaultLink"
                  class="text-[#0067b8] text-[13px] hover:underline"
                >
                  Forgot my password
                </a>
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class="w-[108px] h-[32px] text-[15px] bg-[#0067b8] text-white hover:bg-[#005a9e] active:bg-[#005a9e] transition-colors font-normal"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </Transition>
      </div>

      <!-- Sign-in options -->
      <Transition :name="transitionName">
        <div v-if="!isPasswordStep" class="w-full max-w-[440px]">
          <button
            class="w-full px-11 py-2 bg-white shadow-xl flex items-center space-x-3 opacity-50 cursor-not-allowed"
            disabled
          >
            <img
              src="/assets/key.svg"
              alt="Sign-in options"
              class="w-8 h-8 text-gray-600"
            />
            <span class="text-gray-700 text-sm">Sign-in options</span>
          </button>
        </div>
      </Transition>
    </div>

    <!-- Footer -->
    <footer
      class="absolute bottom-0 right-0 flex items-center space-x-6 pt-3 pr-6 z-10"
    >
      <a :href="defaultLink" class="text-xs text-gray-700 hover:underline"
        >Terms of use</a
      >
      <a :href="defaultLink" class="text-xs text-gray-700 hover:underline"
        >Privacy & cookies</a
      >
      <a :href="defaultLink">
        <svg
          class="w-5 h-5 mt-1 text-gray-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultLink = ref(
  'https://eu1.identity.ep.shiji.world/account/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DSEP-Frontend%26scope%3Dopenid%2520API%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Feu1.web.ep.shiji.world%252Flogin%26state%3D15179099%26nonce%3DN1229616415%26code_challenge_method%3DS256%26code_challenge%3DV1NYDXKVx05lCThpkl3q1cnoVChQJvnUbiw2DU4bWJY'
);

const email = ref('swijnreder@fletcher.nl');
const password = ref('');
const isPasswordStep = ref(false);
const transitionName = ref('slide-left');

const handleNext = () => {
  transitionName.value = 'slide-left';
  isPasswordStep.value = true;
};

const handleBack = () => {
  transitionName.value = 'slide-right';
  isPasswordStep.value = false;
};

const handleSignIn = () => {
  navigateTo(defaultLink.value, { external: true });
};

useHead({
  title: 'Sign in - Fletcher Hotels',
  meta: [
    { name: 'description', content: 'Sign in to your Fletcher Hotels account' },
  ],
});
</script>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(circle, var(--tw-gradient-stops));
}

input[type='email']:focus {
  outline: none;
  box-shadow: none;
}

* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

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

@media (max-width: 640px) {
  footer {
    position: relative;
    justify-content: center;
    padding: 0.75rem;
  }
}
</style>
