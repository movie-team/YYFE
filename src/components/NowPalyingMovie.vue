<template>
    <div class="flexRow">
        <p></p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movie';

const store = useMovieStore()
let nowPlayingList;

onMounted(()=> {
    nowPlayingList = store.getMovies('get_now_playing')
})
</script>

<style scoped>

</style>