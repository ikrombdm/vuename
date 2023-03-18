

<template>
  <main class="container">
    <h1 class="mt-5">Our cars</h1>
    Filter: <br>
    By Make
    <select class="cars_sel" v-model="make" @change="HandleChange">
      <option value="All">All</option>
      <option v-for="cars_ in cars_s" :key="cars_.id">{{ cars_.make }}</option>
    </select>

    <hr>
    <div class="cards mt-5">
      <div class="row gap-5">
        <div v-for="car in cars" :key="car.id"
        @click="router.push(`/car/${car.id}`)"
          class="col-2 rounded border p-4 click_id_car">

          <h4 class="text-success">{{ car.make }}</h4>
          <p class="text-light">{{ car.body }}</p>
          <p class="text-light">$ {{ car.price }}</p>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import CarsData from "../data.json"
import { ref, watch, onMounted } from "vue";

import { useRoute, useRouter, RouterLink } from "vue-router";

const router = useRouter()
const route = useRoute()

const cars = ref(CarsData)  
const cars_s = ref(CarsData)

const make = ref("")

const HandleChange = ()=>{
  router.push({query: {make:make.value}})
}

onMounted(()=>{
  make.value = route.query.make
})

watch(make, ()=>{
  if(make.value){
    if(make.value == "All") cars.value = CarsData
    else{
      cars.value = CarsData.filter(c => c.make === make.value)
    }
  }
})
</script>






<style scoped>
.click_id_car {
  cursor: pointer;
}
</style>
