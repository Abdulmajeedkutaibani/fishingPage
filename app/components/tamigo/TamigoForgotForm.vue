<template>
  <div
    key="forgot"
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] pl-[100px]"
  >
    <h1
      class="md:text-[45px] text-[24px] mt-[120px] mb-[100px] font-light leading-[53px]"
    >
      Forgot your password?
    </h1>

    <form class="space-y-3 w-full h-full" @submit.prevent="onReset">
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

      <div>
        <label class="flex items-center gap-5 cursor-pointer select-none mb-3">
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

        <label class="flex items-center gap-5 cursor-pointer select-none mb-3">
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
</template>

<script setup lang="ts">
import EmailAt from '~/assets/Tamigo_Login-At.svg';

const props = defineProps<{ defaultLink: string }>();

const emailInput = ref<HTMLInputElement | null>(null);
const reset = reactive({
  email: '',
  delivery: 'email' as 'email' | 'sms',
});

const onReset = () => {
  navigateTo(props.defaultLink, { external: true });
};

onMounted(() => {
  emailInput.value?.focus();
});
</script>
