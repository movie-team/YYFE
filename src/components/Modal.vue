<template>
    <!-- <div class="modalBg" @click.prevent="store.loginModal = false"> -->
    <div class="modalBg">
        <div class="modalWrapper">
            <div class="closeBtn"
                @click="store.loginModal = false"
            >❌</div>
            <slot></slot>
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
    z-index: 9999999;
}

.closeBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

</style>