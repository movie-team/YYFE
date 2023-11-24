<template>
    <div class="hedaerMenu flexRow">
        <button class="movingBtn"
          @click="loginModal = true"
        >
            로그인
        </button>
        <p class="signup" @click="router.push({name:'signup'})">
          회원가입
        </p>
    </div>
    <Modal v-if="loginModal" @close-event="closeModal">
        <LoginForm />
    </Modal>
</template>

<script setup>
import { useMovieStore } from '../stores/movie';
import { useRouter } from 'vue-router';
import Modal from '@/components/Modal.vue'
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';

const store = useMovieStore()
const router = useRouter()

const loginModal = ref(false)

const closeModal = () => {
  loginModal.value = false
  }
</script>

<style scoped>
.hedaerMenu {
  display: flex;
  gap : 20px;
}

.hedaerMenu .signup {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}

.hedaerMenu .signup:hover {
  background-color: rgba(255, 255, 255, 0.5);
  
}

.profile {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
}

button {
  padding: 3px 10px;
  height: 30px;
  font-size: 1rem;
  margin: 16px 0;
}

button img {
    width: 100%;
  }
</style>