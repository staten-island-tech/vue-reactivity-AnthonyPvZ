<template>
<div class="perks">
  <div class="title">Shop</div>
  <Createperkcard
    v-for="(destination,index) in perks"
    :key="index"
    :Destination="destination"
    @inc="console.log('pushed');{array = destination;store.push(array);perks.splice(index, 1)};console.log(store);"
  /> 
</div> 
<div class="deck">
  <div class="title">Deck</div>
  <cart
    v-for="(destination,index) in store"
    :key="index"
    :Destination="destination"
    @remove="console.log('pushed');{array = destination;store.splice(index, 1)};perks.push(array);console.log(store);"
  /> 
</div>
</template>


<script setup>
import Createperkcard from '../components/Createperkcard.vue';
import deepimpact from '../components/icons/Deepimpact.png';
import lifeinfusion from '../components/icons/Lifeinfusion.png';
import luckycharm from '../components/icons/Luckycharm.png';
import survivalcontract from '../components/icons/Survivalcontract.png';
import Chargedshot from '../components/icons/Chargedshot.png';
import Scavenger from '../components/icons/Scavenger.png';
import Splitshot from '../components/icons/Splitshot.png';
import maximumoverclock from '../components/icons/maximumoverclock.png';
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
      name: "Charged Shot",
      desc: "Gain increased damage the longer you aim down sights with scoped weapons. Charge resets each shot. Fully charged shots ignore armour.",
      image: Chargedshot,
      cost: "6 points",
    },
    {
      name: "Maximum Overclock",
      desc: "Increases the attack speed, range, and velocity of your deployables.",
      image: maximumoverclock,
      cost: "6 points",
    },
    {
      name: "Splitshot",
      desc: "Adds a chance to fire an additional projectile each shot.",
      image: Splitshot,
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
    {
      name: "Scavenfer",
      desc: "Killing an enemy has a chance for them to drop a supply package, providing a 40% speed boost as well as ammo, health, armour or money.",
      image: Scavenger,
      cost: "6 points",
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
body{
  background-image: url(../components/icons/back.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.title{
  font-size: 40px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height:50px;
  width:100%;
  color: whitesmoke;
}
.perks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #002a32;
  border: black solid;
  float: left;
  width: 60%;
  height: 1000px;
  margin: 50px 50px 50px 50px;
  box-shadow: inset 0px 10px 25px 5px rgba(0, 0, 0, 0.7);
}
.deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #002a32;
  float: right;
  border: black solid;
  width: 25%;
  height: 600px;
  margin: 50px 50px 20px 20px;
  box-shadow: inset 0px 10px 25px 5px rgba(0, 0, 0, 0.7);
  justify-content: center;
}
.card {
  width: 25%;
  border-radius: 2rem;
  background-color: #107070;
  object-fit: cover;
  border-radius: 2rem;
  justify-content: space-around;
  margin-top: 0rem;
  text-align: center;
  margin-right: 0px;
  height: 350px;
}
.img {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  float: left;
  height: 18px;
  justify-content: center;
}
</style>
