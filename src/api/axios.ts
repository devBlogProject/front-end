import axios from 'axios'
import { BASE_URL } from '../config'
import { getCookie, removeCookie, setCookie } from '@utils/cookies'

/* INSTANCE WITHOUT TOKEN --------------------------------------------------- */
export const instance = axios.create({
  // VITE + React + TS에서는 proces 대신 import.meta.env를 사용
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
})

/* INSTANCE WITH TOKEN ------------------------------------------------------ */
export const tokenInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  withCredentials: true,
})

/* refreshToken으로 accessToken재발급 ----------------------------------------- */
async function postRefreshToken() {
  const response = await tokenInstance.post('/auth/refresh', {
    refreshToken: getCookie('refreshToken'),
  })
  return response
}

/* REQUEST INTERCEPTORS ----------------------------------------------------- */
tokenInstance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    const accessToken = getCookie('accessToken')
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

/* RESPONSE INTERCEPTORS ---------------------------------------------------- */
tokenInstance.interceptors.response.use(
  // 응답 데이터가 있는 작업 수행 : STATUS CODE 2XX
  (response) => {
    return response
  },
  // 응답 오류가 있는 작업 수행 : STATUS CODE WITHOUT 2XX
  async (error) => {
    try {
      const { message, config } = error
      // 재 요청을 위해 기존 데이터 저장
      const originalRequest = config
      if (message === 'Network Error') {
        /* GET: NEW ACCESSTOKEN ---------------------------------------------------- */
        const response = await postRefreshToken()
        originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`
        removeCookie('accessToken')
        setCookie('accessToken', response.data.data.accessToken)
        return axios(originalRequest)
      }
    } catch (error) {
      // 새로운 accessToken 발급에 실패한 경우 쿠키에 있던 기존 토큰을 모두 없애고 redirect
      removeCookie('accessToken')
      removeCookie('refreshToken')
      window.location.href = '/'
      return false
    }
    return Promise.reject(error)
  },
)
