<script setup lang="ts">
import { ref,defineEmits } from 'vue'
const inputtingDescription = ref<string>('')
const postTweet = ()=>{
    emit('post-tweet',inputtingDescription)
}

const emit = defineEmits(['post-tweet'])

</script>

<template>
    <div class="form-container">
        <input v-model="inputtingDescription" type="text">
      <button class="save-button" @click="postTweet">post</button>
    </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}
input{
  border: 1px solid;
  margin-top: 16px;
  padding: 2px;
}
.save-button{
  background-color: aquamarine;
  border: 1px solid;
  border-radius: 2px;
  margin-top: 16px;
  padding: 4px 16px;
  color: azure;
  font-weight: bold;
}
.save-button:hover{
  background-color: rgb(5, 250, 169);
}
</style>