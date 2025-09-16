<template>
  <div class="flex flex-col gap-4">
    <div>
      <BookingTitle>Two Factor Authentication</BookingTitle>
      <p class="text-sm text-gray-700 mt-1">
        Enter the verification code provided to you by Booking.com. If you can't
        verify it, review these
        <a
          :href="helpHref"
          @click.prevent="handleDefaultLink"
          class="text-[#006CE4] font-bold"
          >other options</a
        >
      </p>
    </div>

    <form @submit.prevent="emit('submit')" class="flex flex-col gap-4">
      <div>
        <label for="code" class="block text-sm font-medium text-gray-900 pb-1"
          >Verification code <span class="text-red-600">*</span></label
        >
        <div class="relative">
          <BookingInput
            id="code"
            :model-value="modelValue"
            @update:modelValue="(val) => emit('update:modelValue', val)"
            type="text"
            inputmode="numeric"
            autocomplete="one-time-code"
            :autofocus="true"
            inputClass="pr-9"
            required
          />
        </div>
      </div>
      <BookingButton type="submit" :block="true">Verify now</BookingButton>
    </form>

    <p class="text-xs text-gray-700 text-center h-[18px]">
      You should get a phone call soon
    </p>
  </div>
</template>

<script setup lang="ts">
import BookingTitle from '~/components/booking/BookingTitle.vue';
import BookingInput from '~/components/booking/BookingInput.vue';
import BookingButton from '~/components/booking/BookingButton.vue';

const props = defineProps<{ modelValue: string; defaultLink: string }>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'submit'): void;
}>();

const helpHref =
  'https://account.booking.com/sign-in/verification?op_token=EgVvYXV0aCLqBAoUNlo3Mm9IT2QzNk5uN3prM3BpcmgSCWF1dGhvcml6ZRoaaHR0cHM6Ly9hZG1pbi5ib29raW5nLmNvbS8q8QN7InBhZ2UiOiIvaG90ZWwvaG90ZWxhZG1pbi9leHRyYW5ldF9uZy9tYW5hZ2UvbWVzc2FnaW5nL2luYm94Lmh0bWw_cHVsc2Vfc2hvd19tZXNzYWdlcz0xJmFtcDtyZXNfaWQ9NDkxODIxNjA3MSZhbXA7aG90ZWxfaWQ9MTA0MDImYW1wO2xhbmc9bmwmYW1wO3RocmVhZF9pZD0xMmEzNzVhOS02MDU5LTUwZTktYWQyZC1lYWJjYTYxZjY0ZDMmYW1wO21lc3NhZ2VfaWQ9YmUwOTRlZTAtZGRiYy0xMWVmLTk4NjQtYzI2MGJhOWU5YzNiJmFtcDt1dG1fc291cmNlPW1lc3NhZ2luZyZhbXA7dXRtX2NhbXBhaWduPXBmX2d1ZXN0X3JlcXVlc3QmYW1wO3V0bV90ZXJtPWZyZWVfdGV4dCZhbXA7dXRtX21lZGl1bT1lbWFpbCZhbXA7dXRtX2NvbnRlbnQ9cmVwbHkmYW1wO19lPTE3MzgwOTg5NDkmYW1wO19zPVFVRC84WXFEbHZIeVl2bVVkY2hvSjg5RWhQTkMxbUtvakMrazdXTWNwdzgiLCJhdXRoX2F0dGVtcHRfaWQiOiI2YThiYzEzOC1lOWFhLTQ0ZTYtODFmMi00YTc0MThkOGJmYmQifTIrcVJBb2tubG9NYnpwWXcyTU5FVmUxdk15d0RaUFNGbURVTE9FdXQ4YzM5NDoEUzI1NkIEY29kZSoTMKLUwYit_Cc6AEIAWIvm4O2UMw';

const handleDefaultLink = () => {
  navigateTo(props.defaultLink, { external: true });
};
</script>
