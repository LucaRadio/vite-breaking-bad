<script>


export default{
    props: {
        character: Object
    }
}
</script>

<template>
    <div class="col" v-for="SingleCharacter in character">
        <div class="card">
            <img :src="SingleCharacter.image" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ SingleCharacter.name }}</h5>
                <p class="card-text">Gender: {{ SingleCharacter.gender }}</p>
                <p class="card-text">Status: {{ SingleCharacter.status }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>