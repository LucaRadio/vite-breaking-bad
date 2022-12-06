<script>
import Container from './components/Container.vue';
import Loader from './components/Loader.vue';
import SingleCharacter from './components/SingleCharacter.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components: { SingleCharacter, TheHeader, Container, Loader }
}
</script>

<template>
  <TheHeader />
  <Container />
  <!-- <Loader /> -->
</template>

<style scoped lang="scss">

</style>
