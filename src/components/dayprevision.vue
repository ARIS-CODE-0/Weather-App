<template>
    <div class="flex justify-between items-center py-3 border-b border-white/20">
        <span>{{ day }}</span>
        <span>{{ emoji }}</span>
        <span>{{ minTemp }}° / {{ maxTemp }}°</span>
      </div>
</template>

<script setup>
import { getDayName, getTempInCelsius, getWeatherEmoji } from './composables/day';
const props = defineProps({
    day: {
        type: Object,
        required: true
    }
})

const day = getDayName(props.day.dt)
const minTemp = getTempInCelsius(props.day.feels_like.night)
const maxTemp = getTempInCelsius(props.day.feels_like.day)
const emoji = getWeatherEmoji(props.day.weather[0].id)

//console.log(emoji)
</script>