<!-- /pages/auth.vue -->
<template>
  <div class="page-gtwalsheim min-h-screen grid grid-cols-1 lg:grid-cols-12">
    <!-- Left (form area) -->
    <section
      class="bg-[#414BA5] text-white px-2 md:px-[15px] flex flex-col col-span-12 md:col-span-7 h-screen relative"
    >
      <TamigoNavbar :defaultLink="defaultTamigoLink" />

      <!-- logo -->

      <!-- step switch -->
      <Transition name="fade" mode="out-in">
        <TamigoLoginForm
          v-if="step === 'login'"
          key="login"
          :defaultLink="defaultTamigoLink"
          @forgot="step = 'forgot'"
        />
        <TamigoForgotForm
          v-else
          key="forgot"
          :defaultLink="defaultTamigoLink"
        />
      </Transition>
    </section>
    <TamigoRightPane :defaultLink="defaultTamigoLink" :step="step" />
  </div>
</template>

<script setup lang="ts">
type Step = 'login' | 'forgot';
const step = ref<Step>('login');

const defaultTamigoLink = ref(
  'https://signin.tamigo.com/login?signin=326299fe1e191073135f915ca78da0e9'
);
</script>

<style scoped>
@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Light.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Regular.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'GT Walsheim';
  src: url('~/assets/fonts/GTWalsheimPro-Bold.woff2') format('woff2'),
    url('~/assets/fonts/GTWalsheimPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.page-gtwalsheim {
  font-family: 'GT Walsheim', 'Helvetica Neue', Arial, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
button {
  cursor: pointer;
}
</style>
