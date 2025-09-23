<template>
     <div class="card w-96 bg-base-300 card-sm shadow-sm m-auto my-10">
  <div class="card-body">
    <h2 class="card-title">{{ meteo.timezone }}</h2>
    <p>{{ meteo.current.weather[0].description }}</p>
    <div class="justify-end card-actions">
      <router-link :to="{name: 'Meteo', params: {city: 'Lubumbashi'}}">
        <button class="btn btn-primary">Voir la météo</button>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
    meteo: {
        type: Object,
        require: false
    }
})
console.log(props.meteo)
</script>