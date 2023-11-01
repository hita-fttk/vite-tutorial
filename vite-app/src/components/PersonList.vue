<script setup lang="ts">
import  { Person }  from './Persons.vue'
type Props = {
    persons:Person[]
}


defineProps<Props>()

const emit = defineEmits(['delete'])
const onClickDelete = (id:number,name:string)=>{
    if(confirm('Delete '+name+'?')){
        emit('delete',id)
    }
}
</script>

<template>
    <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>age:{{ person.age }}</span>
    <button @click="onClickDelete(person.id,person.name)">
        <span>delete</span>
    </button>
    </li>
</template>

<style scoped>
.person-list{
    list-style: none;
    border: 2px;
    font-size: 20px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    background-color: burlywood;
    width: 400px;
    padding: 12px;
    margin-top: 20px;
    border-radius: 4px;
    font-weight: bold;
}

button{
    border: 2px solid;
}
</style>