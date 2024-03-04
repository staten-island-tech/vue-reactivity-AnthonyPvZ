<template>
<div class="perks">
  <div class="title">Shop</div>
  <Createperkcard
    v-for="(destination,index) in perks"
    :key="index"
    :Destination="destination"
    @inc="console.log('pushed');{array = destination;store.push(array)};console.log(store);"
  /> 
</div> 
<div class="deck">
  <div class="title">Deck</div>
  <cart
    v-for="(destination,index) in store"
    :key="index"
    :Destination="destination"
    @inc="console.log('pushed');{array = destination;perks.push(array)};console.log(store);"
  /> 
</div>
</template>


<script setup>
import Createperkcard from '../components/Createperkcard.vue';
import deepimpact from '../components/icons/Deepimpact.png';
import lifeinfusion from '../components/icons/Lifeinfusion.png';
import luckycharm from '../components/icons/Luckycharm.png';
import survivalcontract from '../components/icons/Survivalcontract.png';
import cart from '../components/cart.vue'
import { ref } from 'vue';
const perks = ref([
    {
      name: "Deep Impact",
      desc: "Your shots will pierce through enemeies.",
      image: deepimpact,
      cost: "6 points",
    },
    {
      name: "Life Infusion",
      desc: "Killing an enemy has a 40% chance to increase your maximum health. Lose 50% of this extra health at the start of each night.",
      image: lifeinfusion,
      cost: "6 points"
    },
    {
      name: "Lucky Charm",
      desc: "Increases the chance for random effects to occur. Effect is reduced by 50% for critical hits to occur.",
      image: luckycharm,
      cost: "6 points"
    },
    {
      name: "Survival Contract",
      desc: "Increases the amount of money you gain at the end of each night.",
      image: survivalcontract,
      cost: "6 points"
    },
  ])
console.log(perks);
const store = ref([])
</script>
<style>
body * {
  box-sizing: border-box;
  font-size: 110%;
  margin: 0px;
  padding: 0px;
}
.title{
  font-size: 25px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height:50px;
  width:100%;
}
.perks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #84a5a5;
  border: black solid;
  float: left;
  width: 80%;
  height: 500px
}
.deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #7e9a9a;
  float: right;
  border: black solid;
  width: 20%;
  height: 500px;
}
.card {
  width: 25%;
  border-radius: 2rem;
  background-color: #59a6a6;
  object-fit: cover;
  border-radius: 2rem;
  justify-content: space-around;
  margin-top: 0rem;
  text-align: center;
  margin-right: 0px;
  height: 300px
}
.img {
  width: 20%;
  object-fit: cover;
  height: 20rem;
}
</style>
