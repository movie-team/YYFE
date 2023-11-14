<template>
    <div class="slider">
        <SliderPost />
        <SlideMenu />
        <Rank />
    </div>
</template>

<script setup>
import SliderPost from '../components/SliderPost.vue';
import SlideMenu from '../components/SlideMenu.vue';
import Rank from '../components/Rank.vue';


</script>

<style scoped>
.slider {
    padding: 40px;
}
</style>