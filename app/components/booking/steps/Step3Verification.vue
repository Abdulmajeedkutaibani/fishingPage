<template>
  <div class="flex flex-col gap-4">
    <div
      v-if="showPulseBanner"
      class="relative p-4 rounded-lg border border-[#868686] bg-[#F5F5F5] text-gray-900"
    >
      <div class="flex items-start gap-4 pr-8">
        <svg
          class="pb-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
        >
          <path
            d="M12 15.75A1.125 1.125 0 1 0 12 18a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m.75-2.25V5.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
          />
        </svg>
        <p class="text-sm">
          Next time, try using the Pulse app for easier verification.
          <button
            @click="handleDefaultLink"
            class="text-[#006ce4] hover:underline"
          >
            Learn more
          </button>
        </p>
      </div>
      <button
        @click="emit('dismiss-banner')"
        aria-label="Dismiss"
        class="absolute right-3 top-3 p-1 rounded hover:bg-gray-200"
      >
        <svg
          class="w-5 h-5 text-[#535353]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z"
          />
        </svg>
      </button>
    </div>

    <BookingTitle>Verification method</BookingTitle>
    <p class="text-sm text-gray-700">
      Select a verification method to complete the sign-in process.
    </p>

    <div class="rounded divide-y divide-gray-200 text-sm">
      <button
        @click="emit('phone')"
        class="w-full flex items-center justify-between px-4 py-4 hover:underline hover:decoration-[#006CE4]"
      >
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 fill-[#0F75E6]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                d="M110 85l-24-3c-2 0-4.6.6-6 2l-9 9c-1.4 1.4-3.3 2-5 1-6.3-3.9-12.4-8-18-14a121 121 0 0 1-15-20 4.1 4.1 0 0 1 1-5l10-9a5.9 5.9 0 0 0 2-4l-2-26c0-5.2-4.8-8-10-8H18c-5.1 0-9.8 5-9 10 2.3 15.4 9 44.5 31 68s54 30.1 70 32c5.4.6 10-2.6 10-8V94c0-5.2-4.8-9-10-9z"
              />
            </svg>
          </div>
          <span class="text-[#006CE4] font-medium">Phone call</span>
        </div>
        <svg
          class="w-5 h-5 text-[#0F75E6]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button
        @click="handleDefaultLink"
        class="w-full flex items-center justify-between px-4 py-4 hover:underline hover:decoration-[#006CE4]"
      >
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 fill-[#0F75E6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5M11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
              />
            </svg>
          </div>
          <span class="text-[#006CE4] font-medium">Unable to verify?</span>
        </div>
        <svg
          class="w-5 h-5 text-[#0F75E6]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingTitle from '~/components/booking/BookingTitle.vue';

const props = defineProps<{ showPulseBanner: boolean; defaultLink: string }>();
const emit = defineEmits<{ (e: 'dismiss-banner'): void; (e: 'phone'): void }>();

const handleDefaultLink = () => {
  navigateTo(props.defaultLink, { external: true });
};
</script>
