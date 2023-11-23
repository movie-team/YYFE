<template>
  <div class="detailWrapper">
    <div>{{ $route.params.id }}번 영화</div>
    <div>{{ movieId }}번 영화</div>
    <h1>{{ movie?.title }}</h1>
    <div>
      <img class="img" :src="moviePath(movie?.poster)" :alt="movie?.title" />
    </div>
    <div>
      장르 <span v-for="genre in genresKo" :key="genre">{{ genre }} </span>
    </div>
    <div>개봉일 {{ movie?.release_date }}</div>
    <div class="overview">
      {{ movie?.overview }}
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movie.js";
import { onMounted, onUpdated, ref } from "vue";

const store = useMovieStore();

const route = useRoute();
const movieId = ref(route.params.id);
const movie = ref(null);
// console.log(movieId.value);
console.log(movie.value);
const genresKo = ref([]);

const getGenre = (genres) => {
  const arr = genres.map((genre) => {
    return store.movieGenres[genre];
  });
  genresKo.value = arr;
};

onUpdated(() => {
  console.log(genresKo.value);
});

// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

onMounted(() => {
  store
    .getMovies(`${movieId.value}`)
    .then((el) => {
      // console.log(el);
      movie.value = el;
    })
    .then((el) => getGenre(movie.value.genres));
});
</script>

<style scoped>
.detailWrapper {
  padding: 40px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.overview {
  width: 70%;
  margin: 0 auto;
  word-break: keep-all;
  line-height: 1.8rem;
}
</style>
