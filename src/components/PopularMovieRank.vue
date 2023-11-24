<template>
  <h1>인기 순위 TOP 20</h1>
  <div class="grid">
    <div
      class="card flexColumn"
      v-for="movie in movies"
      v-show="movies.indexOf(movie) < 20"
      :key="movie.id"
      @click="router.push({ name: 'detail', params: { id: movie.id } })"
    >
      <div class="movieInfo flexRow">
        <p class="rankNum">{{ movies.indexOf(movie) + 1 }}</p>
        <p class="movieTitle">{{ movie.title }}</p>
      </div>
      <div class="movieInfo flexColumn">
        <img class="img" :src="moviePath(movie.poster)" :alt="movie.title" />
        <p class="movieScore">⭐{{ movie.average_rate.toFixed(1) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMovieStore } from "../stores/movie";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useMovieStore();
const movies = ref([]);

// 백엔드에서 받은 영화 배열
onMounted(() => {
  store
    .getMovies("get_popular_movies")
    .then((el) => el.sort((a, b) => b.average_rate - a.average_rate))
    .then((el) => {
      movies.value = el;
      store.popularMovies = el;
    });
});

// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
</script>

<style scoped>
h1 {
  margin: 40px 0;
}
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

.card:hover {
  transform: scale(1.2);
  transition: transform 0.5s;
}

.movieInfo {
  width: 100%;
  margin: 0;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
}

.rankNum {
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  font-style: oblique;
}

.movieInfo > img {
  width: 100%;
  /* height: calc(100% - 60px); */
  border-radius: 10px;
  display: block;
  /* max-height: 250px; */
}

.movieInfo > p {
  margin: 0;
  text-align: center;
}
.movieTitle {
  font-size: 1rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
