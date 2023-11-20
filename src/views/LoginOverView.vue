<template>
    <div style="position: relative;">
        <LoginIntro/>
        <!-- <LoginForm/> -->

        <Modal v-if="store.loginModal">
            <LoginForm />
        </Modal>
    </div>
</template>

<script setup>
import LoginIntro from '@/components/LoginIntro.vue'
import LoginForm from '@/components/LoginForm.vue';
import Modal from '@/components/Modal.vue';
import { useMovieStore } from '@/stores/movie';

const store = useMovieStore()


</script>

<style scoped>

</style>