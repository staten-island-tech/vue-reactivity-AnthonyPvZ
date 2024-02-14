<script setup>

import Createperkcard from '../components/Createperkcard.vue';
const perks = [
  {
    name: "Stopping Power",
    desc: "Increases bullet damage",
    img: '.../icons/stoppingpower.PNG',
  }
]
</script>

<template>
<div>
  <Createperkcard
    v-for="Perk in perks"
    :key="Perk.name"
    :Destination="Perk"
  />
</div>
</template>
