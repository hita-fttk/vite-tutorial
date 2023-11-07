<script setup lang="ts">
import { ref } from 'vue';
    const hoge = ref<string>('aaa');
    const hogehoge = ref<string>('');
</script>

<template>
    <h1>コンポーネントのテストページ</h1>
    <h2>{{ hoge }}</h2>
    <span>{{ hogehoge }}</span>
    <input type="text" value="ccc">
    <div class="input-container">
        <span>{{ hoge }}</span>
        <div class="input-box1">
            <input class="input-one" type="text">
            <input class="input-two" type="text">
        </div>
        <div class="input-box2">
            <div>{{ hoge }}</div>
            <input class="input-one" type="text" v-model="hogehoge">
            <button>BOTTON</button>
        </div>
            <div>uuu</div>
               <div class="input-box3">
                    <div>{{ hoge }}</div>
                    <span class="labeling">bbb</span>
                    <input class="input-one" type="text">
                </div>
        <button>Push</button>
    </div>
</template>

<style>
    .input-container{
        margin: 40px;
        border: 2px solid red; 
        display: flex;
        justify-content: center;
        height: 50%;
        background-color: bisque;
        align-items:center;
        flex-direction: column;
    }
    .input-box1{
        border: 2px solid blue;
        width: 50%;
        margin: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: aquamarine;
        
    }
    .input-box2{
        border: 2px solid blue;
        width: 40%;
        margin: 12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: aquamarine;
        
    }
    .input-box3{
        border: 2px solid blue;
        width: 30%;
        padding: 12px;
        margin: 12px;
        display: flex;
        justify-content: center;
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
    button{
        border: 2px solid darkseagreen;
        border-radius: 2px;
        margin: 20px;
    }
    .labeling{
        float: left;
    }
</style>