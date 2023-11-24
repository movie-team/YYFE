<template>
  <div class="detailWrapper">
    <div class="like flexColumn">
      <p class="heart" v-if="movieLike" @click="clickLike">💗</p>
      <p class="heart" v-else @click="clickLike">♡</p>
      <p>{{ movieLikeCount }}</p>
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
        <div>개봉일 {{ movie?.release_date }}</div>
        <div>
          평점 {{ "⭐".repeat(movie?.average_rate / 2) }} ({{
            movie?.average_rate
          }}
          점)
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
import axios from "axios";

const store = useMovieStore();
const route = useRoute();
const movieId = ref(route.params.id);
const movie = ref(null);
const genresKo = ref([]);
const movieLikeCount = ref(0);
const movieLike = ref(false);
// movie?.like_users?.indexOf(store.userInfo?.pk)

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
});

const clickLike = () => {
  console.log("난 이영화가 좋아요 !");

  const getCSRFToken = () => {
    const name = "csrftoken=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }

    return null;
  };
  const csrfToken = getCSRFToken();

  // 좋아요 <-> 좋아요 취소
  axios({
    method: "post",
    url: `/api/movies/${movieId.value}/likes/`,
    headers: {
      Authorization: `Token ${store.accessToken}`,
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "skip",
      "X-CSRFToken": csrfToken,
    },
  })
    .then((res) => {
      console.log(res);
      movieLike.value = res.data.is_like;
      movieLikeCount.value = movie.value.review_count + res.data.like_count;
    })
    .catch((err) => console.log(err));
};

// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

onMounted(() => {
  store.getMovies(`${movieId.value}`).then((el) => {
    movie.value = el;
    getGenre(el.genres);
    movieLikeCount.value = el.like_users.length + el.review_count;
    console.log(`냐 ${el.like_users?.indexOf(store.userInfo?.pk)}`);
    movieLike.value =
      el.like_users?.indexOf(store.userInfo?.pk) >= 0 ? true : false;
  });
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
  top: 100px;
  right: 50px;
}
.like p {
  margin: 0;
}

.heart {
  cursor: pointer;
  font-size: 20px;
}

.left {
  width: 30%;
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
.genre span {
  margin-left: 5px;
}
.overview {
  word-break: keep-all;
  line-height: 1.8rem;
  margin-top: 40px;
}
</style>
