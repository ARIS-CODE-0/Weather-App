<template>
<div class="relative">
    <input 
    type="text" 
    placeholder="Search" 
    class="input input-bordered w-24 md:w-auto" 
    v-model="searchedCity"/>
    <div class="absolute z-100 bg-base-200 p-3 rounded-2xl">
        <ul>
            <li class="border-b-black" v-for="city in searchedArrayCities"> 
                <router-link :to="{name: 'Meteo', params: {city: city.name}}">
                    {{ city.name }}
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    const searchedCity = ref('')
    const searchedArrayCities = ref([])

    const model = defineModel()
    const props = defineProps({
        cities: {
            type: Object,
            require: false
        }
    })

    function searchCities(cities, query) {
  const q = query.toLowerCase()
  if(!q) return []
  return Object.entries(cities)
    .filter(([name]) => name.toLowerCase().includes(q))
    .map(([name, data]) => ({name, ...data}))
    .slice(0,5)
}

watch(searchedCity,(newCity) => {
  searchedArrayCities.value = searchCities(props.cities,newCity)
  console.log(searchedArrayCities.value)

})

console.log(searchedArrayCities.value)
</script>