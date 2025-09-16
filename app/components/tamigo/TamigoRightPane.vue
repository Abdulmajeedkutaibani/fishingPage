<template>
  <aside
    class="bg-white flex items-center col-span-12 md:col-span-5 relative h-screen"
  >
    <div>
      <div
        class="absolute top-[30px] right-[30px] w-[48px] h-[32px] mb-[10px] hover:cursor-pointer hover:bg-gray-200 rounded-sm flex items-center justify-center"
      >
        <a :href="defaultLink" class="py-[6px] px-[12px]">
          <img :src="EnUsGif" alt="English (US)" class="w-full h-full" />
        </a>
      </div>
      <Transition name="fade" mode="out-in">
        <div
          v-if="step === 'login'"
          key="news"
          class="pl-[10px] pr-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center"
        >
          <div class="w-2/3 pl-[15px]">
            <h2 class="text-4xl mb-[100px] font-light text-indigo-800">News</h2>
          </div>
          <div class="flex justify-between">
            <div class="pr-[15px]">
              <a
                class="flex items-center justify-center w-[50px] h-[50px]"
                :href="defaultLink"
              >
                <img :src="ButtonLeft" alt="Left" class="w-full h-full" />
              </a>
            </div>
            <div class="text-lg text-[#646464] leading-7 px-[15px] w-2/3">
              <h3 class="font-medium my-[10px]">Forgot your password</h3>
              <p class="mb-[10px]">
                If you have forgotten your password, you can easily get a new
                one. Just click on the link below the login button and follow
                the instructions to reset your password.
              </p>
            </div>
            <div class="px-[15px]">
              <a
                class="flex items-center justify-center w-[50px] h-[50px]"
                :href="defaultLink"
              >
                <img :src="ButtonRight" alt="Right" class="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
        <div
          v-else
          key="help"
          class="pl-[10px] pr-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center"
        >
          <div class="w-2/3 px-[15px]">
            <h2 class="text-4xl mb-[100px] font-light text-indigo-800">
              Get a new password!
            </h2>
          </div>
          <div class="flex items-center justify-center">
            <div class="text-lg text-[#646464] leading-7 px-[15px] w-2/3">
              <p class="mb-[10px]">
                To reset your password, type in the email address you use with
                tamigo. Select whether you want a link sent to your email
                address or a new password sent to your mobile number. An email
                or SMS will then be sent to you.
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ButtonLeft from '~/assets/tamigo_Button-Left.svg';
import ButtonRight from '~/assets/tamigo_Button-Right.svg';
import EnUsGif from '~/assets/en-US.gif';

defineProps<{ defaultLink: string; step: 'login' | 'forgot' }>();
</script>
