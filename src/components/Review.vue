<template>
    
    <div class="reviewTitle flexRow">
      <h2>리뷰 ({{ movie?.review_count }})</h2>
      <button class="writeBtn movingBtn">나도 작성하기</button>
    </div>
    <div class="reviewWrapper" v-for="review in reviewList">
        <div class="flexRow">
        <!-- <div>{{ $route.params.id }}번 영화</div>
        <div>{{ movieId }}번 영화</div> -->
        <div class="left flexColumn">
            <div class="profileImg">
                <img :src="moviePath(movie?.poster)" :alt="movie?.title" />
            </div>
            <div>{{review?.user}} </div>
        </div>
        <div class="right">
            <div>
                평점 {{ '⭐'.repeat(review?.rating / 2) }} ({{ review?.rating }} 점)
            </div>
            <div class="content">
            {{ review?.content }}
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
  const reviewList = ref([])
  
  // 포스터 이미지 가져오기
  const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  
  onMounted(() => {

    store
      .getMovies(`${movieId.value}`)
      .then((el) => {
        movie.value = el;
        // reviewList.value = el.review.map((reviewId) => {
        //     return store.getMovies(`${movieId.value}/review/${reviewId}`)
        // })
        el.review.forEach((reviewId) => {
          store.getMovies(`${movieId.value}/review/${reviewId}`).then(el => reviewList.value.push(el))
          // console.log(reviewList.value)
        })})
  });
  </script>
  
  <style scoped>
  .reviewWrapper {
    color: white;
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: 10px auto;
    border: 1px solid white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
  }
  
  .left {
    min-width: 60px;
    gap: 10px;
  }
  
  .right {
    margin-left: 30px;
    text-align: left;
  }
  .profileImg {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 5px;
  }
  
  .profileImg img {
    width: 100%;
  }
  
  .content {
    word-break: keep-all;
    line-height: 1.8rem;
    margin-top: 10px;
  }

  .reviewTitle {
    width: 100%;
    max-width: 1000px;
    margin: 40px auto 20px auto;
    justify-content: space-between;
    }

    .writeBtn {
    color: white;
    margin-right: 20px;
    
}
  </style>
  