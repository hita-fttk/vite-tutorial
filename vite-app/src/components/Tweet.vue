<script setup lang="ts">
const tweets = [{id:'0',description:'Hello world!'},{id:'1',description:'this is second tweet'}]
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input type="text">
      <button>post</button>
    </div>
    <div class="tweet-container">
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
h1{
  font-size: 80px;
}
.form-area{
  height: 40px;
  background-color:yellowgreen;
  padding: 40px;
  display: flex;
  align-items: center;
}
input{
  border: 1px solid;
  margin-top: 16px;
}
button{
  background-color: aquamarine;
  border: 1px solid;
  border-radius: 2px;
  margin-top: 16px;
  padding: 4px 16px;
  color: azure;
  font-weight: bold;
}
.tweet-list{
  list-style: none;
}
</style>