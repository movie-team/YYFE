<template>
    <div>
        <h3>오늘의 랭킹 TOP 10</h3>
        <VueperSlides
            :visible-slides="4"
            slide-multiple
            :gap="5"
            :bullets="false"
        >
            <VueperSlide v-for="slide in slides"
                :key="slide.id"
            >
                <template v-slot:content>
                    <div class="slide">
                        <p class="slideTitle">{{ slide.title }}</p>
                        <p>
                            <img class="img" :src="slide.image" :alt="slide.title">
                        </p>
                    </div>
                </template>
            </VueperSlide>
        </VueperSlides>
    </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: '1',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1529/P001746797.jpg/dims/resize/F_webp,400'
  },
  {
    title: '2',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
  {
    title: '3',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1529/P001746797.jpg/dims/resize/F_webp,400'
  },
  {
    title: '4',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
  {
    title: '5',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1529/P001746797.jpg/dims/resize/F_webp,400'
  },
  {
    title: '6',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
  {
    title: '7',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
  {
    title: '8',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1529/P001746797.jpg/dims/resize/F_webp,400'
  },
  {
    title: '9',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
  {
    title: '10',
    image: 'https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231029/1340/P001747173.jpg/dims/resize/F_webp,400'
  },
]
</script>

<style scoped>
    .slide {
        width: 100%;
        display: flex;
        align-items: end;
        gap: 10px;
    }
    .img {
        width: 100%;
    }
    .slideTitle{
        font-size: 60px;
        margin:0;
    }
</style>