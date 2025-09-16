<template>
  <input
    ref="inputEl"
    :type="type"
    :value="modelValue"
    @input="onInput"
    class="w-full h-[36px] px-2 py-1 border border-gray-400 rounded-sm text-sm focus:border-[#006CE4] focus:outline-none focus:ring-1 focus:ring-[#006CE4] focus:ring-opacity-20"
    :class="inputClass"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

defineOptions({ inheritAttrs: true });

const props = withDefaults(
  defineProps<{
    modelValue: string;
    type?: string;
    autofocus?: boolean;
    inputClass?: string;
  }>(),
  {
    type: 'text',
    autofocus: false,
    inputClass: '',
  }
);

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const inputEl = ref<HTMLInputElement | null>(null);

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

onMounted(() => {
  if (props.autofocus) {
    inputEl.value?.focus();
  }
});

watch(
  () => props.autofocus,
  (val) => {
    if (val) {
      inputEl.value?.focus();
    }
  }
);
</script>
