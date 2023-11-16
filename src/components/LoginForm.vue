<template>
    <div class="flexColumn">
        <form id="loginForm" @submit.prevent="login">
            <div>
                <label for="id">
                    <input type="text" id="id" placeholder="아이디" v-model="userId">
                </label>
            </div>
            <div>
                <label for="pwd">
                    <input type="password" id="pwd" placeholder="비빌번호" v-model="pwd">
                </label>
            </div>
            <button class="movingBtn">로그인하기</button>
        </form>
        <div>아직 계정이 없으신가요?
            <strong
                @click="router.push({name:'signup'})"
                style="padding: 0 20px; cursor: pointer;">
                회원가입하기
            </strong>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '@/stores/movie'
import { useRouter } from 'vue-router';

const store = useMovieStore()
const router = useRouter()

const userId = ref(null)
const pwd = ref(null)

const login = () => {
    const payload = {
        // userId: userId.value,
        // pwd: pwd.value,
        username: userId.value,
        password: pwd.value,
    }
    store.login(payload)
}

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

#loginForm input{
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
    width:100%;
    font-size: 1.1rem;
    padding: 10px 0;
}

</style>