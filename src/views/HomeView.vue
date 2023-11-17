<template>
    <div class="slider">
        <SliderPost />
        <SlideMenu />
        <Rank />
        <NowPalyingMovie />
    </div>
</template>

<script setup>
import SliderPost from '../components/SliderPost.vue';
import SlideMenu from '../components/SlideMenu.vue';
import Rank from '../components/Rank.vue';
import { onMounted, onUpdated } from 'vue';
import { useMovieStore } from '../stores/movie';
import NowPalyingMovie from '../components/NowPalyingMovie.vue';

const store = useMovieStore()
onMounted(()=> {
    console.log(`로그인 상태 : ${store.isLogin}, 토큰 : ${store.accessToken}`)
})

onUpdated(() => {
    console.log(`로그인 상태 : ${store.isLogin}, 토큰 : ${store.accessToken}`)
})

</script>

<style scoped>
.slider {
    padding: 40px;
}
</style>