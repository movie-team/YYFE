<template>
    <div class="flexColumn">
        <h1>회원가입</h1>
        <div class="deadpoolImg">
            <img src="@/assets/deadpool3.png" alt="">
        </div>
        <form id="signupForm" @submit.prevent="signup">
            <div>
                <label for="username">
                    <input type="text" id="username" placeholder="아이디" v-model="username" required>
                </label>
            </div>
            <div>
                <label for="password1">
                    <input type="password" id="password1" placeholder="비빌번호" v-model="password1" required>
                </label>
            </div>
            <div>
                <label for="password2">
                    <input type="password" id="password2" placeholder="비빌번호 확인" v-model="password2" required>
                </label>
            </div>
            <div>
                <label for="nickname">
                    <input type="text" id="nickname" placeholder="닉네임" v-model="nickname" required>
                </label>
            </div>
            <div>
                <label for="email">
                    <input type="text" id="email" placeholder="email" v-model="email">
                </label>
            </div>
            <button class="movingBtn">회원가입 하기</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '@/stores/movie';
import { useRouter } from 'vue-router';

const store = useMovieStore()
const router = useRouter();

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)
const nickname = ref(null)
const email = ref(null)

const signup = () => {
    const payload = {
        username : username.value,
        password1 : password1.value,
        password2 : password2.value,
        nickname : nickname.value,
        email : email.value,
    }
    console.log(payload)
    store.signup(payload)
    window.alert('회원가입 성공!')
    router.push({name: 'home'})
}

</script>

<style scoped>
#signupForm {
    width: 400px;
    margin: 0 auto;
    margin-bottom: 30px;
}

#signupForm > div {
    margin-bottom: 20px;
}

#signupForm input{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    background: #333;
    color: white;
}

.deadpoolImg{
    width: 400px;
    height: 100px;
    overflow: hidden;
}
.deadpoolImg img {
    width: 100%;
    /* object-fit: cover; */
    object-position: center bottom;
}
.movingBtn {
    width:100%;
    font-size: 1.1rem;
    padding: 10px 0;
}
</style>