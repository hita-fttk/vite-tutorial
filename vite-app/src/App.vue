<template>
  <Memo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Payment from './components/Payment.vue';
import Tweet from './components/Tweet.vue';
import Memo from './components/Memo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Payment,
    Tweet,
    Memo
}
}
</script>
<style>
.label{
  font-size:400px;
}

</style>
