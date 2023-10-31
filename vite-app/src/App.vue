<template>
  <Tweet />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Payment from './components/Payment.vue';
import Tweet from './components/Tweet.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Payment,
    Tweet
}
}
</script>
<style>
.label{
  font-size:400px;
}

</style>
