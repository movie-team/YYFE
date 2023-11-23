<template>
    <div class="detailWrapper ">
        <div class="like flexColumn">
          <p class="heart">💗</p>
          <p>{{ movie?.like_users.length }}</p>
        </div>
        <h1>{{ movie?.title }}</h1>
        <div class="flexRow">
        <div class="left">
            <div class="posterImg">
            <img :src="moviePath(movie?.poster)" :alt="movie?.title" />
            </div>
        </div>
        <div class="right">
            <div class="genre">
              장르
              <span v-for="genre in genresKo" :key="genre">
                  {{ genre }}
              </span>
            </div>
            <div>
            개봉일 {{ movie?.release_date }}
            </div>
            <div>
            평점 {{ '⭐'.repeat(movie?.average_rate / 2) }} ({{ movie?.average_rate }} 점)
            </div>
            <div class="overview">
            {{ movie?.overview }}
            </div>
        </div>
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
  const genresKo = ref([]);
  const movieLike = ref(movie?.like_users?.indexOf(store.userInfo?.pk))

  const getGenre = (genres) => {
    const arr = genres.map((genre) => {
      return store.movieGenres[genre];
    });
    genresKo.value = arr;
  };
  
  onUpdated(() => {
    if (movie.value) {
      console.log(movie.value);
    }
      
    console.log(store.userInfo)
  });
  
  // 포스터 이미지 가져오기
  const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  
  onMounted(() => {
    store
      .getMovies(`${movieId.value}`)
      .then((el) => {
        movie.value = el;
        getGenre(el.genres);
      })
  });
  </script>
  
  <style scoped>
  .detailWrapper {
    color: white;
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    position: relative;
  }

  .like {
    position: absolute;
    top:100px;
    right: 50px;
  }
  .like p{
    margin: 0;
  }

  .heart {
    cursor: pointer;
    font-size:20px;
  }
  
  .left {
    width:30%;
  }
  
  .right {
    width: 70%;
    margin-left: 30px;
  }
  .posterImg {
    width: 100%;
  }
  
  .posterImg img {
    width: 100%;
  }
  .genre span{
    margin-left: 5px;
  }
  .overview {
    word-break: keep-all;
    line-height: 1.8rem;
    margin-top: 40px;
  }
  </style>
  