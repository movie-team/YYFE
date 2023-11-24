<template>
  <div class="wrapper">
    <MovieDetail/>
    <Review/>
  </div>
</template>

<script setup>
import MovieDetail from '@/components/MovieDetail.vue'
import Review from '@/components/Review.vue'
</script>

<style scoped>
.wrapper {
  margin: 40px;
}
/* .reviewTitle {
  margin: 40px 0 20px 20px;
  justify-content: space-between;
}

.writeBtn {
  color: white;
  margin-right: 20px;
  
} */
</style>
