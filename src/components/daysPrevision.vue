
<template>
  <div id="days" class="flex justify-center mt-120 md:mt-150 w-4/5">
    <div
      class="w-11/12 rounded-2xl p-4 text-white bg-white/20 backdrop-blur-xl">
      <div class="flex justify-between items-center py-3 border-b border-white/20">
        <span class="text-gray-300">Prévisions sur 8 jours</span>
      </div>
      <Dayprevison v-for="day in dayPrevisionArray"
      :key="day.dt"
      :day="day"
      :id="`day-${day.dt}`"
      />
      
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import Dayprevison from '@/components/dayprevision.vue'

const props = defineProps({
    dayPrevisionArray: {
        type: Array,
        required: true
    }
})



//console.log(props.dayPrevisionArray)
</script>