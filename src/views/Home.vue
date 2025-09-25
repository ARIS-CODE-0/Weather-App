<template>
  <div class="navbar bg-base-100 shadow-sm flex justify-between p-5">
    <a class="btn btn-ghost text-xl">Weather App</a>
    <SearchInput :cities="cities"/>
  </div>
  <MeteoCard v-if="precedentMeteo.length > 0" v-for="meteo in precedentMeteo"
  :key="`data-${meteo.dt}`"
  :meteo="meteo"
  />
  <div v-else class="h-screen w-full flex items-center justify-center">
    <p>Vous n'avez aucune ville en favoris</p>
  </div>
</template>

<script setup>
import MeteoCard from '@/components/meteoCard.vue';
import { onMounted, ref, watch } from 'vue';
import { usetheme } from '@/components/composables/themes';
import cities from '@/data/cities.json'
import SearchInput from '@/components/searchInput.vue';

const precedentMeteo = ref(JSON.parse(localStorage.getItem('precedentMeteo')) || [])
const { theme } = usetheme('aqua')









</script>
