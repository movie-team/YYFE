<template>
    <div style="position: relative;">
        <LoginIntro/>
        <div class="img">
            <img src="@/assets/deadpool3.png" alt="">
        </div>
    </div>
</template>

<script setup>
import LoginIntro from '@/components/LoginIntro.vue'

</script>

<style scoped>

.img {
    position:fixed;
    bottom:0;
    width:70%;
    left: 50%;
    transform: translateX(-50%)
}
.img img{
    width:100%;
}

</style>