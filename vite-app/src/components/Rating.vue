<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const isActiveButton = ref<string>(props.modelValue)
const onClick = (buttonType:string)=>{
    isActiveButton.value = buttonType
    emit('update:modelValue',isActiveButton.value)
}
</script>

<template>
    <ul>
        <li>
            <button v-bind:class="{active:isActiveButton === 'bad'}" @click="onClick('bad')" type="button" >Bad</button>
        </li>
        <li>
            <button v-bind:class="{active:isActiveButton === 'average'}" @click="onClick('average')" type="button">Average</button>
        </li>
        <li>
            <button v-bind:class="{active:isActiveButton === 'great'}" @click="onClick('great')" type="button" >Great</button>
        </li>
    </ul>

</template>

<style>
.active{
    color: brown;
}

ul{
    list-style: none;
    margin: 8px;
    padding: 4px;
    display: flex;
}
li{
    margin: 4px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    font:inherit;
    border: 1px solid;
    background-color: transparent;
    cursor: pointer;

}
</style>