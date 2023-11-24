<template>
    <div>
        <div class="scorebox">
            <label for="score">평점 선택 </label>
            <select name="scores" id="score" v-model="rating">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            {{ rating }}
        </div>
        <textarea id="writeReview" cols="30" rows="10"
            placeholder="리뷰를 작성해 주세요"
            v-model="content"
        >
        </textarea>
        <div class="btn" @click="$emit('closeEvent')">
            <input type="submit" value="리뷰 등록!" class="movingBtn"
            @click="reviewSubmit">
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const rating = ref(null)
const content = ref(null)

const props = defineProps({
    movieid: Number
})

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

const reviewSubmit = () => {
    const csrfToken = getCSRFToken();
    axios({
        method: "post",
        url: `/api/movies/${props.movieid}/`,
        data: {
            content, rating
        },
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
          "X-CSRFToken": csrfToken,  // CSRF 토큰을 헤더에 추가
        },
      })
        .then((res) => {
          console.log('얍')
          console.log(res.data);
            window.alert('리뷰가 등록되었습니다 !')
        })
        .catch((err) => {
          console.log(err);
        });
    
}

</script>

<style scoped>

.scorebox label {
    margin-right: 20px;
}

#writeReview {
    width: 50vw;
    min-width: 200px;
    max-width: 600px;
    margin: 20px 0;
}

.btn {
    width:100%;
}

.btn input {
    width:100%;
    font-size: 20px;
}

</style>