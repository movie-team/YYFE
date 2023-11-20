<template>
  
    <h3>인기 순위 TOP 20</h3>
    <div class="grid">
        <div class="card flexColumn" v-for="movie in movies" >
            <p class="rankNum">{{ movies.indexOf(movie) + 1 }}</p>
            <p class="movieInfo flexColumn">
                <img class="img" :src="moviePath(movie.poster)" :alt="movie.title">
                <p class="movieTitle">{{ movie.title }}</p>
                <p class="movieScore">⭐{{ movie.average_rate.toFixed(1) }}</p>
            </p>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useMovieStore } from '../stores/movie';

const store = useMovieStore()
const movies = ref([])
// 포스터 이미지 가져오기

onMounted(()=> {
  console.log('OnMounted')
  store.getMovies('get_popular_movies')
   .then(el => movies.value = el)
  }
)
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`

</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 40px;
}
.card {
    border: 1px solid gray;
    border-radius: 20px;
    justify-content: space-between;
    cursor: pointer;
}

.card p {
    text-align: center;
}

.movieInfo{
    width: 100%;
    margin: 0;
    justify-content: space-between;
}

.rankNum {
    margin: 5px;
}

.movieInfo img {
    width: 100%;
}

.movieTitle {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movieScore {
    margin: 10px 0;
}
</style>