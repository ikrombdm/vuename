<template>
  <div class="container-fluid p-0 d-flex">
    <aside>
      <RouterLink class="link" active-class="active" to="/">Main</RouterLink>
      <RouterLink class="link" active-class="active" to="/slots">slots</RouterLink>
      <RouterLink class="link" active-class="active" to="/NotFound">404-not found</RouterLink>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>


<script setup>

import ProfileCard from "./components/ProfileCard.vue";
import ProfileCardSkeleton from "./components/ProfileCardSkeleton.vue";


</script>



<style>
aside
{
  position: fixed;
  height: 100vh;
  background: lightcoral;
  min-width: 250px;
}
.link
{
  padding: 10px;
  color: white;
  display: block;
  font-size: 18px;
  background: #ffffff18;
  transition: 0.5s ease;
}
.link:hover,
.active
{
  transition: 0.1s ease;
  background: #ffffff55;
}
.content
{
  margin-left: 250px;
  padding-left: 20px;
}
</style>