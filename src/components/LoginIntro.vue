<template>
    <div id="loginWrapper">
        <div class="background">
            <div class="blackbg">
                <h3 class="introText">
                    무빙에서 <br>
                    영화 검색부터 추천까지!<br><br>
                    관람객들의 리얼한 리뷰도 만나보세요.
                </h3>
                <button class="movingBtn loginBtn">무빙 로그인</button>
                <div class="wantSignup">
                    <p>계정이 없으신가요?</p>
                    <button class="movingBtn">무빙 가입하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#loginWrapper {
    width: 100%;
}
.background {
    width: 100%;
    height: 60vh;
    background: url(https://image.tving.com/ntgs/operation/onboard/2023/10/25/1698197734_1.png/dims/resize/F_webp,2048);
    /* object-fit: scale-down; */
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}
.blackbg {
    width: 100%;
    height: 60vh;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7967667436489607) 24%, rgba(0,0,0,0.6905311778290992) 38%, rgba(0,0,0,0.7644341801385681) 59%, rgba(0,0,0,0.6766743648960739) 71%, rgba(0,0,0,0.4503464203233256) 98%);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.introText {
    text-align: center;
}
.loginBtn {
    padding: 10px 80px;
    font-size:1.1rem;
    margin-top: 20px;
}

.wantSignup{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wantSignup > p {
    margin-bottom: 10px;
}

</style>