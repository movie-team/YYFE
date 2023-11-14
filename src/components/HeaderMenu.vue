<template>
    <div class="hedaerMenu">
        <button>
            <img src="@/assets/icons/search1.png">
        </button>
        <p class="profile"></p>
    </div>
</template>

<script setup>

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