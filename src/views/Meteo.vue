<template>
    <div v-if="state==='ok'" id="body" class="flex flex-col items-center w-full h-screen">
        <Hero :localisation="data.timezone" :temperature="data.current.feels_like
"/>
        <daysPrevision :dayPrevisionArray="data.daily"/>
    </div>
    <Loading v-else-if="state==='loading'"/>
    <Erreur v-else :message="erreur"/>
    <button class="btn btn-soft btn-circle btn-primary w-15 h-15 fixed top-9/10 left-1/10">
        <img :src="StarLogo" alt="Logo favoris" class="w-10 h-10">
      </button>
    <router-link to="/">
      <button class="btn btn-soft btn-circle btn-primary w-15 h-15 fixed top-9/10 left-8/10">
        <img :src="HomeLogo" alt="Logo Home" class="w-10 h-10">
      </button>
    </router-link>
    
</template>

<script setup>

import { changeThemes, usetheme } from '@/components/composables/themes';

import { onMounted, onUnmounted, ref, warn, watch } from 'vue'
import { useRoute } from 'vue-router';
import Hero from '@/components/Hero.vue';
import daysPrevision from '@/components/daysPrevision.vue';
import Loading from '@/components/loading.vue';
import Erreur from '@/components/erreur.vue';
import HomeLogo from '@/assets/home.png'
import StarLogo from '@/assets/star.png'

const route = useRoute();
const data = ref(null)
const state = ref('loading')
const erreur = ref(null)
const city = route.params.city
const { theme } = usetheme('aqua')



onMounted(async ()=> {
  try {
    const res = await fetch(`http://localhost:3000/?city=${city}`)
    if(res.ok) {
      data.value = await res.json()
      //console.log(data.value)
    state.value='ok'
    } else {
      console.log(res)
      const err = await res.json()
      const message = await err.message
      throw new Error(JSON.stringify(message))
    }
  } catch (error) {
    state.value = 'error'
    erreur.value = error
  }
})








watch(data,(newData) => {
  const precedentMeteo = JSON.parse(localStorage.getItem('precedentMeteo')) || []
  if(precedentMeteo.findIndex(meteo =>meteo.dt === newData.dt) === -1) {
    precedentMeteo.push(newData)
    localStorage.setItem('precedentMeteo',JSON.stringify(precedentMeteo))
    console.log("Enregistrement...")
  } else {
    console.log("la requête est déjà enregistrée")
  }

})

</script>