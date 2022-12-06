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
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">Height: {{ character.height }}</p>
            <p class="card-text">Skin color: {{ character.skin_color }}</p>
            <p class="card-text">Birtday Year: {{ character.birth_year }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>