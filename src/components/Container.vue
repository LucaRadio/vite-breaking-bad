<script>
import Characters from './Characters.vue';


export default {
    components: { Characters },
    methods: {
        refresh() {
            console.log("ciao");
        }
    }

}

</script>

<template>
    <div class="container">


        <Characters />
    </div>
</template>

<style scoped>
select {
    width: auto;
}
</style>