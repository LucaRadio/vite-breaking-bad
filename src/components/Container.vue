<script>
import Characters from './Characters.vue';

export default {
    components: { Characters }
}

</script>

<template>
    <div class="container">

        <select class="form-control">
            <option value="">Select category</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
        </select>
        <Characters />
    </div>
</template>

<style scoped>
select {
    width: auto;
}
</style>