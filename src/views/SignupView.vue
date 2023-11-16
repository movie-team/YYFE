<template>
    <div class="flexColumn">
        <h1>회원가입</h1>
        <form id="signupForm" @submit.prevent="signup">
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
            <div>
                <label for="pwdConfirm">
                    <input type="password" id="pwdConfirm" placeholder="비빌번호 확인" v-model="pwdConfirm">
                </label>
            </div>
            <button class="movingBtn">회원가입 하기</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../stores/movie';

const store = useMovieStore()

const userId = ref(null)
const pwd = ref(null)
const pwdConfirm = ref(null)

const signup = () => {
    const payload = {
        username : userId.value,
        password1 : pwd.value,
        password2 : pwdConfirm.value
    }
    console.log(payload)
    store.signup(payload)
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

.movingBtn {
    width:100%;
    font-size: 1.1rem;
    padding: 10px 0;
}
</style>