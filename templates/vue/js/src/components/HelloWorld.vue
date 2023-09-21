<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="w-full h-screen bg-[#040D12] flex flex-col items-center justify-center gap-4 text-[#93B1A6]"
  >
    <div class="flex items-center gap-12 select-none">
      <a
        href="https://vitewind.pages.dev"
        target="_blank"
        rel="noreferrer"
        class="transition-all duration-200 hover:drop-shadow-[0_0_40px_rgba(92,131,116,0.6)]"
      >
        <img
          src="../assets/vitewind.svg"
          alt="vitewind logo"
          class="w-32 h-32"
        />
      </a>
      <a
        href="https://v3.vuejs.org/"
        target="_blank"
        rel="noreferrer"
        class="transition-all duration-200 hover:drop-shadow-[0_0_40px_rgba(92,131,116,0.6)]"
      >
        <img src="../assets/vue.svg" alt="react logo" class="w-32 h-32" />
      </a>
    </div>
    <h1 class="mt-4 text-5xl font-semibold">{{ msg }}</h1>
    <div
      class="flex flex-col items-center justify-center gap-4 text-center mt-8"
    >
      <button
        class="px-4 py-1 text-lg font-semibold text-white transition-all duration-200 bg-[#183D3D] rounded-md hover:bg-[#7B9E8F]"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p class="text-sm text-[#93B1A6]">
        Edit
        <code
          class="px-1 py-1 text-sm font-semibold text-white bg-[#183D3D] rounded-sm"
          >components/HelloWorld.vue</code
        >
        to test HMR
      </p>
    </div>
    <p class="mt-8 text-[#93B1A6]">
      Click on the ViteWind and Vue logos to learn more
    </p>
  </div>
</template>
