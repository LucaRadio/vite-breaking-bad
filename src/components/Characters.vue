<script>
import SingleCharacter from './SingleCharacter.vue';
import { List } from "../store.js"
import MyFilter from './MyFilter.vue';

import axios from "axios"
export default {
    components: { SingleCharacter, MyFilter },
    data() {
        return {
            List,
            error: false,
            allCharacter: '',
            specieSelected: ''

        }
    },
    methods: {
        getCharacter() {
            this.List.loading = true;
            this.List.characters = [];
            axios.get("https://rickandmortyapi.com/api/character/", {
                params: {
                    species: this.specieSelected
                }
            })
                .then(resp => {
                    this.allCharacter = resp.data.info.count;
                    this.List.characters = resp.data.results
                    setTimeout(() => { this.List.loading = false }, 1000)
                })
                .catch(() => {
                    this.error = true;
                    this.List.loading = false;

                })
            this.specieSelected = ""
        },

        refresh(specie) {
            this.specieSelected = specie
            this.getCharacter()
        }
    },
    created() {
        this.getCharacter()

    }
}
</script>

<template>
    <MyFilter @getFilteredCharacter="refresh" />
    <div class="container bg-white mt-4 p-5">
        <div class="bg-dark text-white fw-bold p-3 fs-4">Found {{ allCharacter }} characters</div>
        <div class="error alert alert-danger mt-3" v-if="error">Attenzione , richesta HTTP non trovato! Controllare URL
            e riprovare</div>
        <div class="row row-cols-5 g-3 mt-3">
            <div class="col" v-for="character in this.List.characters">
                <SingleCharacter :character="character" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>