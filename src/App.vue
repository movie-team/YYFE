<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'series' }">시리즈</RouterLink>
        <RouterLink :to="{ name: 'movie' }">영화</RouterLink>
        <RouterLink :to="{ name: 'recommend' }">추천</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width:100%;
}
</style>
