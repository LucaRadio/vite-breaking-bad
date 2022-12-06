<script>
import SingleCharacter from './SingleCharacter.vue';
import { List } from "../store.js"

import axios from "axios"
export default {
    components: { SingleCharacter },
    data() {
        return {
            List,
            error: false
        }
    },
    methods: {


        getCharacter() {
            this.List.loading = true;
            this.List.characters = [];
            axios.get("https://swapi.dev/api/people/")
                .then(resp => {
                    this.List.characters = resp.data.results
                    this.List.loading = false;
                })
                .catch(() => {
                    this.error = true
                })
        }
    },
    created() {
        this.getCharacter();
    }
}
</script>

<template>
    <div class="container bg-white mt-4 p-5">
        <div class="bg-dark text-white fw-bold p-3 fs-4">Found {{ this.List.characters.length }} characters</div>
        <div class="error alert alert-danger mt-3" v-if="error">Attenzione , richesta HTTP non trovato! Controllare URL
            e riprovare</div>
        <div class="row row-cols-5 g-3 mt-3">
            <div class="col" v-for="character in this.List.characters" v-if="this.List.characters">
                <SingleCharacter :character="character" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>