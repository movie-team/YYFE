import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useMovieStore = defineStore('movie', () => {

  const router = useRouter()
  const loginModal = ref(false)
  const API_URL = 'https://c82f-175-209-62-47.ngrok-free.app'
  const accessToken = ref(null)
  // accesstoken 는 분단위
  // refreshtoken 은 일단위

  const signup = (payload) => {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: payload
    })
      .then(res => {
        console.log(res)
        window.alert('회원가입 성공 !')
        router.push({name:'login'})
      })
      .catch(err => {
        console.log(err)
      })
  }

  const login = (payload) => {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: payload
    })
      .then(res => {
        console.log(res)
        window.alert('로그인 성공!')
        router.push({name: 'home'})
        accessToken.value = res.data.key
      })
      .catch(err => {
        console.log(err)
        console.log(payload)
      })
  }

  return { signup, login, loginModal }
})
