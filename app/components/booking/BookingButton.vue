<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[baseClass, variantClass, block ? 'w-full' : '']"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    block?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    variant: 'primary',
    block: false,
    disabled: false,
  }
);

const baseClass =
  'py-3 px-4 rounded text-base transition-colors duration-150 font-medium cursor-pointer';

const variantClass = computed(() =>
  props.variant === 'secondary'
    ? 'bg-white hover:bg-gray-50 text-[#0071c2] border border-[#0071c2]'
    : 'bg-[#006ce4] hover:bg-[#00519e] text-white disabled:bg-[#d9d9d9] disabled:text-[#a2a2a2] disabled:cursor-not-allowed disabled:hover:bg-[#d9d9d9]'
);
</script>
