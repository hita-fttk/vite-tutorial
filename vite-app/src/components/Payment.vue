<script setup lang="ts">

import { ref,reactive,computed } from 'vue';
// const itemName1 = ref<String>('Desk')
const itemName2:string = 'Bike'

const item1 = reactive({
    name:'desk',
    price: 40000
})

// const price1:number = 40000
const price2:number = 20000

const url1 = 'https://www.amazon.co.jp/%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AD%E3%83%83%E3%82%BA-%E5%AD%90%E3%81%A9%E3%82%82%E3%81%A8%E5%AD%A6%E3%81%B6-JavaScript%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%85%A5%E9%96%80-%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AD%E3%83%83%E3%82%BA%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E5%A4%A7%E6%BE%A4%E6%96%87%E5%AD%9D-ebook/dp/B07HHR8J4B/?_encoding=UTF8&pd_rd_w=5C8ok&content-id=amzn1.sym.ce48853f-2e5a-4e4b-8520-e7f39cc68f2d&pf_rd_p=ce48853f-2e5a-4e4b-8520-e7f39cc68f2d&pf_rd_r=ZKJTBAPQGA8GYV9PZDMC&pd_rd_wg=cSRue&pd_rd_r=7bb86e7d-c526-468b-942c-923891dd1859&ref_=pd_gw_reads_dynr'

const buy = (itemName) =>{
    alert('Are you sure to buy' + itemName + '?');
}

const input = (event:any) =>{
    console.log(event.target.value);
    item1.name = event.target.value;
}   
const inputPrice = (event:any) =>{
    console.log(event.target.value);
    item1.price = event.target.value;
}

const clear = ()=>{
    item1.name = ''
    item1.price = 0
}

const priceLabel = computed(()=>{
    if(item1.price >50000){
    //    return item1.price > 50000 ? 'too expensive...': item1.price + 'yen' 
        return 'too expensive...'
    } else{
        return item1.price + 'yen'
    }
})

</script>

<template>
    <div class="container">
        <h1>Payment</h1>
        <input type="text" v-model="item1.name">
        <input type="text" v-model="item1.price">
        <!-- <input class="text-input" type="text" v-on:input="input" v-bind:value="item1.name"> -->
        <!-- <input class="text-input" type="text" v-on:input="inputPrice" v-bind:value="item1.price"> -->
        <button v-on:click="clear">Clear</button>
        <div class="payment">
            <label>{{ item1.name }}</label>
            <label>{{ priceLabel }} yen</label>
            <a v-bind:href="url1">bought at...</a>
            <button v-on:click="buy(item1.name)">BUY</button>
        </div>
        <div class="payment">
            <label>{{ itemName2 }}</label>
            <label>{{ price2 }} yen</label>
        </div>
    </div>

</template>

<style scoped>
    h1{
        font-size: 60px;
    }
    label{
        display: flex;
        flex-direction: column;
        font-size: 20px;
        justify-self: auto;
        font-weight: bold;
        height: 60px;
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .payment{
        display: flex;
        justify-content: space-between;
        height:80px;
        width: 400px;
        background-color: aliceblue;
        align-items: center;
        margin-bottom: 12px;
        margin-top: 20px;

    }
    input{
        outline: 1px solid ;
        border-radius: 2px;
        margin-bottom: 8px;
    }
    button{
        outline: 1px solid;
        background-color: beige;
        border-radius: 2px;
        padding: 1px;
    }


</style>