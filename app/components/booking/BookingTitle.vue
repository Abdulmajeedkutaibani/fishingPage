<template>
  <component :is="tag" class="text-xl font-bold text-gray-900 mb-[13.4px]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  { tag: 'h1' }
);
</script>
