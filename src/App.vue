<script>
import Container from './components/Container.vue';
import Loader from './components/Loader.vue';
import SingleCharacter from './components/SingleCharacter.vue';
import TheHeader from './components/TheHeader.vue';
import { List } from "./store.js"

export default {
  components: { SingleCharacter, TheHeader, Container, Loader },
  data() {
    return {
      List,
    }
  }
}
</script>

<template>
  <TheHeader />
  <Container />
  <Loader v-if="List.loading" />
</template>

<style scoped lang="scss">

</style>
