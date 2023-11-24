<template>
    
  <div class="reviewTitle flexRow">
    <h2>리뷰 ({{ movie?.review_count }})</h2>
    <button class="writeBtn movingBtn"
      @click="wrtieReview"
    >나도 작성하기</button>
  </div>
  <div class="reviewWrapper" v-for="review in reviewList">
      <div class="flexRow">
        <div class="left flexColumn">
            <div class="profileImg">
                <img :src="moviePath(movie?.poster)" :alt="movie?.title" />
            </div>
            <div>
              {{ review?.nickname }}
            </div>
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
  <Modal v-if="reviewModal" @close-event="closeModal">
    <CreateReview :movieid="movie.id" @close-event="closeModal" />
  </Modal>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movie.js";
import { onMounted, onUpdated, ref } from "vue";
import Modal from"@/components/Modal.vue";
import CreateReview from"@/components/CreateReview.vue";

const store = useMovieStore();
const route = useRoute();
const movieId = ref(route.params.id);
const movie = ref(null);
const reviewList = ref([])
const reviewModal = ref(false)

// 포스터 이미지 가져오기
const moviePath = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

const closeModal = () => {
  reviewModal.value = false
  getReviews()
}

const wrtieReview = () => {
  reviewModal.value = true
}

const getReviews = () => {

  const reviews = ref([])
  store
    .getMovies(`${movieId.value}`)
    .then((el) => {
      movie.value = el;
      // reviewList.value = el.review.map((reviewId) => {
      //     return store.getMovies(`${movieId.value}/review/${reviewId}`)
      // })
      el.review.forEach((reviewId) => {
        store.getMovies(`${movieId.value}/review/${reviewId}`).then(el => reviews.value.push(el))
        // console.log(reviewList.value)
      })
      reviewList.value = reviews.value
    })
}
onMounted(() => {
  getReviews()
});

onUpdated(() => {
  reviewList.value.forEach(review => {
    store.getUserInfo(review?.user).then(res => review['nickname'] = res)
  })

})
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

.flexRow{
  justify-content: start;
}

.left {
  min-width: 60px;
  gap: 10px;
}

.right {
  width:calc(100% -60px);
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
