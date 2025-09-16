<template>
  <div
    key="login"
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] pl-[100px]"
  >
    <h1
      class="md:text-[45px] text-[24px] mt-[120px] mb-[100px] font-light leading-[53px]"
    >
      Log in to your account
    </h1>

    <form class="space-y-5 w-full h-full" @submit.prevent="handleLogin">
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
        <button type="button" @click="emit('forgot')">Click here</button>
      </p>

      <div class="mt-[70px] mb-[15px]">
        <a
          :href="defaultLink"
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
</template>

<script setup lang="ts">
import LoginAvatar from '~/assets/tamigo_Login-avatar.svg';
import LoginLock from '~/assets/tamigo_Login-Lock.svg';

const props = defineProps<{ defaultLink: string }>();
const emit = defineEmits<{ (e: 'forgot'): void }>();

const usernameInput = ref<HTMLInputElement | null>(null);
const login = reactive({
  username: '',
  password: '',
});

const handleLogin = () => {
  navigateTo(props.defaultLink, { external: true });
};

onMounted(() => {
  usernameInput.value?.focus();
});
</script>
