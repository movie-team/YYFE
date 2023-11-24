<template>
    <div class="nowplayingWrapper">
        <h1>추천 영화</h1>
        <div class="deadpoolimg">
            <img src="@/assets/deadpool2.png" alt="">
        </div>
        <div class="grid">
            <div class="card flexColumn"
                v-for="movie in store.recommendMovies"
                @click="router.push({ name: 'detail', params: { id: movie.id } })"
            >
                <div class="movieInfo flexRow">
                    <p class="movieTitle">{{ movie.title }}</p>
                </div>
                <div class="movieInfo flexColumn">
                    <img class="img" :src="moviePath(movie.poster)" :alt="movie.title">
                    <p class="movieScore">⭐{{ movie.average_rate.toFixed(1) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import axios from 'axios';
import { onMounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useMovieStore()
const movies = ref(null)


// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`

onMounted(()=> {
    if(!store.isLogin) {
        window.alert('로그인후 이용하세요!')
        router.push({name: 'login'})
    }

    // store.recommendMovies
    // .then(el => el.sort((a, b)=> b.vote_average - a.vote_average))
    // .then(el => {
    //     movies.value = el
    //     store.nowplayingMovies = el
    // })

  })

  onUpdated(()=> {
    console.log(store.userInfo)
    
//    axios({
//     method: "get",
//     // url: `${API}/accounts/user/`,
//     url:`/api/movies/${store.userInfo?.id}/recommend/`,
//     headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "skip",
//     },
//     })
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => console.log(err));


  })

</script>

<style scoped>
h1 {
  margin: 0 0 40px 0;
}
.nowplayingWrapper {
    padding: 10px 40px;
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
    transform:scale(1.1);
  transition: transform .5s;
}

.movieInfo{
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
.movieTitle{
    font-size: 1rem;
    width: 100%;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}

.deadpoolimg{
    width: 200px;
    margin:0 auto;
}

.deadpoolimg img {
    width: 100%;
}
</style>