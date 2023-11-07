<script setup lang="ts">
import { Ref, ref } from 'vue';
type Memo ={
    id:number,
    title:string,
}
const memos:Ref<Memo[]> = ref([{id:0,title:'No1'},{id:1,title:'No2'}])


</script>

<template>

</template>

<style></style>