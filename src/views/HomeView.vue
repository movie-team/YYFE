<template>
    <div class="slider">
        <SliderPost />
        <SlideMenu />
        <NowPlayingRank />
        <PopularMovieRank />
    </div>
</template>

<script setup>
import SliderPost from '@/components/SliderPost.vue';
import SlideMenu from '@/components/SlideMenu.vue';
import NowPlayingRank from '@/components/NowPlayingRank.vue';
import { onMounted, onUpdated } from 'vue';
import { useMovieStore } from '@/stores/movie';
import PopularMovieRank from '@/components/PopularMovieRank.vue';


const store = useMovieStore()
// onMounted(()=> {
//     console.log(`로그인 상태 : ${store.isLogin}, 토큰 : ${store.accessToken}`)
// })

// onUpdated(() => {
//     console.log(`로그인 상태 : ${store.isLogin}, 토큰 : ${store.accessToken}`)
// })


</script>

<style scoped>
.slider {
    padding: 40px;
}
</style>