<script setup lang="ts">
import { Memo } from './TestDisplay.vue';
type Props ={
    memos:Memo[]
}

defineProps<Props>()

</script>

<template>
    <div>
        Listを表示
    </div>
    <div class="list-container">
        <li v-for="memo in memos">
            {{ memo.id }}
            <span>{{ memo.title }}</span>
        </li>
    </div>
</template>

<style scoped>
li{
    list-style: none;
    margin: 12px;
    border: 2px solid;
    padding: 12px;
    border-radius: 4px;
}
.list-container{
    background-color: lightblue;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    margin: 20px;

}
</style>