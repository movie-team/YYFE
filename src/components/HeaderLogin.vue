<template>
    <div class="hedaerMenu flexRow">
        <!-- <p @click="store.logout">로그아웃</p> -->
        <button>
            <img src="@/assets/icons/search1.png">
        </button>
        <p class="nickname">{{ store.userInfo?.username }}</p>
        <p class="profile">
          <div class="profileImg" @click="profileMenuClick">
            <img src="@/assets/deadpool_profile.jpg" alt="프로필">
          </div>
          <ul class="profileMenu" v-show="profileMenu">
            <li>내정보</li>
            <li
              @click="store.logout"
              class="logout">
                로그아웃
            </li>
          </ul>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMovieStore } from '@/stores/movie';

const store = useMovieStore()

const profileMenu = ref(false)

const profileMenuClick = () => {
  console.log( '클릭!' )
  profileMenu.value = !profileMenu.value
  console.log(profileMenu.value)
}
console.log(store.userInfo)

</script>

<style scoped>
.hedaerMenu {
  display: flex;
  gap : 20px;
}

.profile {
  position: relative;
}

.profileImg {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}
.profile img {
  width: 100%;
}

.profileMenu {
  position: absolute;
  padding: 10px 20px;
  top: 30px;
  right:0;
  background-color: gray;
  list-style:none;
  width: 100px;
  border-radius: 10px;
}

.profileMenu li {
  width:100%;
  cursor: pointer;
  margin: 10px 0;
}

button {
  background-color: transparent;
  border: none;
  width: 40px;

}

button img {
  width: 100%;
}

.logout {
  font-weight: bold;
  color:black;
}
.logout:hover {
  color: #3b0d12;
}
</style>