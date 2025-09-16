<template>
  <div class="flex flex-col gap-4">
    <div>
      <BookingTitle>Enter your password</BookingTitle>
      <p class="text-sm text-gray-700">
        Enter your Booking.com password for
        <span class="font-bold">{{ username }}</span
        >.
      </p>
    </div>

    <form @submit.prevent="emit('submit')">
      <div class="mb-4">
        <label
          for="password"
          class="block text-sm font-medium text-gray-900 mb-1"
        >
          Password
        </label>
        <div class="relative h-[36px]">
          <BookingInput
            id="password"
            :model-value="password"
            @update:modelValue="(val) => emit('update:password', val)"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter your password"
            :autofocus="true"
            inputClass="pr-14 w-full h-full"
            required
          />
          <div
            class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center"
          >
            <button
              type="button"
              @click="showPassword = !showPassword"
              :aria-pressed="showPassword"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
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

      <BookingButton type="submit" :block="true">Sign in</BookingButton>
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
</template>

<script setup lang="ts">
import BookingTitle from '~/components/booking/BookingTitle.vue';
import BookingInput from '~/components/booking/BookingInput.vue';
import BookingButton from '~/components/booking/BookingButton.vue';

const props = defineProps<{
  username: string;
  password: string;
  defaultLink: string;
}>();
const emit = defineEmits<{
  (e: 'update:password', value: string): void;
  (e: 'submit'): void;
}>();

const showPassword = ref(false);

const handleDefaultLink = () => {
  navigateTo(props.defaultLink, { external: true });
};
</script>
