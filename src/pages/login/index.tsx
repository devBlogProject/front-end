import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { TokenAtom } from '../../store/TokenAtom'
import { instance } from '@api/axios'
import { setCookie } from '@utils/cookies'
import GoogleLogin from '@components/login/GoogleLogin'
import { API } from '../../config'
import '@styles/Login.css'

function LoginPage() {
  const [error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const setTokenState = useSetRecoilState(TokenAtom)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.redirectedFrom?.pathname || '/'

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await instance.post(
        API.LOGIN_URL,
        JSON.stringify({ email, password }),
      )

      if (response.data) {
        const { accessToken, refreshToken } = response.data.data
        setCookie('accessToken', accessToken)
        setCookie('refreshToken', refreshToken)
        setTokenState(true)
        navigate(from)
      }
    } catch (error: any) {
      console.error(error?.code)
      navigate('/login')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'email') {
      setEmail(value)

      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if (!value?.match(validRegex)) {
        setError('이메일 형식이 올바르지 않습니다.')
      } else {
        setError('')
      }
    }

    if (name === 'password') {
      setPassword(value)

      if (value?.length < 4) {
        setError('비밀번호는 4자리 이상 입력해주세요')
      } else {
        setError('')
      }
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <h1 className="form__title">로그인</h1>
        {/* TODO: autoComplete="off"가 정상적으로 동작하지 않는 오류 해결 */}
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
            value={email}
          />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={onChange}
            value={password}
          />
        </div>
        <div className="form__block">
          계정이 없으신가요?
          <Link to="/signup" className="form__link">
            회원가입하기
          </Link>
        </div>
        <div className="form__block">
          <input
            type="submit"
            value="로그인"
            className="form__btn--submit"
            disabled={error?.length > 0}
          />
        </div>
      </form>
      <GoogleLogin />
    </>
  )
}

export default LoginPage
