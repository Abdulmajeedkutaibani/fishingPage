<template>
  <div class="flex flex-col justify-center gap-y-4">
    <BookingTitle>Sign in to manage your property</BookingTitle>

    <form @submit.prevent="emit('next')">
      <div class="mb-4">
        <label
          for="username"
          class="block text-sm font-medium text-gray-900 pb-1"
        >
          Username
        </label>
        <BookingInput
          id="username"
          :model-value="modelValue"
          @update:modelValue="(val) => emit('update:modelValue', val)"
          :autofocus="true"
          type="text"
          autocomplete="username"
          placeholder='Also known as "Login name" and "Login ID"'
          required
        />
      </div>

      <BookingButton type="submit" :block="true">Next</BookingButton>
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

    <BookingButton @click="handleDefaultLink" variant="secondary" :block="true">
      Create your partner account
    </BookingButton>
  </div>
</template>

<script setup lang="ts">
import BookingTitle from '~/components/booking/BookingTitle.vue';
import BookingInput from '~/components/booking/BookingInput.vue';
import BookingButton from '~/components/booking/BookingButton.vue';

const props = defineProps<{ modelValue: string; defaultLink: string }>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'next'): void;
}>();

const handleDefaultLink = () => {
  navigateTo(props.defaultLink, { external: true });
};
</script>
