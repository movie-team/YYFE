<template>
  <div class="flexColumn">
    <form id="loginForm" @submit.prevent="login">
      <div>
        <label for="username">
          <input
            type="text"
            id="username"
            placeholder="아이디"
            v-model="username"
          />
        </label>
      </div>
      <div>
        <label for="password">
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            v-model="password"
          />
        </label>
      </div>
      <button class="movingBtn">로그인하기</button>
    </form>
    <div>
      아직 계정이 없으신가요?
      <strong @click="signup" style="padding: 0 20px; cursor: pointer">
        회원가입하기
      </strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movie";
import { useRouter } from "vue-router";

const store = useMovieStore();
const router = useRouter();

const username = ref(null);
const password = ref(null);

const signup = () => {
  store.loginModal = false;
  router.push({ name: "signup" });
};

const login = () => {
  const payload = {
    // userId: userId.value,
    // pwd: pwd.value,
    username: username.value,
    password: password.value,
  };
  store.login(payload);
};
</script>

<style scoped>
#loginForm {
  width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
}

#loginForm > div {
  margin-bottom: 20px;
}

#loginForm input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: #333;
  color: white;
}

.movingBtn {
  width: 100%;
  font-size: 1.1rem;
  padding: 10px 0;
}
</style>
