<template>
  <div
    id="hero"
    class="hero bg-transparent min-h-[70vh] fixed top-0 left-0 w-full z-50 transition-all duration-500"
  >
    <div class="hero-content text-center">
      <div class="max-w-md transition-all duration-500">
        <h1 class="md:text-5xl text-3xl font-bold transition-all duration-500">
          {{ localisation }}
        </h1>
        <h2 class="py-6 text-9xl font-bold transition-all duration-500">
          {{ temp }}°
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { getTempInCelsius } from "./composables/day";

onMounted(() => {
  const hero = document.getElementById("hero");
  const body = document.getElementById("body")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      hero.classList.add("shrink");
    } else {
      hero.classList.remove("shrink");
    }
  });
});

const props = defineProps({
  localisation: {
    type: String,
    default: "Ville",
  },
  temperature: {
    type: Number,
    default: NaN,
  },
});

const temp = getTempInCelsius(props.temperature)
</script>

<style scoped>
#hero.shrink {
  min-height: 15vh; /* réduit la hauteur */
  /*background: rgba(255, 255, 255, 0.6); /* header visible */
  backdrop-filter: blur(10px); /* effet glass */
}

/* Titre qui rapetisse */
#hero.shrink h1 {
  font-size: 1.5rem;
}

/* Température qui rapetisse */
#hero.shrink h2 {
  font-size: 2rem;
  padding: 0;
}
</style>
