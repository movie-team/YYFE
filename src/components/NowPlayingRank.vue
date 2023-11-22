<template>
    <div>
        <h3>현재 상영작 TOP 20</h3>
        <VueperSlides
            :visible-slides="4"
            slide-multiple
            :gap="5"
            :bullets="false"
        >
            <VueperSlide v-for="movie in movies"
                :key="movie.id"
            >
                <template v-slot:content>
                    <div class="slide flexRow" >
                        <p class="rankNum">{{ movies.indexOf(movie) + 1 }}</p>
                        <p class="movieInfo flexColumn">
                            <img class="img" :src="moviePath(movie.poster_path)" :alt="movie.title">
                            <p class="movieTitle">{{ movie.title }}</p>
                            <p class="movieScore">⭐{{ movie.vote_average.toFixed(1) }}</p>
                            <p></p>
                        </p>
                    </div>
                </template>
            </VueperSlide>
        </VueperSlides>
    </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { useMovieStore } from '@/stores/movie'
import { ref, computed, onMounted, watch } from 'vue'

const store = useMovieStore()
const movies = ref([])

// 백엔드에서 받은 영화 배열
onMounted(()=> {
  store.getMovies('get_now_playing')
   .then(el => el.sort((a, b)=> b.vote_average - a.vote_average))
   .then(el => {
    movies.value = el
    store.nowplayingMovies = el
   })
  }
)

// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`


</script>

<style scoped>
    .slide {
        width: 100%;
        height: 100%;
        padding-left: 46px;
        box-sizing: border-box;
    }

    .rankNum {
      position: absolute;
      top: 0;
      left:0;
      
      margin: 0;
      font-size: 50px;
      font-weight: 900;
      font-style: oblique;
    }

    .movieInfo {
      width: 100%;
      height: 100%;
    }

    .movieInfo > img {
        width: 100%;
        /* height: calc(100% - 60px); */
        border-radius: 10px;
        display: block;
        /* max-height: 250px; */
    }

    .movieInfo > p {
      width: 100%;
      margin: 0;
      text-align: center;
    }
    .movieTitle{
        font-size: 1rem;
        width: 100%;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
</style>