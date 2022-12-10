<script>
import { List,getSpeciesList, getStatusList,getTypeList } from '../store';

export default {
    data() {
        return {
            List,
            status:'',
            species:"",
            type:"",
        }
    },
    methods: {
        sendCommand(){
            this.$emit("statusSend", this.status,this.species,this.type)
            List.error=false
        }
    },
    created() {
        getSpeciesList(),
        getStatusList();
        getTypeList();
    }


}

</script>

<template>
    <form class="d-flex" @submit.prevent="sendCommand">
        <select class="form-control" v-model="status">
            <option>All</option>
            <option v-for="Status in List.StatusList">{{Status}}</option>
        </select>
        <select class=" ms-3 form-control" v-model="species">
            <option>All</option>
            <option v-for="species in List.speciesList">{{species}}</option>
        </select>
        <select class=" ms-3 form-control" v-model="type">
            <option>All</option>
            <option v-for="typesingle in List.typeList">{{typesingle}}</option>
        </select>
        <button class="ms-3 btn btn-primary">Filter</button>
    </form>
</template>

<style scoped>
select {
    width: auto;
}
</style>