<template>
    <div id="sliderWrapper">
        <VueperSlides
          bullets-outside
          autoplay
          :bullets="false"
          infinite
        >
          <!-- <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :content="slide.content"
            :image="slide.image"
            :style="'background-color: gray; border-radius:20px;'"
            > -->
          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :video="slide.video"
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
    title: '테일러 스위프트 : 디 에라스 투어 ',
    content: '"이 문화적 현상이 대형 스크린에서 계속됩니다! 역사에 남을 숨 막히는 장면을 영화처럼 감상하며 일생일대의 콘서트 영화 체험에 푹 빠져보세요',
    image: 'https://cdn.prod.mktg.evvnt.com/uploads/event_image/2001737/event_image/hero_maxresdefault.webp',
    video: {
      url: "https://www.youtube.com/embed/LVxVqUoANDI?rel=0&vq=hd1080&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1&autoplay=1&mute=1",
      props: {
        allow: 'autoplay'
        // allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      }
    }
  },
  {
    title: '플라워 킬링 문',
    content: '1920년대 오클라호마주 오세이지 부족 땅에서 석유가 발견된 후, 부족 사람들이 한 명씩 죽어 나가자 FBI가 미스터리를 풀기 위해 나선다.',
    image: 'https://i.ytimg.com/vi/fXSHwEXh32g/maxresdefault.jpg',
    video: {
      url: "https://www.youtube.com/embed/nOUuUwYzdOA?rel=0&vq=hd1080&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1&autoplay=1&mute=1",
      props: {
        allow:'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      }
    }
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