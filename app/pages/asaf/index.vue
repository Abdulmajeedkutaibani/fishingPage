    <template>
        <div class="min-h-screen afas-page text-[#1a1a1a]">
            <header class="relative h-[340px] overflow-hidden">
                <div class="absolute inset-0 pointer-events-none [background:radial-gradient(900px_420px_at_-10%_-10%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_60%),radial-gradient(700px_480px_at_110%_0%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_60%)]"></div>
                <div class="absolute top-3 right-4 flex items-center gap-3 text-[#e9f5ff]">
                    <div class="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-xs leading-none">
                        <div class="text-[#9ef5b0] font-bold" aria-hidden="true">✓</div>
                        <a class="text-[#e9f5ff] no-underline" href="https://www.afasstatus.nl/" target="_blank" rel="noopener">AFAS Status</a>
                    </div>
                    <div class="rounded bg-white/20 px-2 py-1 text-xs font-semibold text-white" aria-label="Language">EN</div>
                </div>
                <div class="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 opacity-95 drop-shadow" aria-hidden="true">
                    <img alt="Afas online logo" class="h-7" src="https://idp.afasonline.com/images/AFASOnlineWit.svg">
                </div>
            </header>

            <main class="relative w-full h-full flex items-center justify-center ">
                <div class="relative w-[500px] max-w-full -mt-[90px] mx-auto  bg-white p-[22px] px-[26px] shadow-[0_16px_40px_rgba(0,0,0,0.18)]" role="dialog" aria-labelledby="afas-login-title">
                    <div class="flex items-center justify-between gap-3">
                        <h2 id="afas-login-title" class="m-0 text-[20px] font-bold text-[#2b2b2b]">Log in at AFAS Online</h2>
                        <button class="cursor-pointer rounded bg-[#0e73c6] px-2.5 py-1.5 text-xs font-bold text-white" type="button" aria-label="Help">HELP</button>
                    </div>

                    <div class="mt-3 mb-1.5 text-sm text-[#616161]">Enter your email address here.</div>

                    <div class="w-full">
                        <div class="relative mt-2.5">
                            <input
                                id="email"
                                v-model="email"
                                type="email"
                                class="peer h-10 w-full border-0 border-b-2 border-[#bdbdbd] bg-transparent px-3 text-sm outline-none transition-colors placeholder-transparent focus:border-[#0e73c6]"
                                inputmode="email"
                                autocomplete="username"
                                placeholder=" "
                                required
                            >
                            <label for="email" class="pointer-events-none absolute left-3 bottom-[10px] text-[#9e9e9e] transition-all peer-focus:-translate-y-[18px] peer-focus:text-xs peer-focus:text-[#0e73c6] peer-[&:not(:placeholder-shown)]:-translate-y-[18px] peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-[#0e73c6]">Email address</label>
                        </div>

                        <div class="mt-4 flex flex-wrap items-center gap-3">
                            <button type="button" class="inline-flex h-[38px] items-center gap-2 rounded border border-[#a6e7c2] bg-[#f2fff7] px-3.5 text-sm font-semibold text-[#1d7a44] transition-colors select-none active:translate-y-px hover:border-[#8fe2b3] hover:bg-[#e8ffee]">
                                <img class="h-[18px] w-[18px]" alt="passkey icon" src="https://idp.afasonline.com/images/fido-passkey-green.svg">
                                <span>Log in with a passkey</span>
                            </button>
                            <button type="submit" class="inline-flex h-[38px] items-center gap-2 rounded border border-[#28c16a] bg-[#28c16a] px-4 text-sm font-semibold text-white transition-colors select-none active:translate-y-px hover:border-[#22a85b] hover:bg-[#22a85b]" @click.prevent="onSubmit">Next</button>
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
    </style>