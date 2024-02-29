<template>
<div>
  <Createperkcard
    v-for="destination in perks"
    :key="destination.name"
    :Destination="destination"
    @inc="document.querySelector('#deck') + destination.image"
  /> 
</div> 
<div id="deck">
  <Createperkcard
   v-for="destination in store"
   :key="destination.name"
   :Destination="destination"
  />
</div>
</template>


<script setup>
import Createperkcard from '../components/Createperkcard.vue';
import deepimpact from '../components/icons/Deepimpact.png';
import lifeinfusion from '../components/icons/Lifeinfusion.png';
import luckycharm from '../components/icons/Luckycharm.png';
import survivalcontract from '../components/icons/Survivalcontract.png';
const perks = [
    {
      name: "Deep Impact",
      desc: "Your shots will pierce through enemeies.",
      image: deepimpact,
    },
    {
      name: "Life Infusion",
      desc: "Killing an enemy has a 40% chance to increase your maximum health. Lose 50% of this extra health at the start of each night.",
      image: lifeinfusion,
    },
    {
      name: "Lucky Charm",
      desc: "Increases the chance for random effects to occur. Effect is reduced by 50% for critical hits to occur.",
      image: luckycharm,
    },
    {
      name: "Survival Contract",
      desc: "Increases the amount of money you gain at the end of each night.",
      image: survivalcontract,
    },
  ]

const store = []
  // https://stackoverflow.com/questions/52424306/add-html-element-in-div-vuejs
  // TLDR ^ push item info into a new array for another template to iterate over should work if .push is nice
</script>