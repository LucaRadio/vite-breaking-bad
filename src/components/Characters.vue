<script>
import axios from 'axios';
// import axios from 'axios';
import{getCharacters} from "../store";
import { List } from "../store";
import MyFilter from "./MyFilter.vue";
import SingleCharacter from "./SingleCharacter.vue";
export default{
    components:{ SingleCharacter, MyFilter },
    created(){
        getCharacters(this.List.Link);
    },
    data(){
        return{
            List,
            error:false,

        }
    },
    methods:{
        filterList(status,species,type){
            if(status ==="All"){
                List.status=''
            }else{
                List.status= status
            };
            if(species ==="All"){
                List.species=''
            }else{
                List.species= species
            };
            if(type ==="All"){
                List.type=''
            }else{
                List.type= type
            }
            getCharacters(this.List.Link)
        },
        changePage(increment){
        if(increment){
            this.List.changePageCount +=1;
        }else{
            this.List.changePageCount -=1;
        }
        if(this.List.changePageCount<=0){
            this.List.changePageCount=0
            getCharacters(this.List.Link);
        }else{
            getCharacters(this.List.Link);
        }
        },
    }
}
</script>

<template>
    <MyFilter @statusSend="filterList"/>
    <div class="container bg-white mt-4 p-5">
        <div class="alert alert-info">This page has {{List.count}} characters</div>
        <div class="input-group mb-3 d-flex justify-content-center">
            <button @click="changePage(false)" class="btn btn-info">Prev</button>
            <button @click="changePage(true)" class="btn btn-info">Next</button>
        </div>

        
        <div class="error alert alert-danger mt-3 " v-if="this.error">Attenzione , richesta HTTP non trovato! Controllare URL
            e riprovare</div>
        <div class="row row-cols-5 g-3 mt-3">
            <SingleCharacter :character="List.characters"/>
        </div>
    </div>
</template>

<style scoped>

</style>