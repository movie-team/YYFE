<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMenu from './components/HeaderMenu.vue';
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/tving.svg" alt="">
        </RouterLink>
        <RouterLink :to="{ name: 'series' }">시리즈</RouterLink>
        <RouterLink :to="{ name: 'movie' }">영화</RouterLink>
        <RouterLink :to="{ name: 'recommend' }">추천</RouterLink>
      </nav>
      <HeaderMenu />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width:100%;
  background-color: rgba(100, 0, 0, 0.2);
  position:fixed;
  top:0;
  left:0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}

nav {
  display: flex;
  align-items: center;
}

nav a:not(:first-child) {
padding: 5px 10px;
color: #d9d9d9;
font-size: 12px;
text-decoration: none;
font-weight: 600;
}

nav a img {
  height:2rem;
}
</style>
