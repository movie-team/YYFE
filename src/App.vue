<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLogin from '@/components/HeaderLogin.vue';
import HeaderLogout from '@/components/HeaderLogout.vue'
import Modal from '@/components/Modal.vue';
import LoginForm from '@/components/LoginForm.vue';
import { useMovieStore } from '@/stores/movie';

const store = useMovieStore()
</script>

<template>
  <header>
    <div class="header">
      <nav>
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/moving.svg" alt="">
        </RouterLink>
        <RouterLink :to="{ name: 'series' }">시리즈</RouterLink>
        <RouterLink :to="{ name: 'movie' }">영화</RouterLink>
        <RouterLink :to="{ name: 'recommend' }">추천</RouterLink>
      </nav>
      <HeaderLogin v-if="store.isLogin"/>
      <HeaderLogout v-else/>
      <!-- {{ store.isLogin ? <HeaderLogin /> : <HeaderLogin/> }} -->

    </div>
      <Modal v-if="store.loginModal">
        <LoginForm />
      </Modal>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  width:100%;
  background-color: rgba(0, 0, 0, 0.8);
  position:fixed;
  top:0;
  left:0;
  z-index: 9999;
  /* position: relative; */
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
font-size: 14px;
text-decoration: none;
font-weight: 600;
}


nav a img {
  height:1rem;
  padding-top: 6px;
  margin-right: 20px;
}
</style>
