<script setup lang="ts">
import { ref } from 'vue';
    const hoge = ref<string>('aaa');
</script>

<template>
    <h1>コンポーネントのテストページ</h1>
    <h2>{{ hoge }}</h2>
    <div class="input-container">
        <span>{{ hoge }}</span>
        <div class="input-box">
            <input class="input-one" type="text">
            <input class="input-two" type="text">
        </div>
        <span>{{ hoge }}</span>
        <div class="input-box">
            <input class="input-one" type="text">
            <input class="input-two" type="text">
        </div>
        <div class="input-box">
            {{ hoge }}
            <input class="input-one" type="text">
            <input class="input-two" type="text">
        </div>
    </div>
</template>

<style>
    .input-container{
        margin: 40px;
        border: 2px solid red; 
        display: flex;
        justify-content: center;
        height: 500px;
        background-color: bisque;
        align-items:center;
        flex-direction: column;
    }
    .input-box{
        border: 2px solid blue;
        width: 50%;
        margin: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: aquamarine;
        

    }
    .input-one{
        border: 1px solid green;
        text-align: center;
        margin: 12px;
        padding: 8px;
    }
    .input-two{
        margin-bottom: 12px;
        padding: 4px;
    }
</style>