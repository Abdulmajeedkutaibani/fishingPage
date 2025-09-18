    <template>
        <div class="min-h-screen bg-[#005FAA] md:bg-transparent text-[#1a1a1a] afas-bg-image">
            <header class="relative  overflow-hidden">
                <div class="absolute top-3 right-4 flex items-center gap-3 text-[#e9f5ff]">
                    <div class="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-xs leading-none">
                        <div class="text-[#9ef5b0] font-bold" aria-hidden="true">✓</div>
                        <a class="text-[#e9f5ff] no-underline" href="https://www.afasstatus.nl/" target="_blank" rel="noopener">AFAS Status</a>
                    </div>
                    <div class="rounded bg-white/20 px-2 py-1 text-xs font-semibold text-white" aria-label="Language">EN</div>
                </div>
               
            </header>

            <main class="relative w-full h-full min-h-screen flex flex-col items-center justify-center">
                 <div class=" h-[32px] mb-[5px]" aria-hidden="true">
                    <img alt="Afas online logo" class="h-[25px] w-[171px]" src="https://idp.afasonline.com/images/AFASOnlineWit.svg">
                </div>
                <div class="relative md:w-[500px] w-full max-w-full mx-auto  bg-white  px-[40px] py-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.32)]" role="dialog" aria-labelledby="afas-login-title">
                    <div class="flex items-center justify-between ">
                        <h2 id="afas-login-title" class="text-[22px] font-[300] text-[#0078d7] leading-[25px] pb-[10px] Roboto">Log in at AFAS Online</h2>
                        <button class="cursor-pointer rounded-[5px] bg-[#0e73c6] px-[10px] py-[1px] h-[27px] text-[13px] font-normal text-white shadow-md openSans hover:bg-[#005FAA]" type="button" aria-label="Help">HELP</button>
                    </div>

                    <div class=" text-[15px] pb-[40px] leading-[25px] text-[#616161] openSans">Enter your email address here.</div>

                    <div class="w-full">
                        <div class="relative mb-[20px] openSans text-[15px] leading-[25px]">
                            <input
                                id="email"
                                v-model="email"
                                type="email"
                                class="peer h-[33px] w-full border-b-2 border-[#9FA2A5] bg-transparent text-sm outline-none transition-colors placeholder-transparent focus:border-[#7FBBEA]"
                                inputmode="email"
                                autocomplete="username"
                                placeholder=" "
                                required
                            >
                            <label for="email" class="pointer-events-none absolute left-[5px]  text-[#D3DBE6] transition-all peer-focus:-translate-y-[20px] peer-focus:left-[-2px]  peer-focus:text-[#0e73c6] peer-[&:not(:placeholder-shown)]:-translate-y-[20px] peer-[&:not(:placeholder-shown)]:text-[15px] peer-[&:not(:placeholder-shown)]:text-[#0e73c6]">Email address</label>
                        </div>

                        <div class="w-full flex flex-wrap items-center gap-5 openSans mt-2.5">
                            <button type="button" class="inline-flex text-now md:w-[240px] flex-2 h-[39px]  items-center justify-center gap-2  border border-[#a6e7c2] p-1.5 text-[15px] font-normal text-[#3cc658] transition-colors select-none ">
                                <img class="h-[20px] w-[20px] " alt="passkey icon" src="https://idp.afasonline.com/images/fido-passkey-green.svg">
                                <span>Log in with a passkey</span>
                            </button>
                            <button type="submit" class="inline-flex md:w-[159px] flex-1 h-[39px] justify-center items-center gap-2  border border-[#3cc658] bg-[#3cc658] px-4 text-sm font-semibold text-white transition-colors select-none  hover:border-[#47d664] hover:bg-[#47d664]" @click.prevent="onSubmit">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </template>

    <script setup>
        import { ref } from 'vue'

        const email = ref('')

        function onSubmit() {
            // This is a visual replica; implement navigation/auth as needed
            // For now, simply log the captured email
            // eslint-disable-next-line no-console
            console.log('Submitted email:', email.value)
        }
    </script>

    <style scoped>
    @media (max-width: 560px) {
        /* Minor responsive tweak mirroring the original */
    }

    button{
        cursor: pointer;
    }
    </style>