<template>
    <!-- <div class="modalBg" @click.prevent="store.loginModal = false"> -->
    <div class="modalBg">
        <div class="modalWrapper">
            <div class="closeBtn"
                @click="$emit('closeEvent')"
            >❌</div>
            <slot></slot>
            <div class="deadpoolImg">
            <img src="@/assets/deadpool1.png" alt="">
        </div>
        </div>

    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/movie';

const store = useMovieStore()

</script>



<style scoped>

.modalBg{
    position: fixed;
    top: 0;
    left:0;
    width: 97vw;
    height: calc(97vh - 72px);
}
.modalWrapper{
    background-color: black;
    box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 50px;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.deadpoolImg{
    width: 100%;
    position: absolute;
    bottom: 98%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
}

img{
    width:100%;
}

</style>