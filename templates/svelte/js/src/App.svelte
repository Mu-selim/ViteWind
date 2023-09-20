<script>
  import svelteLogo from "./assets/svelte.svg";
  import vitewindLogo from "/vitewind.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div
    class="w-full h-screen bg-[#040D12] flex flex-col items-center justify-center gap-4 text-[#93B1A6]"
  >
    <div class="flex items-center gap-12 select-none">
      <a
        href="https://github.com/Mu-selim/ViteWind"
        target="_blank"
        rel="noreferrer"
        class="transition-all duration-200 hover:drop-shadow-[0_0_40px_rgba(92,131,116,0.6)]"
      >
        <img src="{vitewindLogo}" alt="vitewind logo" class="w-32 h-32" />
      </a>
      <a
        href="https://svelte.dev/"
        target="_blank"
        rel="noreferrer"
        class="transition-all duration-200 hover:drop-shadow-[0_0_40px_rgba(92,131,116,0.6)]"
      >
        <img src="{svelteLogo}" alt="react logo" class="w-32 h-32" />
      </a>
    </div>
    <h1 class="mt-4 text-5xl font-semibold">ViteWind + Svelte</h1>
    <button
      class="mt-4 px-4 py-1 text-lg font-semibold text-white transition-all duration-200 bg-[#183D3D] rounded-md hover:bg-[#7B9E8F]"
    >
      <Counter />
    </button>
    <p class="mt-4 text-sm text-[#93B1A6]">
      Check out
      <a
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer"
        class="text-[#93B1A6] underline"
        >SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>
    <p class="mt-8 text-[#93B1A6]">
      Click on the ViteWind and Svelte logos to learn more
    </p>
  </div>
</main>
