<template>
    <div class="flexColumn">
        <form id="loginForm">
            <div>
                <label for="id">
                    <input type="text" id="id" placeholder="아이디">
                </label>
            </div>
            <div>
                <label for="password">
                    <input type="text" id="password" placeholder="비빌번호">
                </label>
            </div>
            <button class="movingBtn">로그인하기</button>
        </form>
        <div>아직 계정이 없으신가요? <span>회원가입하기</span></div>
    </div>
</template>

<script setup>

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