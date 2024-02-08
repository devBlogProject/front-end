import { Cookies } from 'react-cookie'

const cookies = new Cookies()

// TODO: 쿠키 만료기간 설정 관련 논의
export const setCookie = (name: string, value: string, options?: object) => {
  return cookies.set(name, value, { ...options, path: '/' })
}

export const getCookie = (name: string) => {
  return cookies.get(name)
}

export const removeCookie = (name: string, options?: object) => {
  return cookies.remove(name, { ...options, path: '/' })
}
