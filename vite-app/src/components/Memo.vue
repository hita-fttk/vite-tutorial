<script setup lang="ts">
import { ref } from 'vue';
const memos = ref([{id:0,name:'aaa',age:34},{id:1,name:"ccc",age:21}])

const memoName =ref<string>('')
const memoAge =ref<number>(0)


const memoRegister = (memoName,memoAge)=>{
    console.log(memoName);
    const memo = {id:Math.random(),name:memoName,age:memoAge}
    memos.value.push(memo)

}

const memoDelete = (id:number) =>{
    memos.value = memos.value.filter((memo) => memo.id != id)
}

const checkInputLength = () =>{

}

</script>
<template>
    <h1>Memo</h1>
    <div class="container">
        <div class="form-container">
            <label>name:
                <input v-model="memoName" type="text">
                <p class="alert" v-if="memoName.length >= 15">! Exceed Input! </p>
            </label>
            <label>age:
                <input v-model="memoAge" type="text">
            </label>
            <button @click="memoRegister(memoName,memoAge)">register</button>
        </div>
        <div class="memo-container">
            <p v-if="memos.length <= 0">No Tweet have been added</p>
            <ul>
                <li v-for="memo in memos" :key="memo.id" class="memo-list">
                    <span>{{ memo.name }}</span>
                    <span>{{ memo.age }}</span>
                    <button class="memo-button" @click="memoDelete(memo.id)" >delete</button>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
h1{
    font-size: 80px;
}
.container{
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
label{
    float: left;
}
.form-container{
    display: flex;
    flex-direction: column;
    background-color: bisque;
    width: 40%;
    height: 30%;
    align-items: center;
    padding: 12px;
    /* justify-content: center; */
}
input{
    background-color: aqua;
    margin: 20px;
    justify-content: center;
}
button{
    border: 1px solid;
    border-radius: 2px;
    background-color: darkgoldenrod;
    color: aliceblue;
    /* justify-content: center; */
}
button:hover{
    background-color: darkred;
}
.alert{
    color: red;
}
.memo-container{
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    background-color: bisque;
    margin: 12px;
    padding: 12px;
    height: 30%;
    width: 30%;
}
.memo-list{
    margin-bottom: 8px;
}
li{
    background-color: aliceblue;
}
span{
    margin-right: 12px;
}
.memo-button{
    margin-left: 50px;
}
</style>