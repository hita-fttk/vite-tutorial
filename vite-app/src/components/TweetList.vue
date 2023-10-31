<script setup lang="ts">
import { defineProps } from 'vue';


type Props ={
    tweets:Tweet[]
}
type Tweet = {
    id:number,
    description:string
}

defineProps<Props>()
// const tweets:any =[]

const deleteTweet = (id:number) =>{
    console.log('delete');
}
</script>

<template>
    <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button class="delete-button" @click="deleteTweet(tweet.id)" >delete</button>
        </li>
</template>

<style scoped>
.delete-button{
  margin-left: 20px;
  border: 2px solid;
  border-radius: 4px;
  background-color: brown;
  color: azure;
  padding: 4px;
}

.delete-button:hover{
  background-color: #ee0f0f;
}
.tweet-list{
  list-style: none;
  margin: 10px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
  padding: 8px 20px;
  align-items: center;
  
}
</style>