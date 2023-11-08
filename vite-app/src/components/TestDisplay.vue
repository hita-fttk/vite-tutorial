<script setup lang="ts">

import TestChild from './TestChild.vue';
import TestList from './TestList.vue';

import { Ref, ref } from 'vue';

export type Memo ={
    id:number,
    title:string,
}
const memos:Ref<Memo[]> = ref([{id:0,title:'No1'},{id:1,title:'No2'}])

const registerMemo = (memo)=>{
    memos.value.push(memo)
}

</script>

<template>
    <TestChild @register="registerMemo" />
    <TestList :memos="memos"/>
</template>

<style scoped>

</style>