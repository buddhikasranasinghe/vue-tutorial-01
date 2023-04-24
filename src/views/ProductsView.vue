<template>
    <div class="m-5">
        <h1 class="text-gray">Products Page</h1>
    </div>
    <div class="grid sm:grid-cols-3 md:grid-cols-4 m-4 p-4 gap-2 ">
        <div v-for="(item , index) in inventory" :key="index" class="bg-blue-100 rounded-md p-3 m-2 shadow-md border border-blue-500">
          <h1 class="text-gray-600 font-bold text-left text-xl">{{ item.name }}</h1>
          <h1 class="text-black">Available Quantity <span class="qtdiv">{{ item.quantity }}</span></h1>
          <div class="text-left">
            <button class="bg-yellow-300 p-2 m-2 rounded-md border border-yellow-600 shadow-md" @click="addcartitem(item.id)">Add To Cart</button>
          </div>
        </div>
    </div>
</template>

<script>
import data from '../books.json'
export default {
  name: 'ProductsView',
  props: ['addcartitem'],
  data () {
    return {
      inventory: data
    }
  }
}
</script>

<style scoped>
.mydiv{
    border-radius: 10px;
    background-color: rgb(255, 255, 203);
    padding: 20px;
    border: 1px solid rgb(200, 250, 1);
}
.qtdiv{
    border-radius: 5px;
    background-color: rgb(5, 44, 55);
    text-align: center;
    vertical-align: middle;
    color: aliceblue;
    padding: 10px;
}
</style>
