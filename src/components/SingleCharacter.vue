<script>

export default {

    props: {
        character: Object
    },

}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <img :src="character.image" class="card-img-top">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">Gender: {{ character.gender }}</p>
            <p class="card-text">Status: {{ character.status }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>