import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useMovieStore = defineStore(
  "movie",
  () => {
    const router = useRouter();
    const loginModal = ref(false);
    const accessToken = ref(null);
    const nowplayingMovies = ref([]);
    const popularMovies = ref([]);
    const userInfo = ref(null);
    const recommendMovies = ref([]);
    const movieGenres = ref({
      12: "어드벤처",
      14: "판타지",
      16: "애니메이션",
      18: "드라마",
      27: "호러",
      28: "액션",
      35: "코미디",
      36: "역사",
      37: "서부",
      53: "스릴러",
      80: "범죄",
      99: "다큐멘터리",
      878: "SF",
      9648: "미스터리",
      10402: "음악",
      10749: "로맨스",
      10751: "가족",
      10752: "전쟁",
      10770: "TV 영화",
    });

    // accesstoken 는 분단위
    // refreshtoken 은 일단위

    const API = 'http://localhost:8000'

    const isLogin = computed(() => {
      if (accessToken.value) {
        return true;
      } else return false;
    });

    const getrecommendMovies = async (id) => {
      await axios({
        method: "get",
        // url: `${API}/movies/4/recommend/`,
        url: `/api/movies/${id}/recommend/`,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          console.log('얍')
          console.log(res.data);
          recommendMovies.value = res.data
  
          // return res.data
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getMovies = async (url) => {
      return await axios({
        method: "get",
        // url: `${API}/movies/${url}/`,
        url: `/api/movies/${url}/`,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getMyInfo = () => {
      axios({
        method: "get",
        // url: `${API}/accounts/user/`,
        url: "/api/accounts/user/",
        headers: {
          Authorization: `Token ${accessToken.value}`,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          console.log("유저 정보 !!");
          console.log(res.data);
          getrecommendMovies(res.data.pk);
          getMyInfo2(res.data.pk)
        })
        .catch((err) => console.log(err));
    };

    const getMyInfo2 = (id) => {
      axios({
        method: "get",
        // url: `${API}/accounts/user/`,
        url: `/api/accounts/${id}/`,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          // console.log(res.data);
          userInfo.value = res.data;
        })
        .catch((err) => console.log(err));
    };

    const getUserInfo = (id) => {
      const nickname = ref(null)
      return axios({
        method: "get",
        // url: `${API}/accounts/user/`,
        url: `/api/accounts/${id}/`,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          // console.log(res.data);
          nickname.value = res.data.nickname
          return nickname.value
        })
        .catch((err) => console.log(err));
    };


    const getCSRFToken = () => {
      const name = "csrftoken=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(";");

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }

      return null;
    };

    const login = (payload) => {
      const csrfToken = getCSRFToken();

      axios({
        method: "post",
        // url: `${API}/accounts/login/`,
        url: `/api/accounts/login/`,
        data: payload,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
          "X-CSRFToken": csrfToken,  // CSRF 토큰을 헤더에 추가
        },
      })
        .then((res) => {
          accessToken.value = res.data.key;
          loginModal.value = false;
          // console.log(accessToken.value)
          window.alert("로그인 성공!");
          router.push({ name: "home" });
          getMyInfo();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const logout = () => {

      const csrfToken = getCSRFToken();
      axios({
        method: "post",
        // url: `${API}/accounts/logout/`,
        url: `/api/accounts/logout/`,
        headers: {
          Authorization: `Token ${accessToken.value}`,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
          "X-CSRFToken": csrfToken,  // CSRF 토큰을 헤더에 추가
        },
      })
        .then((res) => {
          accessToken.value = null;
          userInfo.value = null;
          window.alert("로그아웃 되었습니다");
        })
        .catch((err) => console.log(err));
    };

    

    const signup = (payload) => {

      axios({
        method: "post",
        // url: `${API}/accounts/signup/`,
        url: '/api/accounts/signup/',
        data: payload,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          console.log('* 회원가입 성공?')
          window.alert("회원가입 성공 !");
          login({username: payload.username, password: payload.password1})
          // router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      signup,
      login,
      logout,
      getMovies,
      getrecommendMovies,
      getMyInfo,
      getUserInfo,
      movieGenres,
      accessToken,
      loginModal,
      isLogin,
      userInfo,
      nowplayingMovies,
      popularMovies,
      recommendMovies
    };
  },
  { persist: true }
);