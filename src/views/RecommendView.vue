<template>
    <div>
        <h1>영화 알고리즘 추천</h1>
    </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import { onMounted } from 'vue';

const store = useMovieStore()

onMounted(() =>{
    console.log('시작')
    store.recommendMovies().finally(
        console.log('끝')
    )
})


</script>

<style scoped>

</style>