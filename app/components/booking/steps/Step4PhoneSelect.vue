<template>
  <div class="flex flex-col gap-4">
    <div>
      <BookingTitle>Select phone number</BookingTitle>
      <p class="text-sm text-gray-700 mt-1">
        Select a phone number to receive your verification code in a call.
      </p>
    </div>

    <div>
      <label
        for="phoneSelect"
        class="block text-sm font-medium text-gray-900 pb-1"
        >Phone number</label
      >
      <div class="relative">
        <select
          id="phoneSelect"
          v-model="selected"
          class="w-full h-[36px] py-[3px] pl-2 pr-9 border border-gray-400 rounded-sm text-sm focus:outline-none focus:ring-opacity-20 bg-white cursor-pointer"
          style="
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          "
        >
          <option value="" disabled>Select phone number</option>
          <option value="+1 202-555-0132">+31******9092</option>
          <option value="+1 202-555-0175">+31******2000</option>
        </select>
        <svg
          class="w-6 h-6 text-gray-600 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <BookingButton :disabled="!selected" @click="emit('next')" :block="true">
      Call now
    </BookingButton>

    <div class="text-center">
      <button
        @click="handleDefaultLink"
        class="text-[#006ce4] w-full px-4 py-2 rounded hover:bg-slate-100 hover:bg-opacity-20 text-sm font-medium transition-colors duration-300"
      >
        Unable to verify?
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingTitle from '~/components/booking/BookingTitle.vue';
import BookingButton from '~/components/booking/BookingButton.vue';

const props = defineProps<{ modelValue: string; defaultLink: string }>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'next'): void;
}>();

const selected = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val),
});

const handleDefaultLink = () => {
  navigateTo(props.defaultLink, { external: true });
};
</script>
