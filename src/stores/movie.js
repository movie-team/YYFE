import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useMovieStore = defineStore('movie', () => {

  const router = useRouter()
  const loginModal = ref(false)
  const accessToken = ref(null)
  const nickname = ref(null)
  // accesstoken 는 분단위
  // refreshtoken 은 일단위
  
  const API_URL = 'https://6016-175-209-62-47.ngrok-free.app'

  const isLogin = computed(() => {
    if (accessToken.value) {
      return true
    } else return false
  })

  const getMovies = (url) => {
    axios({
      method: 'get',
      // url: `${API_URL}/movies/${url}/`,
      url: `/api/movies/${url}/`,
      headers: {
        Authorization: `Token ${accessToken.value}`,
        "Content-Type": 'application/json',
        "ngrok-skip-browser-warning": "skip",
      }
    })
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }

  const signup = (payload) => {
    axios({
      method: 'post',
      // url: `${API_URL}/accounts/signup/`,
      url: `/api/accounts/signup/`,
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
      // url: `${API_URL}/accounts/login/`,
      url: `/api/accounts/login/`,
      data: payload
    })
      .then(res => {
        console.log(res)
        accessToken.value = res.data.key
        loginModal.value = false
        console.log(accessToken.value)
        window.alert('로그인 성공!')        
        router.push({name: 'home'})
      })
      .catch(err => {
        console.log(err)
        console.log(payload)
      })
  }

  const logout = () => {
    axios({
      method: 'post',
      // url: `${API_URL}/accounts/logout/`,
      url: `/api/accounts/logout/`,
      headers: {
        Authorization: `Token ${accessToken.value}`
      }
    })
      .then(res =>{
        console.log(res)
        accessToken.value = null
        window.alert('로그아웃 되었습니다')
      })
      .catch(err=> console.log(err))
   }

  return { signup, login, loginModal, isLogin, logout, accessToken, getMovies }
}, { persist: true })
