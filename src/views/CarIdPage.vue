<template>
    <main class="container">
        <div class="cards mt-5">
            <div v-if="car" class="row border p-4 rounded">
                <h4 class="text-success">Make: {{ car.make }}</h4>
                <p class="text-light">Body: {{ car.body }}</p>
                <p class="text-light">Price: ${{ car.price }}</p>
                <p class="text-light">Year: {{ car.year }} year</p>
                <i class="text-primary">id: {{ car.id }}</i>
                <img :src="car.images" alt="images">
            </div>
            <div v-else>
                <h1>Sorry! We can't find that car</h1>
            </div>
        </div>
        <button @click="router.back()">Go home</button>
    </main>
</template>

<script setup>


import { ref, onBeforeMount } from "vue"
import { useRoute, useRouter } from "vue-router"

import cars from "../data.json"

const car = ref(null)
const router = useRouter()
const route = useRoute()
const { id } = route.params;


onBeforeMount(() => {
    car.value = cars.find(c => c.id === parseInt(id))
})


</script>



<style>

</style>