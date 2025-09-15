<!-- /pages/auth.vue -->
<template>
  <div class="page-gtwalsheim min-h-screen grid grid-cols-1 lg:grid-cols-12">
    <!-- Left (form area) -->
    <section
      class="bg-[#414BA5] text-white px-2 md:px-[15px] flex flex-col col-span-12 md:col-span-7 h-screen relative"
    >
      <nav>
        <div class="pt-[10px] pb-[15px] px-[15px]">
          <a :href="defaultTamigoLink">
            <img
              :src="TamigoLogoWhite"
              alt="tamigo"
              class="h-[28px] max-w-[140px] my-[5px] ml-[20px]"
            />
          </a>
        </div>
      </nav>

      <!-- logo -->

      <!-- step switch -->
      <Transition name="fade" mode="out-in">
        <!-- LOGIN STEP -->
        <div
          v-if="step === 'login'"
          key="login"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] pl-[100px]"
        >
          <h1
            class="md:text-[45px] text-[24px] mt-[120px] mb-[100px] font-light leading-[53px]"
          >
            Log in to your account
          </h1>

          <form class="space-y-5 w-full h-full" @submit.prevent="handleLogin">
            <!-- username -->
            <div>
              <label class="sr-only" for="username">Username</label>
              <div class="flex">
                <div
                  class="p-4 h-full max-w-[48px] bg-white flex items-center justify-center"
                >
                  <img
                    :src="LoginAvatar"
                    alt=""
                    aria-hidden="true"
                    class="w-[18px] h-[18px]"
                  />
                </div>
                <input
                  id="username"
                  v-model="login.username"
                  type="text"
                  placeholder="Username"
                  autocomplete="username"
                  ref="usernameInput"
                  class="bg-transparent w-full text-white placeholder-white/90 p-[10px] pl-5 text-[17px] focus:outline-none border-y-2 border-r-2 border-white"
                  required
                />
              </div>
            </div>

            <!-- password -->
            <div>
              <label class="sr-only" for="password">Password</label>
              <div class="flex">
                <div
                  class="p-4 h-full max-w-[48px] bg-white flex items-center justify-center"
                >
                  <img
                    :src="LoginLock"
                    alt=""
                    aria-hidden="true"
                    class="w-[18px] h-[18px]"
                  />
                </div>
                <input
                  id="password"
                  v-model="login.password"
                  type="password"
                  placeholder="Password"
                  autocomplete="current-password"
                  class="bg-transparent text-white placeholder-white/90 p-[10px] pl-5 text-[17px] focus:outline-none border-y-2 border-r-2 border-white w-full"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full border-2 mb-[15px] border-white text-white font-bold text-[17px] p-[10px] hover:bg-white/5 transition"
            >
              Login
            </button>

            <p class="text-center text-sm cursor-pointer mb-[30px]">
              Did you forget your password?
              <button type="button" @click="step = 'forgot'">Click here</button>
            </p>

            <div class="mt-[70px] mb-[15px]">
              <a
                :href="defaultTamigoLink"
                class="w-full h-[40.28px] bg-white/20 text-white px-3 flex items-center justify-center gap-1"
              >
                <svg
                  class="shrink-0"
                  width="28"
                  height="18"
                  viewBox="0 0 23 16"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" width="23" height="9" fill="#005BBB" />
                  <rect x="0" y="9" width="23" height="9" fill="#FFD500" />
                </svg>
                <span class="text-[17px] font-[400] leading-6">
                  tamigo supports Ukraine
                </span>
              </a>
            </div>
          </form>
        </div>

        <!-- FORGOT-PASSWORD STEP -->
        <div
          v-else
          key="forgot"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] pl-[100px]"
        >
          <h1
            class="md:text-[45px] text-[24px] mt-[120px] mb-[100px] font-light leading-[53px]"
          >
            Forgot your password?
          </h1>

          <form class="space-y-3 w-full h-full" @submit.prevent="onReset">
            <!-- email -->
            <div>
              <label class="sr-only" for="email">Email</label>
              <div class="flex">
                <div
                  class="p-4 h-full max-w-[48px] bg-white flex items-center justify-center"
                >
                  <img
                    :src="EmailAt"
                    alt=""
                    aria-hidden="true"
                    class="w-[18px] h-[18px] scale-[1.15]"
                  />
                </div>
                <input
                  id="email"
                  v-model="reset.email"
                  type="email"
                  placeholder="Email"
                  autocomplete="email"
                  ref="emailInput"
                  class="bg-transparent w-full text-white placeholder-white/90 p-[10px] pl-5 text-[17px] focus:outline-none border-y-2 border-r-2 border-white"
                  required
                />
              </div>
            </div>

            <!-- options -->
            <div>
              <label
                class="flex items-center gap-5 cursor-pointer select-none mb-3"
              >
                <input
                  type="radio"
                  name="delivery"
                  value="email"
                  v-model="reset.delivery"
                  class="sr-only"
                />
                <span
                  class="inline-flex h-[20px] w-[20px] items-center justify-center border-2 border-white rounded-none"
                >
                  <svg
                    v-if="reset.delivery === 'email'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" />
                  </svg>
                </span>
                <span class="text-white text-[18px] leading-7">
                  Send reset link to email
                </span>
              </label>

              <label
                class="flex items-center gap-5 cursor-pointer select-none mb-3"
              >
                <input
                  type="radio"
                  name="delivery"
                  value="sms"
                  v-model="reset.delivery"
                  class="sr-only"
                />
                <span
                  class="inline-flex h-[20px] w-[20px] items-center justify-center border-2 border-white rounded-none"
                >
                  <svg
                    v-if="reset.delivery === 'sms'"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" />
                  </svg>
                </span>
                <span class="text-white text-[18px] leading-7">
                  Send new password via SMS
                </span>
              </label>
            </div>

            <button
              type="submit"
              class="w-full border-2 border-white text-white font-light text-[17px] p-[10px] hover:bg-white/5 transition"
            >
              Reset password
            </button>
          </form>
        </div>
      </Transition>
    </section>

    <!-- Right (side info) -->
    <aside
      class="bg-white flex items-center col-span-12 md:col-span-5 relative h-screen"
    >
      <div>
        <div
          class="absolute top-[30px] right-[30px] w-[48px] h-[32px] mb-[10px] hover:cursor-pointer hover:bg-gray-200 rounded-sm flex items-center justify-center"
        >
          <a :href="defaultTamigoLink" class="py-[6px] px-[12px]">
            <img :src="EnUsGif" alt="English (US)" class="w-full h-full" />
          </a>
        </div>
        <Transition name="fade" mode="out-in">
          <!-- Right pane for LOGIN -->
          <div
            v-if="step === 'login'"
            key="news"
            class="pl-[10px] pr-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center"
          >
            <div class="w-2/3 pl-[15px]">
              <h2 class="text-4xl mb-[100px] font-light text-indigo-800">
                News
              </h2>
            </div>
            <div class="flex justify-between">
              <div class="pr-[15px]">
                <a
                  class="flex items-center justify-center w-[50px] h-[50px]"
                  :href="defaultTamigoLink"
                >
                  <img :src="ButtonLeft" alt="Left" class="w-full h-full" />
                </a>
              </div>
              <div class="text-lg text-[#646464] leading-7 px-[15px] w-2/3">
                <h3 class="font-medium my-[10px]">Forgot your password</h3>
                <p class="mb-[10px]">
                  If you have forgotten your password, you can easily get a new
                  one. Just click on the link below the login button and follow
                  the instructions to reset your password.
                </p>
              </div>
              <div class="px-[15px]">
                <a
                  class="flex items-center justify-center w-[50px] h-[50px]"
                  :href="defaultTamigoLink"
                >
                  <img :src="ButtonRight" alt="Right" class="w-full h-full" />
                </a>
              </div>
            </div>
          </div>

          <!-- Right pane for FORGOT -->
          <div
            v-else
            key="help"
            class="pl-[10px] pr-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center"
          >
            <div class="w-2/3 px-[15px]">
              <h2 class="text-4xl mb-[100px] font-light text-indigo-800">
                Get a new password!
              </h2>
            </div>
            <div class="flex items-center justify-center">
              <div class="text-lg text-[#646464] leading-7 px-[15px] w-2/3">
                <p class="mb-[10px]">
                  To reset your password, type in the email address you use with
                  tamigo. Select whether you want a link sent to your email
                  address or a new password sent to your mobile number. An email
                  or SMS will then be sent to you.
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import TamigoLogoWhite from '~/assets/Tamigo_Logo_White_RGB.png';
import LoginAvatar from '~/assets/tamigo_Login-avatar.svg';
import LoginLock from '~/assets/tamigo_Login-Lock.svg';
import EmailAt from '~/assets/Tamigo_Login-At.svg';
import ButtonLeft from '~/assets/tamigo_Button-Left.svg';
import ButtonRight from '~/assets/tamigo_Button-Right.svg';
import EnUsGif from '~/assets/en-US.gif';
type Step = 'login' | 'forgot';
const step = ref<Step>('login');

const usernameInput = ref<HTMLInputElement | null>(null);
const emailInput = ref<HTMLInputElement | null>(null);

const defaultTamigoLink = ref(
  'https://signin.tamigo.com/login?signin=326299fe1e191073135f915ca78da0e9'
);

const login = reactive({
  username: '',
  password: '',
});
const reset = reactive({
  email: '',
  delivery: 'email' as 'email' | 'sms',
});

const handleLogin = () => {
  navigateTo(defaultTamigoLink.value, { external: true });
};

const onReset = () => {
  navigateTo(defaultTamigoLink.value, { external: true });
};

watch(step, async (newStep) => {
  await nextTick();
  if (newStep === 'login') {
    usernameInput.value?.focus();
  } else {
    emailInput.value?.focus();
  }
});

onMounted(() => {
  if (step.value === 'login') {
    usernameInput.value?.focus();
  } else {
    emailInput.value?.focus();
  }
});
</script>

<style scoped>
@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Light.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Regular.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Bold.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.page-gtwalsheim {
  font-family: 'GT Walsheim', 'Helvetica Neue', Arial, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
button {
  cursor: pointer;
}
</style>
