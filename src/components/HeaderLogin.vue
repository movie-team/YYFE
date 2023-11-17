<template>
    <div class="hedaerMenu flexRow">
        <p @click="store.logout">로그아웃</p>
        <button>
            <img src="@/assets/icons/search1.png">
        </button>
        <p class="nickname">닉네임 띄울거야</p>
        <p class="profile" @click="profileMenuClick">
          <ul class="profileMenu" v-show="profileMenu">
            <li @click="store.logout">로그아웃</li>
            <li>야ㅁ</li>
          </ul>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../stores/movie';

const store = useMovieStore()

const profileMenu = ref(false)

const profileMenuClick = () => {
  console.log( '클릭!' )
  profileMenu.value = !profileMenu.vlaue
  console.log(profileMenu.value)
}

</script>

<style scoped>
.hedaerMenu {
  display: flex;
  gap : 20px;
}

.profile {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

.profileMenu {
  position: absolute;
  padding: 20px;
  top: 30px;
  right:0;
  background-color: gray;
  list-style:none;
  width: 100%;
}

.profileMenu li {
  width:100%;
  cursor: pointer;
}

button {
  background-color: transparent;
  border: none;
  width: 40px;

}

button img {
    width: 100%;
  }
</style>