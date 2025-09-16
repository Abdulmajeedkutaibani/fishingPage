<template>
  <nav>
    <div class="pt-[10px] pb-[15px] px-[15px]">
      <a :href="defaultLink">
        <img
          :src="TamigoLogoWhite"
          alt="tamigo"
          class="h-[28px] max-w-[140px] my-[5px] ml-[20px]"
        />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TamigoLogoWhite from '~/assets/Tamigo_Logo_White_RGB.png';

defineProps<{ defaultLink: string }>();
</script>
