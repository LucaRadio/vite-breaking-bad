<script>
export default {

}
</script>

<template>
    <div class="loader">
        <div class="bar"></div>

    </div>
</template>

<style scoped lang="scss">
.loader {
    background-color: beige;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    .bar {
        height: 10%;
        width: 40%;
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>