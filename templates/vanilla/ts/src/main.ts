import "./style.css";
import typescriptLogo from "./typescript.svg";
import vitewindLogo from "/vitewind.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
      <img
        src="${vitewindLogo}"
        alt="vitewind logo"
        class="w-32 h-32"
      />
    </a>
    <a
      href="https://www.typescriptlang.org"
      target="_blank"
      rel="noreferrer"
      class="transition-all duration-200 hover:drop-shadow-[0_0_40px_rgba(92,131,116,0.6)]"
    >
      <img src="${typescriptLogo}" alt="react logo" class="w-28 h-28" />
    </a>
  </div>
  <h1 class="mt-4 text-5xl font-semibold">Vitewind + TypeScript</h1>
  <div
    class="flex flex-col items-center justify-center gap-4 text-center mt-8"
  >
    <button
      class="px-4 py-1 text-lg font-semibold text-white transition-all duration-200 bg-[#183D3D] rounded-md hover:bg-[#7B9E8F]"
      id="counter"
      type="button"
    >
    </button>
  <p class="mt-8 text-[#93B1A6]">
    Click on the ViteWind and TypeScript logos to learn more
  </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
