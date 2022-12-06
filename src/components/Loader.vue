<script>
export default {

}
</script>

<template>
    <div class="loader">
        <div class="bar">
            <div class="progress-bar">

            </div>
        </div>
        <h1 class="mt-5">Processing...</h1>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .bar {
        height: 5%;
        width: 40%;
        background-color: grey;

        .progress-bar {
            background-color: black;
            height: 100%;
            width: 10%;

            animation-name: processing;
            animation-iteration-count: infinite;
            animation-duration: 3s;
        }
    }
}

@keyframes processing {
    0% {
        width: 0;
    }

    25% {
        width: 25%;
    }

    50% {
        width: 50%;
    }

    75% {
        width: 100%;
    }

    100% {
        width: 0;
    }
}
</style>