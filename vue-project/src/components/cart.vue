<template>
    <div>
  <img :src="Destination.image" alt=""/>
    </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});
</script>

<style lang="scss" scoped>

</style>