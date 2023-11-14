<template>
    <div class="sliderWrapper">
        <vueper-slides
            autoplay
            :visible-slides="4"
            slide-multiple
            :gap="5"
            fixed-height="80px"
            :bullets="false"
        >
            <vueper-slide v-for="slide in slides"
                :key="slide.id"
                :title="slide.title"
                :style="'background-color: gray; border-radius:10px;'"
            />
            <template #pause>
                <i class="icon pause_circle_outline"></i>
            </template>
        </vueper-slides>
    </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: '키즈',
  },
  {
    title: 'BUNDESLIGA',
  },
  {
    title: 'ASIA',
  },
  {
    title: 'UFC',
  },
  {
    title: 'KBO',
  },
  {
    title: '테니스',
  },
]


</script>

<style scoped>

.sliderItem {
    width: 80%;
}
.sliderItem img {
    width: 100%;
}
</style>