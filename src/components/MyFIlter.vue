<script>
import { List } from '../store';

export default {
    data() {
        return {
            List,
            speciesList: [],
            specie: ""
        }
    },
    methods: {
        getSpeciesAmount() {
            const species = []

            this.List.characters.forEach(character => {
                if (!species.includes(character.species)) {
                    species.push(character.species);
                }
            });
            return species;
        },
        sendCommand() {
            this.$emit("getFilteredCharacter", this.specie)
            console.log(this.speciesList);
        }

    },
    created() {
        this.getSpeciesAmount();
    }


}

</script>

<template>
    <form @submit.prevent="sendCommand()" class="d-flex">
        <select class="form-control" v-model="specie">
            <option v-for="opt in getSpeciesAmount()">{{ opt }}</option>
        </select>
        <button class="ms-3 btn btn-primary">Filter</button>
    </form>
</template>

<style scoped>
select {
    width: auto;
}
</style>