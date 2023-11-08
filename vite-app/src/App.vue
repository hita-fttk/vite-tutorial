<template>
  <TestDisplay />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Payment from './components/Payment.vue';
import Tweet from './components/Tweet.vue';
import Memo from './components/Memo.vue';
import Persons from './components/Persons.vue';
import Form from './components/Form.vue';
import testCoomponent from './components/testComponent.vue';
import TestComponent from './components/testComponent.vue';
import TestChild from './components/TestChild.vue';
import TestDisplay from './components/TestDisplay.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Payment,
    Tweet,
    Memo,
    Persons,
    Form,
    TestComponent,
    TestChild,
    TestDisplay
}
}
</script>
<style>
.label{
  font-size:400px;
}

</style>
