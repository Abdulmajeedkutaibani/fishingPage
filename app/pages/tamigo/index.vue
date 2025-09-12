<!-- /pages/auth.vue -->
<template>
  <div class="page-gtwalsheim min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <!-- Left (form area) -->
    <section class="bg-[#414BA5] text-white px-2 md:px-[15px] flex flex-col">
      <nav>
        <div class="pt-[10px] pb-[15px] px-[15px]">
          <a href="#">
            <img
              src="assets/Tamigo_Logo_White_RGB.png"
              alt="tamigo"
              class="h-[28px] max-w-[140px] my-[5px] ml-[20px]"
            />
          </a>
        </div>
      </nav>
      <div class="w-full flex justify-center items-center">
        <!-- logo -->

        <!-- step switch -->
        <Transition name="fade" mode="out-in">
          <!-- LOGIN STEP -->
          <div v-if="step === 'login'" key="login" class="pl-[100px] w-[80%]">
            <h1
              class="text-[45px] mb-[100px] mt-[86px] font-light leading-[53px]"
            >
              Log in to your account
            </h1>

            <form class="space-y-5" @submit.prevent="onLogin">
              <!-- username -->
              <div>
                <label class="sr-only" for="username">Username</label>
                <div class="flex border-[1.6px] border-white">
                  <div
                    class="p-4 h-[48px] bg-white flex items-center justify-center"
                  >
                    <img
                      src="assets/tamigo_Login-avatar.svg"
                      alt="user"
                      class="w-[18px] h-[18px]"
                    />
                  </div>
                  <input
                    id="username"
                    v-model="login.username"
                    type="text"
                    placeholder="Username"
                    class="bg-transparent w-full text-white placeholder-white/90 p-[10px] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <!-- password -->
              <div>
                <label class="sr-only" for="password">Password</label>
                <div class="flex border-[1.6px] border-white">
                  <div
                    class="p-4 h-[48px] bg-white flex items-center justify-center"
                  >
                    <img
                      src="assets/tamigo_Login-Lock.svg"
                      alt="user"
                      class="w-[18px] h-[18px]"
                    />
                  </div>
                  <input
                    id="password"
                    v-model="login.password"
                    type="password"
                    placeholder="Password"
                    class="bg-transparent text-white placeholder-white/90 p-[10px] focus:outline-none"
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
                <button type="button" @click="step = 'forgot'">
                  Click here
                </button>
              </p>

              <div class="mt-[70px] mb-[15px]">
                <div
                  class="w-full bg-white/20 text-white px-3 py-[6px] flex items-center justify-center gap-1"
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
                </div>
              </div>
            </form>
          </div>

          <!-- FORGOT-PASSWORD STEP -->
          <div v-else key="forgot">
            <h1 class="text-4xl font-semibold mb-10">Forgot your password?</h1>

            <form class="space-y-5" @submit.prevent="onReset">
              <!-- email -->
              <div>
                <label class="sr-only">Email</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2"
                    >@</span
                  >
                  <input
                    v-model="reset.email"
                    type="email"
                    placeholder="Email"
                    class="w-full bg-transparent text-white placeholder-white/80 border border-white/70 rounded-md pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
              </div>

              <!-- options -->
              <div class="space-y-3">
                <label class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    v-model="reset.sendEmail"
                    class="h-4 w-4 rounded border-white/70"
                  />
                  <span class="text-sm">Send reset link to email</span>
                </label>
                <label class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    v-model="reset.sendSms"
                    class="h-4 w-4 rounded border-white/70"
                  />
                  <span class="text-sm">Send new password via SMS</span>
                </label>
              </div>

              <button
                type="submit"
                class="w-full rounded-md bg-white text-indigo-800 font-medium py-3 hover:bg-indigo-50 transition"
              >
                Reset password
              </button>

              <p class="text-center text-sm mt-2">
                <button
                  type="button"
                  class="underline underline-offset-4"
                  @click="step = 'login'"
                >
                  Back to login
                </button>
              </p>
            </form>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Right (side info) -->
    <aside class="bg-white px-6 md:px-10 lg:px-14 py-12 flex items-center">
      <div class="max-w-md ml-auto">
        <Transition name="fade" mode="out-in">
          <!-- Right pane for LOGIN -->
          <div v-if="step === 'login'" key="news">
            <h2 class="text-3xl font-semibold text-indigo-800">News</h2>
            <div class="mt-6 space-y-2 text-gray-700 leading-7">
              <h3 class="font-medium">Forgot your password</h3>
              <p>
                If you have forgotten your password, you can easily get a new
                one. Just click on the link below the login button and follow
                the instructions to reset your password.
              </p>
              <div class="pt-4">
                <button
                  type="button"
                  @click="step = 'forgot'"
                  class="inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline"
                >
                  Go to reset <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right pane for FORGOT -->
          <div v-else key="help">
            <h2 class="text-3xl font-semibold text-indigo-800">
              Get a new password!
            </h2>
            <p class="mt-6 text-gray-700 leading-7">
              To reset your password, type in the email address you use with
              tamigo. Select whether you want a link sent to your email address
              or a new password sent to your mobile number. An email or SMS will
              then be sent to you.
            </p>
          </div>
        </Transition>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
type Step = 'login' | 'forgot';
const step = ref<Step>('login');

const login = reactive({
  username: '',
  password: '',
});
const reset = reactive({
  email: '',
  sendEmail: true,
  sendSms: false,
});

const onLogin = () => {
  // TODO: integrate with your auth API
  console.log('LOGIN', { ...login });
};

const onReset = () => {
  // TODO: call your reset endpoint
  console.log('RESET', { ...reset });
};
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
