<template>
    <div id="sliderWrapper">
        <VueperSlides
          3d fixed-height="400px"
          bullets-outside
          autoplay
          :bullets="false"
          infinite
        >
          <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :title="slide.title"
              :content="slide.content"
              :image="slide.image"
              :style="'background-color: gray; border-radius:20px;'"
              >
          </vueper-slide>
        </VueperSlides>
    </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: '더 커스',
    content: '저주에 휩싸인 신혼부부 이야기. 엠마스톤의 코미디 드라마',
    image: 'https://image.tving.com/ntgs/operation/banner/2023/11/10/1699582145_1.jpg/dims/resize/F_webp,1920'
  },
  {
    title: '반짝이는 워터멜론',
    content: '수박처럼 청량한 네 청춘들의 이야기',
    image: 'https://image.tving.com/ntgs/operation/banner/2023/10/24/1698141991_1.jpg/dims/resize/F_webp,1920'
  }
]

</script>

<style scoped>
#sliderWrapper {
    width: 100%;
}
</style>

<!-- 슬라이더 적용 참고 -->
<!-- https://antoniandre.github.io/vueper-slides/ -->