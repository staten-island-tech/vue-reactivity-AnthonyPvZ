<template>
  <div class="img">
    <img :src="Destination.image" alt="" />
    <button v-on:click="$emit('remove')">Unequip</button>
  </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});
</script>

<style lang="scss" scoped>

</style>