<script setup lang="ts">
import { ref } from 'vue'
const inputtingName = ref<string>('' )
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])

const register = ()=>{
    const person = {id:Math.random(),name:inputtingName.value,age:inputtingAge.value}
    console.log(person);
    
    emit('register',person)
}

</script>

<template>
    <div class="form-container">
        <div class="input-container">
            <div class="input-column">
                <span>name:</span>
                <input class="input" v-model="inputtingName" />
            </div>
            <div class="input-column">
                <span>age:</span>
                <input class="input" v-model="inputtingAge" type="number" />
            </div>
        </div>
        <button @click="register" class="register-button">register</button>
    </div>
</template>

<style scoped>
.form-container{
    background-color: bisque;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}
span{
    font-size: 20px;
    font-weight: bold;
}
    input{
        border-radius: 2px;
        border: solid;
        margin-bottom: 12px;
        /* display: flex; */
        /* justify-content: space-between; */
    }
    .input-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .input-column{
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
    .register-button{
        border: 2px solid;
        border-radius: 4px;
        color:white;
        background-color:chocolate;
    }
</style>