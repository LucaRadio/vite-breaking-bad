import axios from "axios";
import { reactive } from "vue";

export const List = reactive({
    characters: [],
    loading: false,
    Link:"https://rickandmortyapi.com/api/character/",
    error:false,
    status:"",
    type:'',
    count:0,
    changePageCount:1
})


export function getCharacters(link){
    
    axios.get(link,{
        params:{
            page: List.changePageCount,
            status:List.status,
            species:List.species,
            type:List.type,
        }
    })
    .then(resp=>{
        List.count= resp.data.info.count
        List.characters = resp.data.results;
    })
    .catch(() => {
    List.error = true;
    List.loading = false;
 })
}

export function getStatusList(){
    const status=[];
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(resp=>{
        resp.data.results.forEach(item => {
            if (!status.includes(item.status)){
                status.push(item.status)
            }
        });
        List.StatusList = status
    })
    .catch(() => {
        List.error = true;
        List.loading = false;
     })
}

export function getSpeciesList(){
    const species=[];
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(resp=>{
        resp.data.results.forEach(item => {
            if (!species.includes(item.species)){
                species.push(item.species)
            }
        });
        List.speciesList = species
    })
    .catch(() => {
        List.error = true;
        List.loading = false;
     })
}
export function getTypeList(){
    const type=[];
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(resp=>{
        resp.data.results.forEach(item => {
            if (!type.includes(item.type)){
                type.push(item.type)
            }
        });
        List.typeList = type
    })
    .catch(() => {
        List.error = true;
        List.loading = false;
     })
}

