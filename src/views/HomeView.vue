<template>
    <div class="slider">
        <SliderPost />
        <SlideMenu />
    </div>
</template>

<script setup>
import SliderPost from '../components/SliderPost.vue';
import SlideMenu from '../components/SlideMenu.vue';

</script>

<style scoped>
.slider {
    padding: 40px;
}
</style>