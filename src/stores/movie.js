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

    const isLogin = computed(() => {
      if (accessToken.value) {
        return true;
      } else return false;
    });

    const recommendMovies = async () => {
      return await axios({
        method: "get",
        url: `/api/movies/4/recommend/`,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          console.log(res.data);
          // return res.data
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getMovies = async (url) => {
      return await axios({
        method: "get",
        url: `/api/movies/${url}/`,
        headers: {
          // Authorization: `Token ${accessToken.value}`,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "skip",
        },
      })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getUserInfo = () => {
      axios({
        method: "get",
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
          userInfo.value = res.data;
        })
        .catch((err) => console.log(err));
    };

    const signup = (payload) => {
      axios({
        method: "post",
        // url: `${API_URL}/accounts/signup/`,
        url: `/api/accounts/signup/`,
        data: payload,
      })
        .then((res) => {
          window.alert("회원가입 성공 !");
          router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const login = (payload) => {
      axios({
        method: "post",
        // url: `${API_URL}/accounts/login/`,
        url: `/api/accounts/login/`,
        data: payload,
      })
        .then((res) => {
          accessToken.value = res.data.key;
          loginModal.value = false;
          // console.log(accessToken.value)
          window.alert("로그인 성공!");
          router.push({ name: "home" });
          getUserInfo();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const logout = () => {
      axios({
        method: "post",
        // url: `${API_URL}/accounts/logout/`,
        url: `/api/accounts/logout/`,
        headers: {
          Authorization: `Token ${accessToken.value}`,
        },
      })
        .then((res) => {
          accessToken.value = null;
          window.alert("로그아웃 되었습니다");
        })
        .catch((err) => console.log(err));
    };

    return {
      signup,
      login,
      logout,
      getMovies,
      recommendMovies,
      getUserInfo,
      movieGenres,
      accessToken,
      loginModal,
      isLogin,
      nowplayingMovies,
      popularMovies,
    };
  },
  { persist: true }
);
